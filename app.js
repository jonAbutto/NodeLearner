const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();

app.post('/sms', function(req, res){

    const twml = new MessagingResponse();
    twml.message('viola');
    res.writeHead(200, {'Content-Type':'text/xml'});
    res.end(twml.toString());
});

http.createServer(app).listen(1337,
    () => console.log('express is listening'));