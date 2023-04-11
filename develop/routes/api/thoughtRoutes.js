const router = require('express').Router();
const {
	getThoughts,
	getSingleThought,
	updateThought,
	deleteThought,
	createThought,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts);

// /api/thoughts/createThought
router.route('/createThought').post(createThought);

// /api/thoughts/:thoughtId
router
	.route('/:thoughtId')
	.get(getSingleThought)
	.put(updateThought)
	.delete(deleteThought);

module.exports = router;
