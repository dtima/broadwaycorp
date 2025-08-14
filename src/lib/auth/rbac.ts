export type Role = 'admin' | 'editor' | 'viewer' | undefined;

export function getRoleFromClaims(user: Record<string, unknown> | null): Role {
  if (!user) return undefined;
  const role = (user as any).role as Role;
  return role;
}

export function canManageEmployees(role: Role): boolean {
  return role === 'admin';
}

export function canManageContent(role: Role): boolean {
  return role === 'admin' || role === 'editor';
}

// Authorization guard errors
export class UnauthorizedError extends Error {
  constructor(message = 'Unauthorized') {
    super(message);
    this.name = 'UnauthorizedError';
  }
}

export class ForbiddenError extends Error {
  constructor(message = 'Forbidden') {
    super(message);
    this.name = 'ForbiddenError';
  }
}

// Guards usable in server actions; allow injecting a user for testability
import { getCurrentUser } from '@/lib/auth/session';

export async function requireUser(userOverride?: Record<string, unknown> | null) {
  const user = userOverride ?? (await getCurrentUser());
  if (!user) throw new UnauthorizedError();
  return user;
}

export async function requireCanManageEmployees(userOverride?: Record<string, unknown> | null) {
  const user = await requireUser(userOverride);
  const role = getRoleFromClaims(user);
  if (!canManageEmployees(role)) throw new ForbiddenError();
}

export async function requireCanManageContent(userOverride?: Record<string, unknown> | null) {
  const user = await requireUser(userOverride);
  const role = getRoleFromClaims(user);
  if (!canManageContent(role)) throw new ForbiddenError();
}
