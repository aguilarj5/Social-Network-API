const { User } = require('../models/User');

module.exports = {
	// Get all users
	getUsers(req, res) {
		User.find()
			.then((users) => res.json(users))
			.catch((err) => res.status(500).json(err));
	},
	// Get a single user
	getSingleUser(req, res) {
		// Course.findOne({ _id: req.params.courseId })
		// 	.select('-__v')
		// 	.then((course) =>
		// 		!course
		// 			? res.status(404).json({ message: 'No course with that ID' })
		// 			: res.json(course)
		// 	)
		// 	.catch((err) => res.status(500).json(err));
	},
	// Create a user
	createUser(req, res) {
		// Course.create(req.body)
		// 	.then((course) => res.json(course))
		// 	.catch((err) => {
		// 		console.log(err);
		// 		return res.status(500).json(err);
		// 	});
	},
	// Delete a user
	deleteUser(req, res) {
		// Course.findOneAndDelete({ _id: req.params.courseId })
		// 	// .then((course) =>
		// 	!course
		// 		? res.status(404).json({ message: 'No course with that ID' })
		// 		: Student.deleteMany({ _id: { $in: course.students } })
		// )
		// .then(() => res.json({ message: 'Course and students deleted!' }))
		// .catch((err) => res.status(500).json(err));
	},
	// Update a user
	updateUser(req, res) {
		// Course.findOneAndUpdate(
		// 	{ _id: req.params.courseId },
		// 	{ $set: req.body },
		// 	{ runValidators: true, new: true }
		// )
		// 	.then((course) =>
		// 		!course
		// 			? res.status(404).json({ message: 'No course with this id!' })
		// 			: res.json(course)
		// 	)
		// 	.catch((err) => res.status(500).json(err));
	},
};