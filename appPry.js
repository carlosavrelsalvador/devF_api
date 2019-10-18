const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

app.listen(PORT,()=>{
	console.log(`Proyecto Corriendo en el puerto ${PORT}`);

});

mongoose.connect(
	'mongodb+srv://carlosavrelsalvador:gI0OnVLNKKuNzhV9@cluster0-q53vc.mongodb.net/test?retryWrites=true&w=majority',
	{ useNewUrlParser: true, useUnifiedTopology: true },
	()=>{console.log('Conectado a la base de datos de Mongoose Atlas')});

// get a / (raiz)
app.get('/',(req,res)=>{
	res.status(200).send('Exito coneccion, mongooseAtlas PRY');
});

// --------------------------------------------------------
// 					GENERICOS
// --------------------------------------------------------
// contrucion de metodos genericos
const Plantilla = require('./models/plantilla.js');

// metodo GET a Schema / (raiz)
app.get('/plantilla',(req,res)=>{
	Plantilla.find()
	.then(plantilla=>res.send(plantilla))
	.catch(err=>res.send(err))
});

// metodo POST a Schema / (raiz)
app.post('/plantilla',(req,res)=>{
	const newPlantilla = new Plantilla(req.body);
	newPlantilla.save()
	.then(plantilla=>res.status(200).send(plantilla))
	.catch(err=>res.status(400).send(err))
});

// metodo PATCH a Schema / (raiz) patch
app.patch('/plantilla/:id',(req,res)=>{
	Plantilla.findByIdAndUpdate(req.params.id, req.body,{new:true})
	.then(updatepantilla=>res.status(200).send(updatepantilla))
	.catch(err=>res.status(400).send(err))
});

// metodo DELETE a Schema / (raiz) patch
app.delete('/plantilla/:id',(req,res)=>{
	Plantilla.findByIdAndDelete(req.params.id)
	.then(deleteplantilla=>res.status(200).send(deleteplantilla))
	.catch(err=>res.status(400).send(err))
});

// --------------------------------------------------------
// 					ALUMNO
// --------------------------------------------------------
// contruccion de metodos para Schema Alumno
const Alumno = require('./models/alumno.js');
// metodo GET a Schema / (raiz)
app.get('/alumno',(req,res)=>{
	Alumno.find()
	.then(alumno=>res.send(alumno))
	.catch(err=>res.send(err))
});
// metodo POST a Schema / (raiz)
app.post('/alumno',(req,res)=>{
	const newAlumno = new Alumno(req.body);
	newAlumno.save()
	.then(alumno=>res.status(200).send(alumno))
	.catch(err=>res.status(400).send(err))
});
// metodo PATCH a Schema / (raiz) patch
app.patch('/alumno/:id',(req,res)=>{
	Alumno.findByIdAndUpdate(req.params.id, req.body,{new:true})
	.then(updatealumno=>res.status(200).send(updatealumno))
	.catch(err=>res.status(400).send(err))
});
// metodo DELETE a Schema / (raiz) patch
app.delete('/alumno/:id',(req,res)=>{
	Alumno.findByIdAndDelete(req.params.id)
	.then(deletealumno=>res.status(200).send(deletealumno))
	.catch(err=>res.status(400).send(err))
});
// --------------------------------------------------------
// 					CURSO
// --------------------------------------------------------
// contruccion de metodos para Schema Curso
const Curso = require('./models/curso.js');
// metodo GET a Schema / (raiz)
app.get('/curso',(req,res)=>{
	Curso.find()
	.then(curso=>res.send(curso))
	.catch(err=>res.send(err))
});
// metodo POST a Schema / (raiz)
app.post('/curso',(req,res)=>{
	const newCurso = new Curso(req.body);
	newCurso.save()
	.then(curso=>res.status(200).send(curso))
	.catch(err=>res.status(400).send(err))
});
// metodo PATCH a Schema / (raiz) patch
app.patch('/curso/:id',(req,res)=>{
	Curso.findByIdAndUpdate(req.params.id, req.body,{new:true})
	.then(updatecurso=>res.status(200).send(updatecurso))
	.catch(err=>res.status(400).send(err))
});
// metodo DELETE a Schema / (raiz) patch
app.delete('/curso/:id',(req,res)=>{
	Curso.findByIdAndDelete(req.params.id)
	.then(deletecurso=>res.status(200).send(deletecurso))
	.catch(err=>res.status(400).send(err))
});
// --------------------------------------------------------
// 					INSTRUCTOR
// --------------------------------------------------------
// contruccion de metodos para Schema Instructor
const Instructor = require('./models/instructor.js');
// metodo GET a Schema / (raiz)
app.get('/instructor',(req,res)=>{
	Instructor.find()
	.then(instructor=>res.send(instructor))
	.catch(err=>res.send(err))
});
// metodo POST a Schema / (raiz)
app.post('/instructor',(req,res)=>{
	const newInstructor = new Instructor(req.body);
	newInstructor.save()
	.then(instructor=>res.status(200).send(instructor))
	.catch(err=>res.status(400).send(err))
});
// metodo PATCH a Schema / (raiz) patch
app.patch('/instructor/:id',(req,res)=>{
	Instructor.findByIdAndUpdate(req.params.id, req.body,{new:true})
	.then(updateinstructor=>res.status(200).send(updateinstructor))
	.catch(err=>res.status(400).send(err))
});
// metodo DELETE a Schema / (raiz) patch
app.delete('/instructor/:id',(req,res)=>{
	Instructor.findByIdAndDelete(req.params.id)
	.then(deleteinstructor=>res.status(200).send(deleteinstructor))
	.catch(err=>res.status(400).send(err))
});
// --------------------------------------------------------
// 					EVENTO INSTRUCCION
// --------------------------------------------------------
// contruccion de metodos para Schema EventoInstruccion
const Evento = require('./models/evento.js');
// metodo GET a Schema / (raiz)
app.get('/evento',(req,res)=>{
	Evento.find()
	.then(evento=>res.send(evento))
	.catch(err=>res.send(err))
});
// metodo POST a Schema / (raiz)
app.post('/evento',(req,res)=>{
	const newEvento = new Evento(req.body);
	newEvento.save()
	.then(evento=>res.status(200).send(evento))
	.catch(err=>res.status(400).send(err))
});
// metodo PATCH a Schema / (raiz) patch
app.patch('/evento/:id',(req,res)=>{
	Evento.findByIdAndUpdate(req.params.id, req.body,{new:true})
	.then(updateevento=>res.status(200).send(updateevento))
	.catch(err=>res.status(400).send(err))
});
// metodo DELETE a Schema / (raiz) patch
app.delete('/evento/:id',(req,res)=>{
	Evento.findByIdAndDelete(req.params.id)
	.then(deleteevento=>res.status(200).send(deleteevento))
	.catch(err=>res.status(400).send(err))
});
// --------------------------------------------------------
// 					CATEGORIA
// --------------------------------------------------------
// contruccion de metodos para Schema Categoria
const Categoria = require('./models/categoria.js');
// metodo GET a Schema / (raiz)
app.get('/categoria',(req,res)=>{
	Categoria.find()
	.then(categoria=>res.send(categoria))
	.catch(err=>res.send(err))
});
// metodo POST a Schema / (raiz)
app.post('/categoria',(req,res)=>{
	const newCategoria = new Categoria(req.body);
	newCategoria.save()
	.then(categoria=>res.status(200).send(categoria))
	.catch(err=>res.status(400).send(err))
});
// metodo PATCH a Schema / (raiz) patch
app.patch('/categoria/:id',(req,res)=>{
	Categoria.findByIdAndUpdate(req.params.id, req.body,{new:true})
	.then(updatecategoria=>res.status(200).send(updatecategoria))
	.catch(err=>res.status(400).send(err))
});
// metodo DELETE a Schema / (raiz) patch
app.delete('/categoria/:id',(req,res)=>{
	Categoria.findByIdAndDelete(req.params.id)
	.then(deletecategoria=>res.status(200).send(deletecategoria))
	.catch(err=>res.status(400).send(err))
});
// --------------------------------------------------------

