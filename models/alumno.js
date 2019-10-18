const mongoose = require('mongoose');
const alumnoSchema = new mongoose.Schema({
	nombreAlumno:{
		type:String,
		require:true
	},
	apellidoAlumno:{
		type:String,
		require:true
	},
	codigoAlumno:{
		type:String,
		default: '100001'
	},
	sexoAlumno:{
		type:String,
		default: 'sexoAlumno'
	},
	cursoInscritoAlumno:{
		// collection de elementos
	},
	correoAlumno:{
		type:String,
		default: 'proyectox@gmail.com'
	},
	telefonoAlumno:{
		type:String,
		default: '00000000'
	},
    created: { 
        type: Date,
        default: Date.now
    }
});

const Alumno = mongoose.model('Alumno', alumnoSchema);
module.exports = Alumno;
