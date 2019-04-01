// CRUD create read updata delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017 '
const databaseName = 'task-manager'
 
// const id = new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
	if (error) {
		return console.log('Unable to connect to database!')
		// use return to stop the funtion
	}

	const db = client.db(databaseName)

	db.collection('users').deleteMany({
		age:27
	}).then((result) => {
		console.log(result)
	}).catch((error) => {
		console.log(error)
	})
	// const updatePromise = db.collection('users').updateOne({
	// 	_id: new ObjectID("5c9939edeb3bbd742e2cd0c2")
	// }, {
	// 	$inc: {
	// 		age: 1
	// 	}
	// })

	// updatePromise.then((result) => {
	// 	console.log(result)
	// }).catch((error) => {
	// 	console.log(error)
	// })

	// db.collection('tasks').updateMany({
	// 	completed: false
	// }, {
	// 	$set: {
	// 		completed: true
	// 	}
	// }).then((result) => {
	// 	console.log(result.modifiedCount)
	// }).catch((error) => {
	// 	console.log(error)
	// })

	// db.collection('users').findOne({ _id: new ObjectID("5c993d76d68119746fc1b759")}, (error, user) => {
	// 	if (error) {
	// 		return console.log('Unable to fetch')
	// 	}
	// 	console.log(user)
	// })

	// db.collection('users').find({ age: 27 }).toArray((error, users) => {
	// 	console.log(users)
	// })

	// db.collection('users').insertOne({
	// 	_id: id,
	// 	name: 'Vikram',
	// 	age: 26
	// }, (error, result)=> {
	// 	if (error) {
	// 		return console.log('Unable to insert user')
	// 	}

	// 	console.log(result.ops)
	// })

	// db.collection('users').insertMany([
	// 	{
	// 		name: 'Jen',
	// 		age: 28
	// 	}, {
	// 		name: 'Gunther',
	// 		age: 27
	// 	}
	// ], (error, result) => {
	// 	if (error) {
	// 		return console.log('Unable to insert documents!')
	// 	}

	// 	console.log(result.ops)
	// })

	// db.collection('tasks').insertMany([
	// 	{
	// 		description: 'Clean the house',
	// 		completed: true
	// 	}, {
	// 		description: 'Renew',
	// 		completed: false
	// 	}, {
	// 		description: 'Pot',
	// 		completed: false
	// 	}
	// ], (error, result) => {
	// 	if (error) {
	// 		return console.log('Unable to insert documents!')
	// 	}

	// 	console.log(result.ops)
	// })
})
