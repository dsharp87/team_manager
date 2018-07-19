var mongoose = require('mongoose');
var Player = mongoose.model('Player');

module.exports = {

    addplayer: function (req, res) {
        console.log(req.body, "controller addplayer");
        Player.create({name: req.body.name, position: req.body.position}, function(err, player) {
            console.log(err);
            console.log(player, 'created player');
            return res.json({player: player});
        })
    },

    getplayers: function (req, res) {
        console.log(req.body, "controller get players");
        Player.find( {}, function(err, players) {
            console.log(err);
            console.log(players, 'found players');
            return res.json({players: players});
        })
    },

    deleteplayer: function (req, res) {
        console.log(req.params.id, 'controller delete player');
        Player.remove({_id: req.params.id}, function(err){
            if(err){console.log(err)}
            return res.json('deleted player back end response');
        })
    },

    updatestatus: function (req, res) {
        console.log(req.params, 'controller update status');
        Player.findOne({_id: req.params.id}, function (err, player) {
            console.log(player, 'found player');
            if (req.params.gamenumber == 1) {
                player.game1status = req.params.button;
                player.save( function(err) {
                    if(err) {console.log(err)}
                    else {
                        console.log(player, 'player is updated');
                        return res.json(player);
                    }
                });
            };
            if (req.params.gamenumber == 2) {
                player.game2status = req.params.button;
                player.save( function(err) {
                    if(err) {console.log(err)}
                    else {
                        console.log(player, 'player is updated');
                        return res.json(player);
                    }
                });
            };
            if (req.params.gamenumber == 3) {
                player.game3status = req.params.button;
                player.save( function(err) {
                    if(err) {console.log(err)}
                    else {
                        console.log(player, 'player is updated');
                        return res.json(player);
                    }
                });
            };
        });
        
    }
}