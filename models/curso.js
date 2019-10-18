const mongoose = require('mongoose');
const cursoSchema = new mongoose.Schema({
	nombreCurso:{
		type: String,
		require: true
	},
	duracionCurso:{
		type:Number, 
		min: 1,
		require: true
	},
	instructorCurso:{
		type:String,
		require: true
	},
	cantLeccionesCurso:{
		type:Number, 
		min: 1,
		require: true
	},
	calificacionCurso:{
		type:Number, 
		min: 0,
		require: true
	},
	nivelCurso:{
		type:String,
		require: true
	},
	descripcionCurso:{
		type:String,
		require: true
	},
	codigoCurso:{
		type:String,
		default: '0000ND'
	},
	categoriaCurso:{
		type:String,
		require: true
	},
	cantidadParticipantesCurso:{
		type:Number, 
		min: 0,
		require: true
	}
});

const Curso = mongoose.model('Curso', cursoSchema);
module.exports = Curso;
