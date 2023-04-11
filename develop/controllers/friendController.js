const { User, Thought, Reaction } = require('../models/index');

module.exports = {
	addFriend(req, res) {
		User.findOneAndUpdate(
			{ _id: req.params.userId },
			{ $addToSet: { friends: req.body } },
			{ runValidators: true, new: true }
		)
			.then((user) =>
				!user
					? res.status(404).json({ message: 'No user with this id!' })
					: res.json(user)
			)
			.catch((err) => res.status(500).json(err));
	},

	removeFriend(req, res) {
		User.findOneAndUpdate(
			{ _id: req.params.userId },
			{ $pull: { friends: { _id: req.body._id } } },
			{ runValidators: true, new: true }
		)
			.then((user) =>
				!user
					? res.status(404).json({ message: 'No user with this id!' })
					: res.json(user)
			)
			.catch((err) => res.status(500).json(err));
	},
};
