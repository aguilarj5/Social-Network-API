const router = require('express').Router();
const { getUsers } = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers);

// /api/users/:userId
// router
// 	.route('/:userId')
// 	// .get(getSingleCourse)
// 	// .put(updateCourse)
// 	// .delete(deleteCourse);

module.exports = router;
