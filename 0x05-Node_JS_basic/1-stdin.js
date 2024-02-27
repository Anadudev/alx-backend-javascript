process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
	const name = process.stdin.read();
	if (name) {
		console.log(`Your name is: ${name}`);
	}
});

process.stdin.on('end', () => {
	process.stdout.write('This important software is now closing\n');
});
