const fs = require('fs');
const path = require('path');

const source = path.join(__dirname, 'rules');
const target = path.join(process.cwd(), '.cursor/rules');

if (!fs.existsSync(target)) {
  fs.mkdirSync(target, { recursive: true });
}

fs.readdirSync(source).forEach(file => {
  fs.copyFileSync(
    path.join(source, file),
    path.join(target, file)
  );
});

console.log('✅ Cursor rules synced');