
const mongoose= require('mongoose');

const user_info = new mongoose.Schema({
	
});

const userInfo = mongoose.model('userInfo', user_info);

module.exports=userInfo;