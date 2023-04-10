const connection = require('../config/connection');
const { User } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
	console.log('connected');

	// Drop existing users
	await User.deleteMany({});

	// Add user to the collection and await the results
	await User.collection.insertOne({
		username: 'Jon Snow',
		email: 'test1@test1.com',
	});

	console.info('Seeding complete! 🌱');
	process.exit(0);
});
