var express = require('express');
var app = express();
var path  = require('path');
var bp = require('body-parser');
var session = require('express-session');
var port = 8000;

app.use(express.static(path.join(__dirname, '/client/dist')));
app.use(session({secret: 'secret string', saveUninitialized:true}));
app.use(bp.json());

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.listen(port, function() {
    console.log('listening');
})

// cd desktop\dojoassignments\mean\full_mean\team_manager
// cd c:/"Program Files"/MongoDB/Server/3.6/bin/ mongod.exe