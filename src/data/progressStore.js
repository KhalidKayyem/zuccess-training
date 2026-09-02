/**
 * @file localStorage-backed progress store for the CURRENTLY LOGGED-IN
 * employee. Progress is namespaced per employee (see EMPLOYEES in
 * ./employees.js) so each of the demo learners keeps their own independent
 * history. This is NOT the bulk synthetic population used by the admin
 * dashboard; that is a separate, unrelated concern (see src/data/learners.js).
 *
 * Implemented as a small external-store singleton (subscribe/getSnapshot)
 * plus a React hook built on useSyncExternalStore, so multiple components
 * can read/subscribe without prop drilling or tearing issues.
 */

import { useSyncExternalStore } from 'react';
import { EMPLOYEES } from './employees.js';

export const SESSION_KEY = 'zuccess-session';
export const LEGACY_STORAGE_KEY = 'zuccess-progress';

function progressStorageKey(employeeNumber) {
  return `zuccess-progress:${employeeNumber}`;
}

function defaultModuleProgress() {
  return {
    status: 'not-started',
    cardsViewed: [],
    videoWatched: false,
    videoFocusEvents: [],
    assessment: {
      attempts: [],
      bestScore: null,
    },
    badgeEarned: false,
    certificateIssuedAt: null,
  };
}

function freshProgress() {
  return { modules: {} };
}

function looksLikeProgress(value) {
  return (
    value !== null &&
    typeof value === 'object' &&
    'modules' in value &&
    typeof value.modules === 'object' &&
    value.modules !== null
  );
}

function looksLikeRealProgress(value) {
  return looksLikeProgress(value) && Object.keys(value.modules).length > 0;
}

// ---- Safe localStorage helpers (never throw) ----

function safeGetItem(key) {
  try {
    if (typeof localStorage === 'undefined') {
      return null;
    }
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeSetItem(key, value) {
  try {
    if (typeof localStorage === 'undefined') {
      return;
    }
    localStorage.setItem(key, value);
  } catch {
    // Ignore quota/availability errors silently.
  }
}

function safeRemoveItem(key) {
  try {
    if (typeof localStorage === 'undefined') {
      return;
    }
    localStorage.removeItem(key);
  } catch {
    // Ignore quota/availability errors silently.
  }
}

function safeParseProgress(raw) {
  if (raw === null || raw === undefined) {
    return null;
  }
  try {
    const parsed = JSON.parse(raw);
    if (!looksLikeProgress(parsed)) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

function loadProgressFor(employeeNumber) {
  const raw = safeGetItem(progressStorageKey(employeeNumber));
  const parsed = safeParseProgress(raw);
  return parsed ?? freshProgress();
}

function persistProgressFor(employeeNumber, progress) {
  if (!employeeNumber) {
    return;
  }
  safeSetItem(progressStorageKey(employeeNumber), JSON.stringify({ modules: progress.modules }));
}

// ---- One-time legacy-key migration: 'zuccess-progress' -> 'zuccess-progress:EMP-1042' ----

function migrateLegacyProgress() {
  try {
    const legacyRaw = safeGetItem(LEGACY_STORAGE_KEY);
    if (legacyRaw === null || legacyRaw === undefined) {
      return;
    }
    const legacyParsed = safeParseProgress(legacyRaw);
    if (legacyParsed === null) {
      safeRemoveItem(LEGACY_STORAGE_KEY);
      return;
    }
    const targetKey = progressStorageKey('EMP-1042');
    const existingRaw = safeGetItem(targetKey);
    const existingParsed = safeParseProgress(existingRaw);
    if (!looksLikeRealProgress(existingParsed)) {
      safeSetItem(targetKey, JSON.stringify({ modules: legacyParsed.modules }));
    }
    safeRemoveItem(LEGACY_STORAGE_KEY);
  } catch {
    // Never let migration crash module load.
  }
}

migrateLegacyProgress();

// ---- Session helpers ----

function loadSessionEmployeeNumber() {
  const raw = safeGetItem(SESSION_KEY);
  return raw === null || raw === undefined || raw === '' ? null : raw;
}

function persistSessionEmployeeNumber(employeeNumber) {
  if (employeeNumber === null || employeeNumber === undefined) {
    safeRemoveItem(SESSION_KEY);
  } else {
    safeSetItem(SESSION_KEY, employeeNumber);
  }
}

function findEmployee(employeeNumber) {
  return EMPLOYEES.find((employee) => employee.employeeNumber === employeeNumber) ?? null;
}

// ---- Resolve initial snapshot synchronously at module load (skipLogin bypass) ----

function resolveSkipLoginBypass() {
  try {
    if (typeof window === 'undefined') {
      return false;
    }
    const params = new URLSearchParams(window.location.search);
    return params.get('skipLogin') === '1';
  } catch {
    return false;
  }
}

function buildInitialSnapshot() {
  const bypass = resolveSkipLoginBypass();
  const employeeNumber = bypass ? 'EMP-1042' : loadSessionEmployeeNumber();

  if (bypass) {
    persistSessionEmployeeNumber('EMP-1042');
  }

  if (employeeNumber === null || findEmployee(employeeNumber) === null) {
    return { employeeNumber: null, modules: {} };
  }

  const progress = loadProgressFor(employeeNumber);
  return { employeeNumber, modules: progress.modules };
}

// ---- Module-level mutable snapshot + listener set (useSyncExternalStore pattern) ----

let snapshot = buildInitialSnapshot();
const listeners = new Set();

function notify() {
  for (const listener of listeners) {
    listener();
  }
}

function setSnapshot(nextSnapshot) {
  snapshot = nextSnapshot;
  persistProgressFor(snapshot.employeeNumber, { modules: snapshot.modules });
  notify();
}

function subscribe(listener) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot() {
  return snapshot;
}

function getModule(moduleId) {
  return snapshot.modules[moduleId] ?? defaultModuleProgress();
}

// ---------------------------- Exported API ----------------------------

export function getProgress() {
  return snapshot;
}

export function getModuleProgress(moduleId) {
  return getModule(moduleId);
}

export function login(employeeNumber) {
  const employee = findEmployee(employeeNumber);
  if (employee === null) {
    return; // defensive no-op: unknown employee number
  }
  const progress = loadProgressFor(employeeNumber);
  persistSessionEmployeeNumber(employeeNumber);
  setSnapshot({ employeeNumber, modules: progress.modules });
}

export function logout() {
  persistSessionEmployeeNumber(null);
  setSnapshot({ employeeNumber: null, modules: {} });
}

export function markCardViewed(moduleId, cardId) {
  const current = getModule(moduleId);
  const alreadyViewed = current.cardsViewed.includes(cardId);
  const nextModule = {
    ...current,
    cardsViewed: alreadyViewed ? current.cardsViewed : [...current.cardsViewed, cardId],
    status: current.status === 'not-started' ? 'in-progress' : current.status,
  };
  setSnapshot({
    ...snapshot,
    modules: { ...snapshot.modules, [moduleId]: nextModule },
  });
}

export function markVideoWatched(moduleId) {
  const current = getModule(moduleId);
  const nextModule = {
    ...current,
    videoWatched: true,
    status: current.status === 'not-started' ? 'in-progress' : current.status,
  };
  setSnapshot({
    ...snapshot,
    modules: { ...snapshot.modules, [moduleId]: nextModule },
  });
}

export function addVideoFocusEvent(moduleId, event) {
  const current = getModule(moduleId);
  const nextModule = {
    ...current,
    videoFocusEvents: [...current.videoFocusEvents, event],
  };
  setSnapshot({
    ...snapshot,
    modules: { ...snapshot.modules, [moduleId]: nextModule },
  });
}

export function recordAssessmentAttempt(moduleId, { score, passed, answers, focusEvents }) {
  const current = getModule(moduleId);
  const attempt = {
    score,
    passed,
    answers,
    focusEvents: focusEvents ?? [],
    at: new Date().toISOString(),
  };
  const previousBest = current.assessment.bestScore;
  const nextBest = previousBest === null ? score : Math.max(previousBest, score);
  const wasCompleted = current.status === 'completed';
  const nextStatus = passed || wasCompleted ? 'completed' : 'in-progress';
  const becameCompletedNow = passed && !wasCompleted;

  const nextModule = {
    ...current,
    assessment: {
      attempts: [...current.assessment.attempts, attempt],
      bestScore: nextBest,
    },
    status: nextStatus,
    badgeEarned: current.badgeEarned || becameCompletedNow,
  };

  setSnapshot({
    ...snapshot,
    modules: { ...snapshot.modules, [moduleId]: nextModule },
  });
}

export function issueCertificate(moduleId) {
  const current = getModule(moduleId);
  if (current.certificateIssuedAt) {
    return; // idempotent
  }
  const nextModule = {
    ...current,
    certificateIssuedAt: new Date().toISOString(),
  };
  setSnapshot({
    ...snapshot,
    modules: { ...snapshot.modules, [moduleId]: nextModule },
  });
}

export function resetProgress() {
  if (snapshot.employeeNumber === null) {
    return; // not logged in: safe no-op
  }
  setSnapshot({ ...snapshot, modules: {} });
}

/**
 * Read-only lookup of an ARBITRARY employee's persisted progress, without
 * touching the live session/snapshot or notifying subscribers. Used by the
 * admin dashboard to inspect other employees' real progress.
 */
export function readProgressSnapshot(employeeNumber) {
  try {
    const raw = safeGetItem(progressStorageKey(employeeNumber));
    const parsed = safeParseProgress(raw);
    return parsed ?? freshProgress();
  } catch {
    return freshProgress();
  }
}

export function useProgress() {
  const currentSnapshot = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
  const employee = currentSnapshot.employeeNumber === null ? null : findEmployee(currentSnapshot.employeeNumber);
  const learner =
    employee === null
      ? null
      : {
          name: employee.name,
          groupId: employee.groupId,
          employeeNumber: employee.employeeNumber,
          role: employee.role,
        };

  return {
    learner,
    isLoggedIn: currentSnapshot.employeeNumber !== null,
    modules: currentSnapshot.modules,
    getModuleProgress,
    markCardViewed,
    markVideoWatched,
    recordAssessmentAttempt,
    issueCertificate,
    resetProgress,
    addVideoFocusEvent,
    login,
    logout,
  };
}
