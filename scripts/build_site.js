const fs = require('fs');
const data = JSON.parse(fs.readFileSync('website/top5.json','utf8'));
let html = fs.readFileSync('website/index.html','utf8');
html = html.replace(/const global=\[[\s\S]*?\];/, `const global=${JSON.stringify(data.global)};`)
           .replace(/const personal=\[[\s\S]*?\];/, `const personal=${JSON.stringify(data.personal)};`);
fs.writeFileSync('website/index.html', html);

