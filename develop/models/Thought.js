const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

// Schema to create User model
const thoughtSchema = new Schema(
	{
		thoughtText: {
			type: String,
			required: true,
			min_length: 1,
			max_length: 280,
		},
		createdAt: {
			type: Date,
			default: () => new Date(+new Date() + 84 * 24 * 60 * 60 * 1000),
		},
		username: {
			type: String,
			required: true,
		},
		reactions: [Reaction],
	},
	{
		toJSON: {
			virtuals: true,
		},
		id: false,
	}
);

thoughtSchema.virtual('reactionCount').get(function () {
	return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
