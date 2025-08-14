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
