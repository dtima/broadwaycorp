/**
 * Validation script for src/i18n/request.ts
 * Ensures static imports are used instead of dynamic imports for reliability
 */

import { readFileSync } from 'fs';
import { join } from 'path';

const CONFIG_PATH = join(process.cwd(), 'src', 'i18n', 'request.ts');

try {
  const content = readFileSync(CONFIG_PATH, 'utf-8');
  
  // Check for problematic dynamic import patterns
  const dynamicImportPattern = /messages:.*import\(/;
  if (dynamicImportPattern.test(content)) {
    console.error('\n❌ ERROR: Dynamic import detected in src/i18n/request.ts');
    console.error('\nDynamic imports are unreliable for i18n messages.');
    console.error('Use static imports instead:\n');
    console.error('  import enMessages from \'@/lib/i18n/messages/en.json\';');
    console.error('  import frMessages from \'@/lib/i18n/messages/fr.json\';\n');
    process.exit(1);
  }
  
  // Check for required static imports
  const hasEnImport = /import\s+\w+\s+from\s+['"]@\/lib\/i18n\/messages\/en\.json['"]/.test(content);
  const hasFrImport = /import\s+\w+\s+from\s+['"]@\/lib\/i18n\/messages\/fr\.json['"]/.test(content);
  
  if (!hasEnImport || !hasFrImport) {
    console.error('\n❌ ERROR: Missing required static imports in src/i18n/request.ts');
    console.error('\nRequired imports:');
    console.error('  import enMessages from \'@/lib/i18n/messages/en.json\';');
    console.error('  import frMessages from \'@/lib/i18n/messages/fr.json\';\n');
    process.exit(1);
  }
  
  console.log('✅ src/i18n/request.ts validation passed');
} catch (error) {
  console.error('❌ Failed to validate src/i18n/request.ts:', error);
  process.exit(1);
}
