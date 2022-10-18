var express = require('express');
var app = express();

var port = process.env['PORT'] || 80

app.get('/', function(req, res) {
    console.log("¡Hola Mundo!");
    res.json({ mensaje: '¡Hola Mundo!' });
});

app.get('/cervezas', function(req, res) {
    res.json({ mensaje: '¡A beber cerveza!' })  
});

app.post('/', function(req, res) {
    res.json({ mensaje: 'Método post' })   
});

app.delete('/', function(req, res) {
    res.json({ mensaje: 'Método delete' })  
});

// iniciamos nuestro servidor
app.listen(port);
console.log('API escuchando en el puerto ' + port);
