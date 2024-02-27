const express = require('express');
const app = express();
const port = 1245;
const fs = require('fs');

function countStudents (path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n').filter(Boolean);

      lines.shift();

      let total = 0;
      const bySubjects = {};

      lines.forEach(line => {
        const [firstname, lastname, age, field] = line.split(',');
        if (!firstname || !lastname || !age || !field) {
          reject(new Error('Cannot load the database'));
          return;
        }
        if (bySubjects[field] === undefined) {
          bySubjects[field] = { count: 1, list: [firstname] };
        } else {
          bySubjects[field].count++;
          bySubjects[field].list.push(firstname);
        }
        total++;
      });

      const result = {
        totalStudents: total,
        bySubjects
      };

      resolve(result);
    });
  });
}

app.get('/', (req, res) => {
  res.end('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2].toString()).then((output) => {
    let responseString = 'This is the list of our students\n';
    responseString += `Number of students: ${output.totalStudents}\n`;
    for (const key in output.bySubjects) {
      responseString += `Number of students in ${key}: ${output.bySubjects[key].count}. List: ${output.bySubjects[key].list.join(', ')}\n`;
    }
    res.end(responseString);
  }).catch(() => {
    res.statusCode = 404;
    res.end('Cannot load the database');
  });
});

app.listen(port, host, () => {});

module.exports = app;
