var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
// Used for production build
app.use(express.static(path.join(__dirname, 'public')));


app.all('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, function(){
    console.log('Server listening on port: ' + PORT);
});

