const mongoose = require('mongoose');
const plantillaSchema = new mongoose.Schema({
	campo1:{
		type:String,
		require:true
	},
	campo2:{
		type:String
	},
	campo3:{
		type:Number,
		default:100
	}
});

const Plantilla = mongoose.model('Plantilla', plantillaSchema);
module.exports = Plantilla;
