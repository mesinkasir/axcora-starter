import fs from 'fs';
import path from 'path';

const cliPath = path.join(process.cwd(), 'dist/cli/index.js');

try {
  // Check if file exists
  if (!fs.existsSync(cliPath)) {
    console.error('❌ CLI file not found at:', cliPath);
    process.exit(1);
  }

  // Read the file
  let content = fs.readFileSync(cliPath, 'utf8');
  
  // Add shebang if not present
  if (!content.startsWith('#!/usr/bin/env node')) {
    content = '#!/usr/bin/env node\n' + content;
    fs.writeFileSync(cliPath, content);
    console.log('✅ Added shebang to CLI');
  }
  
  // Make executable on Unix systems
  if (process.platform !== 'win32') {
    fs.chmodSync(cliPath, 0o755);
    console.log('✅ Made CLI executable');
  }
  
  console.log('✅ CLI executable created at:', cliPath);
} catch (error) {
  console.error('❌ Failed to make CLI executable:', error.message);
  process.exit(1);
}
