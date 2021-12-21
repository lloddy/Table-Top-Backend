const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema ({
    name: String,
    avatar: {
        type: String,
        default: "https://www.kenyons.com/wp-content/uploads/2017/04/default-image-620x600.jpg"
    }
})

module.exports = mongoose.model('Players', playerSchema)