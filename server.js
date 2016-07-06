var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8080, function(){
    console.log('Server running on 8080...');
});

// cd navega hasta la carpeta 
// npm install connect serve-static
// pon este archivo en la raíz de la carpeta
// ejecuta en consola node server.js
