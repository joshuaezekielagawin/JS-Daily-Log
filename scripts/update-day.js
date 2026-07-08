const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, '..', 'daily-log.js');

// Read current content
let content = fs.readFileSync(logFile, 'utf8');

// Extract current day number
const match = content.match(/Day (\d+)/);
const currentDay = match ? parseInt(match[1], 10) : 0;
const nextDay = currentDay + 1;

// Replace the line
content = content.replace(/console\.log\("Day \d+"\);/, `console.log("Day ${nextDay}");`);

// Write back
fs.writeFileSync(logFile, content, 'utf8');

console.log(`Updated daily-log.js to Day ${nextDay}`);
