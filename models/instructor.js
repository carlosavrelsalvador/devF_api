const mongoose = require('mongoose');
const instructorSchema = new mongoose.Schema({
	codigoInstructor:{
		type:String,
		default: '200001'
	},
	nombreInstructor:{
		type:String,
		require:true
	},
	apellidoInstructor:{
		type:String,
		require:true
	},
	sexoInstructor:{
		type:String,
		default: 'sexoAlumno'
	},
	cursoInscritoInstructor:{
		type:Number,
		require:true
	},
	habilitacionesInstructor:{
		type:String,
		require:true
	}
});

const Instructor = mongoose.model('Instructor', instructorSchema);
module.exports = Instructor;
