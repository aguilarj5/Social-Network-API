const router = require('express').Router();
const {
	addReaction, removeReaction
} = require('../../controllers/reactionController');

// /api/reactions/:thoughtId
router
	.route('/:thoughtId')
	.post(addReaction)
	.delete(removeReaction);

module.exports = router;
