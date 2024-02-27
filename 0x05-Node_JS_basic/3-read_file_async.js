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

      console.log(`Number of students: ${result.totalStudents}`);
      for (const key in result.bySubjects) {
        console.log(`Number of students in ${key}: ` +
     `${result.bySubjects[key].count}. List: ` +
     `${result.bySubjects[key].list.join(', ')}`);
      }

      resolve(result);
    });
  });
}

module.exports = countStudents;
