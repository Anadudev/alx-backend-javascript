const fs = require('fs');

async function countStudents(path) {
	if (!fs.existsSync(path) || !fs.statSync(path).isFile()){
		throw new Error('Cannot load the database')
	}

	const fileStream = fs.readFileSync(path, { encoding: 'utf8', flag: 'r' });
	const rl = fileStream.split('\n')

	let total = 0
	let bySubjects = {}

	for await (const line of rl) {
		if (line === "firstname,lastname,age,field" || line == ''){
			continue;
		}
		data = line.split(/[\s,]+/);
		if (bySubjects[data[3]] === undefined){
			bySubjects[data[3]] = [1, data[0]];
		}else
		{
			bySubjects[data[3]][0]++;
			bySubjects[data[3]][1] += ', ' + data[0];
		}
		total ++;
	}
	console.log(`Number of students: ${total}`);
	for (const key in bySubjects) {
		console.log(`Number of students in ${key}: ` + 
			`${bySubjects[key][0]}. List: ${bySubjects[key][1]}`);
	}
}

module.exports = countStudents;
