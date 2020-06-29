const mongoose = require('mongoose')
try{
	mongoose.connect("mongodb://localhost:27017/PMS",{
		useNewUrlParser:true,
		useUnifiedTopology: true,
		useCreateIndex:true
	})
	console.log("Mongodb Database Connected")
}catch(err){
	console.log("Database Not Connected")
}
