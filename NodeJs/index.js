//importamos la biblioteca express
const express = require('express');
//importamos la biblioteca morgan
const morgan = require('morgan');
//declaracion de la instancia express 
var app = express();
// le decimos a express que use morgan
app.use(morgan("dev"));
//declaramos el puerto, tiene que ser mayor a 1000				
const puerto = 3000;
// metodo get con  la ruta '/'que se ejecuta al abrir la pagina.				
app.get('/',function(req,res){
	//res.send("hola muchachos, ¿como estan?")
	res.sendfile('./index.html');
})
app.get('/primero',function(req,res){
	res.send("hola muchachos, ¿como estan?")
})
//se corre por el puerto 6000, y hacemos un callback
app.listen(puerto, function(){
	console.log("hola mundo!!!");
});									