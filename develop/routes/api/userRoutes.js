const router = require('express').Router();
const { getUsers, createUser, getSingleUser, updateUser, deleteUser } = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers);

// /api/users/createUser
router.route('/createUser').post(createUser);

// /api/users/updateUser
// router.route('/updateUser').post(updateUser);

// /api/users/:userId
router
	.route('/:userId')
	.get(getSingleUser)
	.put(updateUser)
	.delete(deleteUser);

module.exports = router;
