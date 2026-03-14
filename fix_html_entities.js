const fs = require('fs');

const files = [
  'Jav工具库.user.js',
  'Jav-Tool.user.js',
  'Jav工具库-7.0.6.user.js',
  'Jav工具库-7.0.5.user.js'
];

function decodeHtmlEntities(str) {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

files.forEach(file => {
  try {
    const content = fs.readFileSync(file, 'utf8');
    const fixedContent = decodeHtmlEntities(content);
    fs.writeFileSync(file, fixedContent, 'utf8');
    console.log(`Fixed: ${file}`);
  } catch (e) {
    console.error(`Error processing ${file}:`, e.message);
  }
});

console.log('Done!');
