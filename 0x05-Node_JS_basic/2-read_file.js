const fs = require('fs');

async function countStudents (path) {
  try {
    const data = fs
      .readFileSync(path, 'utf8')
      .trim()
      .split('\n')
      .filter(Boolean);

    data.shift();

    let total = 0;
    const bySubjects = {};

    data.forEach((line) => {
      const [firstname, lastname, age, field] = line.split(',');
      if (!firstname || !lastname || !age || !field) {
        throw new Error('Cannot load the database');
      }
      if (bySubjects[field] === undefined) {
        bySubjects[field] = { count: 1, list: [firstname] };
      } else {
        bySubjects[field].count++;
        bySubjects[field].list.push(firstname);
      }
      total++;
    });

    console.log(`Number of students: ${total}`);
    for (const key in bySubjects) {
      console.log(
        'Number of students in ' +
          `${key}: ${bySubjects[key].count}. ` +
          `List: ${bySubjects[key].list.join(', ')}`
      );
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
