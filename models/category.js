const mongoose = require('mongoose')
const db = require('./db')

const categorySchema = new mongoose.Schema({
	cat_name:{
		type:String,
		required:true,
		index:{
			unique:true
		}
	},
	date:{
		type:Date,
		default:Date.now()
	}
})

const categoryModel = mongoose.model('categories',categorySchema)
module.exports = categoryModel

