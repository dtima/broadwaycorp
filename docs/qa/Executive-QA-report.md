Scanning the auth and Firebase integration files to assess RBAC, session cookie handling, Firestore rules, and admin route protection, focusing on production readiness and emulator safety.
Ran tool
Ran tool
Ran tool
Ran tool
Ran tool

Ran tool

### Executive QA report (focus: Firebase/auth/Firestore and default admin setup)

- • Scope: RBAC model, session/auth flows, Firestore rules vs server actions, emulator safety, secrets handling, production claims execution.
- • Verdict: Core primitives exist. Server-side authorization guards and admin route protection are now in place; emulator gating aligned. Remaining gaps: secrets hygiene, missing input validation (zod), missing CSP, no CSRF/origin checks, no structured logging/rate limiting.

### Findings

- • RBAC claims shape
  - Custom claim key used: `role` with values `admin|editor|viewer` (see `src/lib/auth/rbac.ts`).
  - UI reads role to show/hide items; server actions now enforce permissions via guards.

- • Session cookies
  - Session cookie minted in server action (`createSession`) and verified via `adminAuth.verifySessionCookie(..., true)` in `getCurrentUser`. Good: revocation check enabled.
  - Cookie attributes: httpOnly, secure, sameSite=lax. Note: secure cookies won’t set over http during local dev.

- • Admin route protection
  - `src/app/(admin)/[locale]/layout.tsx` redirects unauthenticated users to `/{locale}/admin/sign-in`. Module links respect role. Deep links for insufficient roles are blocked by server action guards.

- • Firestore security rules
  - `firestore.rules` correctly restricts writes by role for collections.
  - Server actions use Firebase Admin SDK (`adminDb`) which bypasses Firestore rules; mitigated by server-side authorization guards now enforced in all write actions.

- • Input validation
  - No Zod schemas are used on server actions or API paths; raw `FormData` is trusted.

- • Emulator usage
  - `firebase.json` sets `singleProjectMode: false`; Emulator UI disabled.
  - Client connects to Auth/Firestore emulators only when `NEXT_PUBLIC_USE_FIREBASE_EMULATORS === 'true'` and non‑production. Aligned and safe.

- • HTTP security headers
  - Configured in `next.config.mjs`: `HSTS`, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`.
  - Missing `Content-Security-Policy` header. README has a suggested CSP; not yet applied in config.

- • i18n coverage
  - Localized routing via custom `middleware.ts` and `[locale]` layouts; messages in `src/lib/i18n/messages/{en,fr}.json`. Uses `NextIntlClientProvider` with timezone set to UTC.

- • Error boundaries
  - No `error.tsx` found in app routes; errors would surface as unhandled server errors.

- • Tests
  - Integration: guard behavior covered (unauthenticated calls to server actions throw `UnauthorizedError`).
  - E2E: basic `/api/health` check only; admin flows and i18n render checks not yet covered.

- • Secrets and credentials
  - A service account file exists under `secrets/firebase-admin.json` inside the repo tree. High risk if committed or synced.
  - `src/lib/firebase/admin.ts` credentials resolution is sound (path, env, or ADC), but presence of plaintext JSON in the repo must be eliminated.

- • Default admin bootstrap
  - `scripts/set-admin-claims.ts`:
    - Sets `{role: 'admin'}` for the two UIDs provided.
    - When `FIREBASE_AUTH_EMULATOR_HOST` is set, it first creates users if missing (good for local).
    - Uses relative import to `../src/lib/firebase/admin`. OK.
  - CI path: Added `.github/workflows/set-admin-claims.yml` to run in GitHub Actions with secrets. Good for production without local network restrictions.

- • Sign-out
  - Deletes the session cookie, but does not revoke refresh tokens. Revocation might be desired for security-sensitive sign-outs.

- • Observability and rate limiting
  - No structured logging on auth/server actions; no rate limits; no origin/CSRF checks on state-changing requests.

### Risk assessment

- • P0: Admin SDK bypasses Firestore rules; server actions lacked role checks (fixed via guards). Residual risk acceptable with guards + tests.
- • P0: Service account JSON present in repo tree; risk of leakage.
- • P1: Admin pages not guarded (resolved with redirect in admin layout).
- • P2: No input validation; potential bad data and security exposure.
- • P2: Emulator flags inconsistent (resolved; gated by single flag).
- • P3: No token revocation on sign-out; logs/rate-limits/CSRF missing.
- • P2: Missing Content-Security-Policy header.
- • P3: No error boundaries; unstructured logging; no rate limiting; no CSRF/origin checks.

### Remediation plan (prioritized)

- • P0: Enforce role authorization in server actions (must do)
  - Add helpers in `src/lib/auth/rbac.ts`:
    - `requireUser()` → read session via `getCurrentUser()` or throw 401.
    - `requireRole(role: 'admin'|'editor'|'viewer')` → derive role from claims, throw 403 if insufficient.
    - Specific guards: `requireCanManageEmployees()`, `requireCanManageContent()`.
  - Use these at the start of all server actions that write to Firestore, e.g.:
    - `createEmployee`, `updateEmployee`, `deleteEmployee` → call `requireCanManageEmployees()` before calling `adminDb`.
    - Inventory/Projects/Todos actions → call `requireCanManageContent()`.

- • P0: Remove secrets from repo; use env/CI secrets
  - Delete `secrets/firebase-admin.json` from the repository and add `secrets/` to `.gitignore`.
  - For local: use `FIREBASE_ADMIN_CREDENTIALS_PATH` to point to a locally stored, non‑tracked path.
  - CI: keep using the GitHub Actions workflow with `FIREBASE_ADMIN_CREDENTIALS_JSON` secret.

- • P1: Guard admin routes in layout
  - In `src/app/(admin)/[locale]/layout.tsx`, after fetching user/role:
    - If no user: redirect to `/{locale}/admin/sign-in`.
    - If visiting an employees page without `admin` role: show 403 page or redirect with a message.
  - Optional: split sub-layouts per module (employees, content) with stricter guards.

- • P1: Add origin/CSRF checks on state-changing routes/server actions
  - For server actions: check `headers().get('origin')` against allowed origins and/or include CSRF token tied to the session cookie.

- • P1: Add Content-Security-Policy
  - Apply CSP from README in `next.config.mjs` headers; adjust `script-src` for analytics if enabled.

- • P1: Align emulator gating
  - Update `src/lib/firebase/client.ts` to connect Firestore emulator only when `NEXT_PUBLIC_USE_FIREBASE_EMULATORS === 'true'` (and not in production), matching Auth’s gate.
  - Add `firebase.json`:
    - `"singleProjectMode": false` under `emulators` to silence multi‑project warnings when using demo + prod in the same workspace.

- • P2: Add Zod validation for inputs
  - Create `src/lib/validations/{employees,projects,...}.ts` with schemas.
  - Validate in server actions before writing to Firestore.

- • P2: Session hardening
  - On `destroySession`, also call `getAuth().revokeRefreshTokens(uid)` (requires user context) or leave as-is with documented tradeoffs.

- • P3: Logging and rate limits
  - Add minimal structured logs (no PII) on sign-in/out and write actions.
  - Consider basic rate-limiting on sign-in attempts (e.g., IP + account backoff).

- • P3: set-admin-claims UX
  - Add a package script alias: `"admin:grant": "tsx scripts/set-admin-claims.ts"`.
  - Document usage in README (emulator vs prod). Ensure the script errors if both emulator and service account envs are unset to prevent surprises.

### Concrete change list

- • Authorization guards
  - `src/lib/auth/rbac.ts`
    - Add `requireUser`, `requireRole`, `requireCanManageContent`, `requireCanManageEmployees`.
  - Update all server actions under `src/app/(admin)/[locale]/actions/*` to call appropriate guards before any write.

- • Admin layout protection
  - `src/app/(admin)/[locale]/layout.tsx`
    - Redirect unauthenticated to sign-in.
    - Gate module links by role (already conditional) and block content rendering for insufficient roles (render 403 or redirect).

- • Emulator consistency
  - `src/lib/firebase/client.ts`
    - Gate Firestore emulator connection with `NEXT_PUBLIC_USE_FIREBASE_EMULATORS === 'true'` and `NODE_ENV !== 'production'`.
  - `firebase.json` → add `"singleProjectMode": false`.

- • Security headers
  - `next.config.mjs`
    - Keep `HSTS`, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`.
    - Add `Content-Security-Policy` per README.

- • Input validation
  - `src/lib/validations/*`
    - Add Zod schemas (employees, inventory, projects, todos).
  - Use schemas in server actions to parse/validate data.

- • Secrets hygiene
  - Add `secrets/` to `.gitignore`; remove tracked `secrets/firebase-admin.json` from git.
  - Keep GH Actions workflow; confirm repo secrets set.

- • set-admin-claims improvements
  - No code changes strictly required for correctness.
  - Optional: accept `--uid`/`--email` args to run ad-hoc; default to the two org emails when none provided.
  - Guard rails: if both emulator and service account envs are missing, exit with a helpful message.

### Acceptance checks (post-fix)

- • AuthZ
  - Unauthenticated requests to any `/{locale}/admin/*` route redirect to `/{locale}/admin/sign-in`.
  - Editor cannot access Employees module; receives 403 or no nav and deep-link blocked.
  - Admin can CRUD Employees; editor can CRUD content; viewer read-only paths enforced by server actions.

- • Server actions
  - Each write path returns 401/403 appropriately if session is missing/insufficient.
  - Zod validation errors return structured messages.

- • Firestore
  - Writes succeed only when server-side guards pass; no reliance on rules since Admin SDK bypasses them.
  - Client code respects rules (if any client writes exist).

- • set-admin-claims
  - Emulator: creates users if missing and sets role=admin.
  - Production: workflow run completes; both UIDs show `role=admin` in Firebase console; affected users see admin nav after re-login.

- • Emulator hygiene
  - No more multi-project warnings after `"singleProjectMode": false`.
  - Auth + Firestore emulator opt-in via single NEXT_PUBLIC flag in dev.

- • Security headers
   - CSP applied and verified; no violations in console for core pages.

- • Security
  - No service account files in repo.
  - Cookie/session behavior verified in http/https contexts.

If you want, I can finalize CSP + CSRF/origin checks and expand E2E coverage for admin/i18n flows.

---

## Progress Log

- [x] P1: Emulator hygiene
  - Updated `firebase.json` to disable UI and set `singleProjectMode: false`.
  - Aligned Firestore emulator connection to `NEXT_PUBLIC_USE_FIREBASE_EMULATORS` + non‑production in `src/lib/firebase/client.ts`.

- [x] P0: Server-side authorization guards
  - Added `requireUser`, `requireCanManageEmployees`, `requireCanManageContent` in `src/lib/auth/rbac.ts`.
  - Applied guards to server actions: `employees`, `inventory`, `projects`, `todos`.

- [x] P1: Admin layout baseline protection
  - `src/app/(admin)/[locale]/layout.tsx` now uses `redirect` to send unauthenticated users to `/{locale}/admin/sign-in`.

- [x] P1: Security headers baseline
  - Verified `HSTS`, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` in `next.config.mjs`.
  - Added `Content-Security-Policy` to `next.config.mjs` based on README guidance.

- [x] P1: Integration test for unauthorized access
  - Added `src/tests/integration/authorization.test.ts` to assert guards reject unauthenticated calls.

- [x] P2: Input validation with Zod
  - Added zod schemas in `src/lib/validations/*` and integrated into server actions for employees, inventory, projects, and todos.

- [x] P1: CSRF/origin checks on state-changing actions
  - Added `isAllowedOrigin` helper in `src/lib/utils/index.ts` and applied origin checks to all admin server actions.

- [x] P1: Content Security Policy
  - Implemented CSP header in `next.config.mjs`.

- [x] P2: Error boundaries
  - Added `src/app/error.tsx`, `src/app/(admin)/[locale]/error.tsx`, `src/app/(public)/[locale]/error.tsx` for graceful failures.

- [x] CI path for default admin claims is in place (GitHub Actions workflow).

### Next
- Expand E2E for admin flows, role-based nav, and i18n rendering (en/fr).
- Add structured logging (server) and basic rate limiting on sensitive actions.
- Remove committed secrets from history; confirm CI secrets. Add README notes for local creds path env.