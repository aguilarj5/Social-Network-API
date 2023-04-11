const { User, Thought, Reaction } = require('../models/index');

module.exports = {
	// Get all users
	getThoughts(req, res) {
		Thought.find({})
			.then((thoughts) => res.json(thoughts))
			.catch((err) => res.status(500).json(err));
	},
	// // Get a single user
	getSingleThought(req, res) {
		Thought.findOne({ _id: req.params.thoughtId })
			.then((thought) =>
				!thought
					? res.status(404).json({ message: 'No thought with that ID' })
					: res.json(thought)
			)
			.catch((err) => res.status(500).json(err));
	},
	// Create a user
	createThought(req, res) {
		Thought.create(req.body)
			.then((newThought) => res.json(newThought))
			.catch((err) => {
				console.log(err);
				return res.status(500).json(err);
			});
	},
	// // Delete a user
	deleteThought(req, res) {
		Thought.findOneAndDelete({ _id: req.params.thoughtId })
			.then(() => res.json({ message: 'thought deleted!' }))
			.catch((err) => res.status(500).json(err));
	},
	// // Update a user
	updateThought(req, res) {
		Thought.findOneAndUpdate(
			{ _id: req.params.thoughtId },
			{ $set: req.body },
			{ runValidators: true, new: true }
		)
			.then((thought) =>
				!thought
					? res.status(404).json({ message: 'No thought with this id!' })
					: res.json(thought)
			)
			.catch((err) => res.status(500).json(err));
	},
};
