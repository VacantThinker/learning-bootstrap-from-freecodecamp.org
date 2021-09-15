const a = require('child_process').execSync;

a('git add . ');
a('git commit -m "a" ');
a('git push ');

