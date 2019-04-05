const app = require('./app')

const port = process.env.PORT || 3000

app.listen(port, () => {
	console.log('Server is up on port ' + port)
})

// Without middleware: new req -> run route handler
// With middleware: new req -> do something -> run route handler

// app.use((req, res, next) => {
// 	if (req.method === 'GET') {

// 	} else {
// 		next() 
// 	}
// })



// const main = async () => {
// 	const task = await Task.findById('5ca27da416423de77bf4a231')
// 	await task.populate('owner').execPopulate() 
// 	console.log(task.owner)

// 	const user = await User.findById('5ca27da016423de77bf4a22f')
// 	await user.populate('tasks').execPopulate()
// 	console.log(user.tasks)
// }

// main()

// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
// 	const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', { expiresIn: '7 days'})
// 	//console.log(token) 

// 	const data = jwt.verify(token, 'thisismynewcourse')
// 	//console.log(data)
// }

// myFunction()

