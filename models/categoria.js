const mongoose = require('mongoose');
const categoriaCursoSchema = new mongoose.Schema({
	nombreCategoria:{
		type: String,
		default: 'nombreCategoria'
	},
	cantidadCursos:{
		type:Number
	}
});

const Categoria = mongoose.model('Categoria', categoriaCursoSchema);
module.exports = Categoria;
