import { MODULES } from '../../data/modules.js';
import { GROUPS } from '../../data/groups.js';
import { useProgress } from '../../data/progressStore.js';
import { useLanguage } from '../../i18n/LanguageContext.jsx';

function StatusAffordance({ status, bestScore, t }) {
  if (status === 'completed') {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-navy-100 px-3 py-1 text-sm text-navy-900">
        {t('completedStatus')}
        {typeof bestScore === 'number' ? ` · ${bestScore}%` : null}
      </span>
    );
  }
  const label = status === 'not-started' ? t('start') : t('continue');
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-orange px-3 py-1 text-sm text-white">
      {label}
    </span>
  );
}

export default function ModuleList({ onSelectModule }) {
  const { lang, t } = useLanguage();
  const { learner, getModuleProgress } = useProgress();

  const group = GROUPS.find((g) => g.id === learner.groupId);
  const flagship = MODULES.find((m) => m.id === 'food-hygiene-complete');
  const otherModules = MODULES.filter((m) => m.id !== 'food-hygiene-complete');
  const flagshipProgress = getModuleProgress('food-hygiene-complete');

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl text-navy-900">
          {t('greeting')} {learner.name[lang]}
        </h1>
        {group ? (
          <p className="text-navy-700">
            {t('groupLabel')}: {group.name[lang]}
          </p>
        ) : null}
      </div>

      {flagship ? (
        <button
          type="button"
          onClick={() => onSelectModule(flagship.id)}
          className="flex flex-col gap-3 rounded-2xl border border-navy-200 bg-cream p-5 text-start"
        >
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-navy-900 px-3 py-1 text-xs text-white">
              {t('requiredBadge')}
            </span>
            {flagship.hasVideo ? (
              <span className="inline-flex items-center rounded-full bg-navy-100 px-3 py-1 text-xs text-navy-900">
                {t('includesVideo')}
              </span>
            ) : null}
          </div>

          <h2 className="text-xl text-navy-900">{flagship.title[lang]}</h2>
          <p className="text-navy-700">{flagship.description[lang]}</p>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <span className="text-sm text-navy-700">
              {flagship.estimatedMinutes} {t('minutesUnit')}
            </span>
            <StatusAffordance
              status={flagshipProgress.status}
              bestScore={flagshipProgress.assessment.bestScore}
              t={t}
            />
          </div>
        </button>
      ) : null}

      <div className="flex flex-col gap-3">
        <h3 className="text-lg text-navy-900">{t('moreTrainingHeading')}</h3>
        <div className="flex flex-col gap-2">
          {otherModules.map((module) => {
            const progress = getModuleProgress(module.id);
            return (
              <button
                key={module.id}
                type="button"
                onClick={() => onSelectModule(module.id)}
                className="flex flex-col gap-2 rounded-xl border border-navy-200 bg-cream p-4 text-start sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-navy-900">{module.title[lang]}</span>
                  <span className="text-sm text-navy-700">
                    {module.estimatedMinutes} {t('minutesUnit')}
                  </span>
                </div>
                <StatusAffordance
                  status={progress.status}
                  bestScore={progress.assessment.bestScore}
                  t={t}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
