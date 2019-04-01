require('../src/db/mongoose')

const Task = require('../src/models/task')

// Task.findByIdAndDelete('5c9abe3c30bd748c48c4b66f').then((task) => {
// 	console.log(task)
// 	return Task.countDocuments({ completed: false })
// }).then((result) => {
// 	console.log(result)
// }).catch((e) => {
// 	console.log(e)
// })

const deleteTaskAndCount = async(id) => {
	const task = await Task.findByIdAndDelete(id)
	const count = await Task.countDocuments({ completed: false })
	return count
}

deleteTaskAndCount('5c9abe3c30bd748c48c4b66f').then((count) => {
	console.log(count)
}).catch((e) => {
	console.log(e)
})