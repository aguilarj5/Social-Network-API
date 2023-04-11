const { User, Thought, Reaction } = require('../models/index');

module.exports = {
	// Get all users
	getUsers(req, res) {
		User.find({})
			.then((users) => res.json(users))
			.catch((err) => res.status(500).json(err));
	},
	// // Get a single user
	getSingleUser(req, res) {
		User.findOne({ _id: req.params.userId })
			.then((user) =>
				!user
					? res.status(404).json({ message: 'No user with that ID' })
					: res.json(user)
			)
			.catch((err) => res.status(500).json(err));
	},
	// Create a user
	createUser(req, res) {
		User.create(req.body)
			.then((newUser) => res.json(newUser))
			.catch((err) => {
				console.log(err);
				return res.status(500).json(err);
			});
	},
	// // Delete a user
	deleteUser(req, res) {
		User.findOneAndDelete({ _id: req.params.userId })
			.then((user) =>
				!user
					? res.status(404).json({ message: 'No user with that ID' })
					: User.deleteMany({ _id: { $in: user.thoughts } })
			)
			.then(() => res.json({ message: 'User and thoughts deleted!' }))
			.catch((err) => res.status(500).json(err));
	},
	// // Update a user
	updateUser(req, res) {
		User.findOneAndUpdate(
			{ _id: req.params.userId },
			{ $set: req.body },
			{ runValidators: true, new: true }
		)
			.then((user) =>
				!user
					? res.status(404).json({ message: 'No User with this id!' })
					: res.json(user)
			)
			.catch((err) => res.status(500).json(err));
	},
};
