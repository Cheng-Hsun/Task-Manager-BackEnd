const mongoose = require('mongoose')

const Task = mongoose.model('Task', {
	description: {
		type: String,
		trim: true,
		required: true
	},
	completed: {
		type: Boolean,
		default: false
	},
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		// reference to another model
		ref: 'User'
	}
})

module.exports = Task