var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlayerSchema = new Schema ({
    name: String,
    position: String,
    game1status: {type: String, default: 'Undecided'},
    game2status: {type: String, default: 'Undecided'},
    game3status: {type: String, default: 'Undecided'}
})

mongoose.model('Player', PlayerSchema);
