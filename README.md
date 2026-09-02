# Zuccess Training

Zuccess Training is a bilingual (English / Arabic, with full RTL support) demo of an employee
micro-learning platform. Employees log in, work through short training modules made up of a
video, recap cards, and a scored assessment, and earn a badge and printable certificate on
completion. A separate admin view rolls progress up by group and by individual learner. The app
is a self-contained front-end demo: all data (employees, groups, training content, and the
synthetic learner population shown in the admin dashboard) is hardcoded in the JS bundle, and a
learner's own progress is kept in the browser's `localStorage`, namespaced per employee number.

## Running it

Install dependencies once, then use the Vite scripts defined in `package.json`:

```bash
npm install

npm run dev      # start the local dev server with hot reload
npm run build    # produce a production build in dist/
npm run preview  # locally preview the production build
```

## Test accounts

Login is a two-step, name-then-employee-number flow. Use any of the five employees below (name
in either language is accepted):

| Name (EN) | Name (AR) | Employee number | Group | Role |
|---|---|---|---|---|
| Ahmed Al-Rashid | أحمد الراشد | `EMP-1042` | Kitchen Staff | Learner |
| Fatima Al-Zahrani | فاطمة الزهراني | `EMP-2187` | Front of House | Learner |
| Omar Haddad | عمر حداد | `EMP-3355` | Delivery Drivers | Learner |
| Layla Mansour | ليلى منصور | `EMP-4021` | Warehouse & Receiving | Learner |
| Yusuf Karim | يوسف كريم | `EMP-5610` | Supervisors | Admin |

Only Yusuf Karim (`EMP-5610`) sees the Admin tab; the other four are learner-only accounts.

### Demo bypass

Appending `?skipLogin=1` to the app's URL logs you straight in as Ahmed Al-Rashid (`EMP-1042`),
skipping the login screen entirely. This exists so a live demo never has to stall on a login
hiccup.

## This is not real security

This app deliberately ships **no backend and no real authentication or authorization**. Two
things that look like security are demo conveniences only:

- **Login** is a client-side check that matches a typed name and employee number against the
  hardcoded list in `src/data/employees.js`, which ships in full inside the JS bundle. It
  identifies which demo persona you're using; it does not authenticate anyone in any meaningful
  sense, and there are no passwords, tokens, or hashing involved.
- **The Admin/Learner role split** is a client-side UI display choice only. The Admin tab is
  simply hidden in the UI for non-admin accounts — nothing on the server (there is no server)
  enforces it, and the underlying data for every employee and every synthetic learner ships in
  the bundle regardless of who is logged in or what role they have.
- **Video-completion enforcement** (blocking forward seeking, requiring playback to reach the
  end before "Continue" unlocks) is also a client-side-only check. It can be bypassed from
  devtools by anyone who wants to, and it has no way to detect whether a person is actually
  watching the screen. It discourages casual skipping; it does not prove attendance.

A real deployment would need an actual backend to authenticate users and authorize access to
data — this project doesn't attempt that, by design.

## Focus tracking - known limitations

While a learner is watching a video or taking an assessment, the app notes when the browser tab
loses and regains focus, as a lightweight engagement signal shown to admins. This has real
limits, and it's important not to over-read it:

- It only ever detects that **this browser tab** lost focus — never where the user went or what
  they did instead.
- It cannot see other applications, other browser tabs, other devices, or the physical screen.
- It will produce false positives from OS/browser notifications, screen locks, and incidental
  alt-tabbing that have nothing to do with disengagement.

Treat focus-tracking data as a rough signal worth a human glance, not as evidence of anything.
