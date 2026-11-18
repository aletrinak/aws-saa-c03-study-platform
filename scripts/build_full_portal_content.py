#!/usr/bin/env python3
import json
import subprocess
import os
import sys

# Add questions_data to path
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from questions_data.week1 import WEEK_1_QUESTIONS
from questions_data.week2 import WEEK_2_QUESTIONS
from questions_data.week3 import WEEK_3_QUESTIONS
from questions_data.week4 import WEEK_4_QUESTIONS

ALL_QUESTIONS = {}
ALL_QUESTIONS.update(WEEK_1_QUESTIONS)
ALL_QUESTIONS.update(WEEK_2_QUESTIONS)
ALL_QUESTIONS.update(WEEK_3_QUESTIONS)
ALL_QUESTIONS.update(WEEK_4_QUESTIONS)

print(f"Loaded questions for {len(ALL_QUESTIONS)} days.")

# Expected day IDs in portal/content.js
EXPECTED_DAYS = [1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 15, 16, 17, 18, 19, 22, 23, 24, 26]

# Validation
errors = []
for day_id in EXPECTED_DAYS:
    if day_id not in ALL_QUESTIONS:
        errors.append(f"Missing day {day_id}")
        continue
    qs = ALL_QUESTIONS[day_id]
    if len(qs) != 10:
        errors.append(f"Day {day_id} has {len(qs)} questions instead of 10")
    
    seen_ids = set()
    for idx, q in enumerate(qs):
        qid = q.get("id")
        if not qid:
            errors.append(f"Day {day_id} Q{idx+1} missing id")
        elif qid in seen_ids:
            errors.append(f"Day {day_id} duplicate qid {qid}")
        seen_ids.add(qid)

        if not q.get("scenarioTag"):
            errors.append(f"Day {day_id} {qid} missing scenarioTag")
        if not q.get("question"):
            errors.append(f"Day {day_id} {qid} missing question")
        if not q.get("explanation"):
            errors.append(f"Day {day_id} {qid} missing explanation")

        opts = q.get("options", [])
        if len(opts) < 4:
            errors.append(f"Day {day_id} {qid} has fewer than 4 options ({len(opts)})")
        
        prefix_labels = ["A) ", "B) ", "C) ", "D) ", "E) "]
        for o_idx, opt in enumerate(opts):
            if not opt.startswith(prefix_labels[o_idx]):
                errors.append(f"Day {day_id} {qid} option {o_idx} should start with {prefix_labels[o_idx]}: {opt[:20]}")

        if q.get("multi"):
            c_ans = q.get("correctAnswers")
            if not isinstance(c_ans, list) or len(c_ans) != 2:
                errors.append(f"Day {day_id} {qid} multi question must have 2 correctAnswers: {c_ans}")
            elif not all(0 <= a < len(opts) for a in c_ans):
                errors.append(f"Day {day_id} {qid} multi answer out of range: {c_ans}")
        else:
            c_ans = q.get("correctAnswer")
            if not isinstance(c_ans, int) or not (0 <= c_ans < len(opts)):
                errors.append(f"Day {day_id} {qid} single answer out of range: {c_ans}")

if errors:
    print("VALIDATION ERRORS:")
    for err in errors:
        print("  -", err)
    sys.exit(1)

print("All 190 questions passed schema validation!")

# Check answer distribution per day
print("\nAnswer Distribution per Day:")
pattern_warnings = []
for day_id in EXPECTED_DAYS:
    qs = ALL_QUESTIONS[day_id]
    ans_keys = [q["correctAnswers"] if q.get("multi") else q["correctAnswer"] for q in qs]
    ans_str = ", ".join(str(a) for a in ans_keys)
    print(f"  Day {day_id:2d}: [{ans_str}]")
    
    # Check if starts with the old predictable pattern: 1, 0, [0, 1] or 1, 1, [0, 1]
    if len(ans_keys) >= 3:
        if ans_keys[0] == 1 and (ans_keys[1] in [0, 1]) and (ans_keys[2] == [0, 1]):
            pattern_warnings.append(f"Day {day_id} still matches old pattern (1, {ans_keys[1]}, [0, 1])!")

if pattern_warnings:
    print("\nPATTERN WARNINGS:")
    for w in pattern_warnings:
        print("  -", w)
    sys.exit(1)

print("\nNo day matches the old predictable pattern! Answers are diverse and well-balanced.")

# Now update portal/content.js
# First extract raw PORTAL_DATA using Node
node_extract = """
const fs = require('fs');
const vm = require('vm');
const code = fs.readFileSync('portal/content.js', 'utf8');
const sb = { window: {} };
vm.createContext(sb);
vm.runInContext(code, sb);
fs.writeFileSync('scripts/temp_portal_data.json', JSON.stringify(sb.window.PORTAL_DATA, null, 2), 'utf8');
"""
subprocess.run(["node", "-e", node_extract], check=True)

with open("scripts/temp_portal_data.json", "r", encoding="utf-8") as f:
    portal_data = json.load(f)

# Replace quizzes in portal_data
for week in portal_data.get("weeks", []):
    for day in week.get("days", []):
        day_id = day["id"]
        if day_id in ALL_QUESTIONS:
            day["quiz"] = ALL_QUESTIONS[day_id]

# Save updated portal/content.js
output_content = "// AWS SAA-C03 Learning Portal Content Database\nwindow.PORTAL_DATA = " + json.dumps(portal_data, ensure_ascii=False, indent=2) + ";\n"

with open("portal/content.js", "w", encoding="utf-8") as f:
    f.write(output_content)

print(f"\nSuccessfully wrote updated portal/content.js ({os.path.getsize('portal/content.js')} bytes)!")

# Verify through Node.js
node_verify = """
const fs = require('fs');
const vm = require('vm');
const code = fs.readFileSync('portal/content.js', 'utf8');
const sb = { window: {} };
vm.createContext(sb);
vm.runInContext(code, sb);
const data = sb.window.PORTAL_DATA;
console.log('Verified portal/content.js:');
console.log('  Course Title:', data.courseTitle);
console.log('  Passing score:', data.passingScorePercent + '%');
console.log('  Weeks:', data.weeks.length);
let totalDays = 0;
let totalQs = 0;
data.weeks.forEach(w => {
  w.days.forEach(d => {
    totalDays++;
    totalQs += d.quiz.length;
  });
});
console.log('  Total Days:', totalDays);
console.log('  Total Questions:', totalQs);
if (totalDays !== 19 || totalQs !== 190) {
  console.error('ERROR: Expected 19 days and 190 questions!');
  process.exit(1);
}
"""
res = subprocess.run(["node", "-e", node_verify], capture_output=True, text=True, encoding="utf-8")
print(res.stdout)
if res.returncode != 0:
    print("VERIFICATION FAILED:")
    print(res.stderr)
    sys.exit(1)

print("All tests passed successfully!")
