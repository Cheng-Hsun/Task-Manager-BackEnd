require('../src/db/mongoose')

const User = require('../src/models/user')

//ObjectId("5c9abdabe4f5528c3dcd8 494")

// User.findByIdAndUpdate('5c9abdabe4f5528c3dcd8494', { age: 1}).then((user) => {
// 	console.log(user)
// 	return User.countDocuments({ age: 1 })
// }).then((result) => {
// 	console.log(result)
// }).catch((e) => {
// 	console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
	const user = await User.findByIdAndUpdate(id, { age })
	const count = await User.countDocuments({ age })
	return count
}

updateAgeAndCount('5c9abdabe4f5528c3dcd8494', 2).then((count) => {
	console.log(count)
}).catch((e) => {
	console.log(e)
})