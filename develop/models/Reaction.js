const { Schema, Types } = require('mongoose');

// Schema to create Post model
const reactionSchema = new Schema(
	{
		reactionId: {
			type: Schema.Types.ObjectId,
			default: () => new Types.ObjectId(),
		},
		reactionBody: {
			type: String,
			required: true,
			max_length: 280,
		},
		username: {
			type: String,
			required: true,
		},
		createdAt: {
			type: Date,
			default: () => new Date(+new Date() + 84 * 24 * 60 * 60 * 1000),
		},
	},
	{
		toJSON: {
			getters: true,
		},
		id: false,
	}
);

module.exports = reactionSchema;
