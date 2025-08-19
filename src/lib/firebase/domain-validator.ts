/**
 * Firebase Domain Validation Utility
 * Helps diagnose and resolve domain authorization issues
 */

export interface DomainValidationResult {
  isValid: boolean;
  currentOrigin: string;
  expectedOrigins: string[];
  authDomain: string;
  issues: string[];
  recommendations: string[];
}

/**
 * Validate current domain against Firebase configuration
 */
export function validateFirebaseDomain(): DomainValidationResult {
  const currentOrigin = typeof window !== 'undefined' ? window.location.origin : 'server';
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || '';
  const authDomain = process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || '';

  const expectedOrigins = [
    siteUrl,
    'http://localhost:3000',
    'http://localhost:3001',
    'https://broadway-corp.com',
    'https://www.broadway-corp.com',
  ].filter(Boolean);

  const issues: string[] = [];
  const recommendations: string[] = [];

  // Check if current origin matches site URL
  if (currentOrigin !== siteUrl && siteUrl) {
    issues.push(
      `Current origin (${currentOrigin}) doesn't match NEXT_PUBLIC_SITE_URL (${siteUrl})`
    );
    recommendations.push('Update .env.local NEXT_PUBLIC_SITE_URL to match your dev server port');
  }

  // Check if auth domain is configured
  if (!authDomain) {
    issues.push('Missing NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN');
    recommendations.push('Add Firebase Auth Domain to environment variables');
  }

  // Check for common localhost port mismatches
  if (currentOrigin.includes('localhost:3001') && siteUrl.includes('localhost:3000')) {
    issues.push('Port mismatch: running on 3001 but configured for 3000');
    recommendations.push('Update NEXT_PUBLIC_SITE_URL to http://localhost:3001');
  }

  const isValid = issues.length === 0;

  return {
    isValid,
    currentOrigin,
    expectedOrigins,
    authDomain,
    issues,
    recommendations,
  };
}

/**
 * Log domain validation results for debugging
 */
export function logDomainValidation(): DomainValidationResult {
  const result = validateFirebaseDomain();

  console.group('🔍 Firebase Domain Validation');
  console.log('Current Origin:', result.currentOrigin);
  console.log('Expected Origins:', result.expectedOrigins);
  console.log('Auth Domain:', result.authDomain);
  console.log('Is Valid:', result.isValid);

  if (result.issues.length > 0) {
    console.warn('Issues Found:');
    result.issues.forEach((issue) => console.warn('  ❌', issue));
  }

  if (result.recommendations.length > 0) {
    console.info('Recommendations:');
    result.recommendations.forEach((rec) => console.info('  💡', rec));
  }

  console.groupEnd();

  return result;
}

/**
 * Generate Firebase Console authorized domains list
 */
export function getAuthorizedDomainsList(): string[] {
  return [
    'localhost',
    'broadway-corp.com',
    'www.broadway-corp.com',
    // Add your Vercel preview domains
    '*.vercel.app',
  ];
}
