const express = require('express');
const app = express();
const logger = require('morgan');
const http = require('http');
const path = require('path');
const PORT = process.env.PORT || 3001;
const bodyParser = require('body-parser');

let events = [];

app.use(bodyParser.json());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
    extended: true
}));

/**************  /events  **************/

app.get('/events', function(req, res) {
    res.send(events);
});

app.post('/events', function(req, res) {
    events.push(req.body);
    res.status(201).send("Evento de agua agregado!");
});

app.delete('/events', function (req, res) {
    events = [];
    res.status(200).send("Eventos de agua eliminados!");
});

app.use('/', express.static(path.join(__dirname + '/public')));

const server = http.createServer(app);

server.listen(PORT, function() {
    console.log('Servidor funcionando en localhost:' + PORT);
});