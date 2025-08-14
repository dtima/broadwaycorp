export function isAllowedOrigin(originHeader: string | null | undefined): boolean {
  if (!originHeader) return false;
  try {
    const origin = new URL(originHeader);
    const allowed = (process.env.NEXT_PUBLIC_SITE_URL || '')
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);
    if (allowed.length === 0) return false;
    return allowed.some((base) => {
      try {
        const url = new URL(base);
        return url.origin === origin.origin;
      } catch {
        return false;
      }
    });
  } catch {
    return false;
  }
}
