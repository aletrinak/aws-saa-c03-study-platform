import json, subprocess

node_code = """
const fs = require('fs');
const vm = require('vm');
const code = fs.readFileSync('portal/content.js', 'utf8');
const sb = { window: {} };
vm.createContext(sb);
vm.runInContext(code, sb);
const data = sb.window.PORTAL_DATA;
const out = [];
data.weeks.forEach(w => {
  w.days.forEach(d => {
    out.push({
      dayId: d.id,
      title: d.title,
      quiz: d.quiz
    });
  });
});
fs.writeFileSync('scripts/existing_quizzes.json', JSON.stringify(out, null, 2), 'utf8');
console.log('Exported ' + out.length + ' days to scripts/existing_quizzes.json');
"""

subprocess.run(["node", "-e", node_code], check=True)
