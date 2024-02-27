const http = require('http');
const host = '127.0.0.1';
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

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2].toString()).then((output) => {
      let responseString = `Number of students: ${output.totalStudents}\n`;
      for (const key in output.bySubjects) {
        responseString += `Number of students in ${key}: ${output.bySubjects[key].count}. List: ${output.bySubjects[key].list.join(', ')}\n`;
      }
      res.end(responseString);
    }).catch(() => {
      res.statusCode = 404;
      res.end('Cannot load the database');
    });
  } else {
    res.statusCode = 404;
    res.end('Page not found');
  }
});

app.listen(port, host, () => {});

module.exports = app;
