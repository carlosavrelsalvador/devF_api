const mongoose = require('mongoose');
const eventoSchema = new mongoose.Schema({
	fechaInicioEvento: { 
		type: Date, 
		default: Date.now 
	},
	fechaFinEvento: { 
		type: Date, 
		default: '2020-12-31' 
	}
});

const Evento = mongoose.model('Evento', eventoSchema);
module.exports = Evento;
