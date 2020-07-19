const mongoose= require('mongoose');

// User Schema
const userSchema = new mongoose.Schema({
	fname: {type:String,required:true},
	lname:{type:String,required:true},
	email:{type:String,required:true},
	password:{type:String,min:8,max:32,required:true},
	blood_type:{type:String,required:true},
	last_donnated:{type:String,required:true},
	faddress:{type:String,required:true},
	saddress:{type:String},
	city:{type:String,required:true},
	country:{type:String,required:true},
	contact:{type:String,required:true},
});
const user = mongoose.model('user', userSchema);	

module.exports=user;
