const a = require('child_process').execSync;

a('git add . ');
a('git commit -m "add" ');
a('git push ');

