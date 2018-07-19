var players = require('./../controllers/playercontroller');
var path = require('path');  // need path for catch all route to work

module.exports = function(app) {
    
    app.post('/addplayer', function(req,res) {
        console.log(req.body, 'routes addplayer')
        players.addplayer(req, res);
    })
    
    app.get('/getplayers', function(req, res) {
        console.log(req.body, 'routes getplayers');
        players.getplayers(req, res);
    })

    app.post('/deleteplayer/:id', function(req, res) {
        console.log(req.params, 'routes deleteplayer') 
        players.deleteplayer(req, res);
    })

    app.post('/updatestatus/:gamenumber/:button/:id', function(req, res) {
        console.log(req.params, 'routes update status');
        players.updatestatus(req, res);
    })
    
    app.all("**", (req, res) => {     //this route is so that if you type something in the URL bar it will go to an angular route after trying all express routes
        res.sendFile(path.resolve("./client/dist/index.html")) 
    }); 
    

}