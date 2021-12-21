const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const campaignSchema = new Schema ({
    name: String,
    characters: String,
    restrictions: String,
    avatar: {
        type: String,
        default: "https://www.kenyons.com/wp-content/uploads/2017/04/default-image-620x600.jpg",
    },
    story: String,
    system: String,
    notes: String,
    players: String,
    creator: String
});

module.exports = mongoose.model('Campaigns', campaignSchema);