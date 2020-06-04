const mongoose required('mongoose');

// User Schema
const userSchema = new mongoose.Schema({
	fname: {type:String,required:true},
	lname:{type:String,required:true},
	email:{type:String,required:true},
	password:{type:String,required:true},
});

const user = mongoose.model('userdata', userSchema);

module.exports=userSchema;