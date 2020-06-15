const mongoose= require('mongoose');

// User Schema
const userSchema = new mongoose.Schema({
	fname: {type:String,required:true},
	lname:{type:String,required:true},
	email:{type:String,required:true},
	password:{type:String,min:8,max:32,required:true}
});

const user = mongoose.model('user', userSchema);

module.exports=user;