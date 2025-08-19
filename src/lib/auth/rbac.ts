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
  constructor(message = 'Insufficient permissions') {
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

export async function requireRole(
  requiredRole: Role,
  userOverride?: Record<string, unknown> | null
) {
  const user = await requireUser(userOverride);
  const role = getRoleFromClaims(user);

  // Role hierarchy: admin > editor > viewer
  const roleHierarchy = { admin: 3, editor: 2, viewer: 1 };
  const userLevel = roleHierarchy[role as keyof typeof roleHierarchy] || 0;
  const requiredLevel = roleHierarchy[requiredRole as keyof typeof roleHierarchy] || 0;

  if (userLevel < requiredLevel) throw new ForbiddenError();
  return user;
}

export async function requireCanManageEmployees(userOverride?: Record<string, unknown> | null) {
  const user = await requireUser(userOverride);
  const role = getRoleFromClaims(user);
  if (!canManageEmployees(role)) throw new ForbiddenError();
  return user;
}

export async function requireCanManageContent(userOverride?: Record<string, unknown> | null) {
  const user = await requireUser(userOverride);
  const role = getRoleFromClaims(user);
  if (!canManageContent(role)) throw new ForbiddenError();
  return user;
}
