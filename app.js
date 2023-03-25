//Importar o express

var express = required('express');

//App

var app = express();

//Rotas

app.get('/', function(req, res){
    res.sendFile(__dirname + '/pagina.html');
});

//Servidor

app.listen(8080);