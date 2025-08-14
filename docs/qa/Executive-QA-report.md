Scanning the auth and Firebase integration files to assess RBAC, session cookie handling, Firestore rules, and admin route protection, focusing on production readiness and emulator safety.
Ran tool
Ran tool
Ran tool
Ran tool
Ran tool

Ran tool

### Executive QA report (focus: Firebase/auth/Firestore and default admin setup)

- • Scope: RBAC model, session/auth flows, Firestore rules vs server actions, emulator safety, secrets handling, production claims execution.
- • Verdict: Core primitives exist, but critical gaps remain in authorization enforcement and secret handling before production.

### Findings

- • RBAC claims shape
  - Custom claim key used: `role` with values `admin|editor|viewer` (see `src/lib/auth/rbac.ts`).
  - UI reads role to show/hide items; server actions do not verify role.

- • Session cookies
  - Session cookie minted in server action (`createSession`) and verified via `adminAuth.verifySessionCookie(..., true)` in `getCurrentUser`. Good: revocation check enabled.
  - Cookie attributes: httpOnly, secure, sameSite=lax. Note: secure cookies won’t set over http during local dev.

- • Admin route protection
  - `src/app/(admin)/[locale]/layout.tsx` loads user and role but does not enforce access. Unauthenticated/under‑privileged users are not redirected.

- • Firestore security rules
  - `firestore.rules` correctly restricts writes by role for collections.
  - Risk: server actions use Firebase Admin SDK (`adminDb`) which bypasses Firestore rules entirely. No server-side authorization checks exist in actions like `createEmployee`, `updateEmployee`, `deleteEmployee`.

- • Input validation
  - No Zod schemas are used on server actions or API paths; raw `FormData` is trusted.

- • Emulator usage
  - Auth emulator: standard port 9099. Single‑project warnings observed; `firebase.json` lacks `singleProjectMode: false` when mixing project IDs.
  - We disabled Emulator UI to avoid blocked downloads, which is appropriate under restricted networks.
  - Client Firestore emulator connection currently enabled unconditionally in non‑production (`NODE_ENV !== 'production'`) while Auth emulator is gated with `NEXT_PUBLIC_USE_FIREBASE_EMULATORS`. Mismatch.

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

- • P0: Admin SDK bypasses Firestore rules; server actions lack role checks. Any caller to a server action can mutate protected collections if routes are hit.
- • P0: Service account JSON present in repo tree; risk of leakage.
- • P1: Admin pages not guarded; unauthorized users can access admin UIs and attempt actions (even if they fail later).
- • P2: No input validation; potential bad data and security exposure.
- • P2: Emulator flags inconsistent; potential to hit emulator unexpectedly or production unintentionally.
- • P3: No token revocation on sign-out; logs/rate-limits/CSRF missing.

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

- • Security
  - No service account files in repo.
  - Cookie/session behavior verified in http/https contexts.

If you want, I can implement the P0/P1 edits now and wire a small integration test that exercises a forbidden server action path.

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

- [ ] P2: Input validation with Zod
  - TODO: add schemas and integrate into actions.

- [ ] P1: CSRF/origin checks on state-changing actions
  - TODO: add origin validation helper and apply to actions.

- [x] CI path for default admin claims is in place (GitHub Actions workflow).

### Next
- Ensure integration test passes for unauthorized access. (In progress)
- Add Zod validation (P2) and origin checks (P1).