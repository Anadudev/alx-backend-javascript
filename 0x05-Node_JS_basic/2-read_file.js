const fs = require('fs');
const readline = require('readline');

async function countStudents(path) {
	const fileStream = fs.createReadStream(path);
	const rl = readline.createInterface({
		input: fileStream,
		crlfDelay: Infinity
	});

	let total = 0
	let bySubjects = {}

	for await (const line of rl) {
		if (line === "firstname,lastname,age,field"){
			console.log('hahaha')
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
