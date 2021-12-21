const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const characterSchema = new Schema ({
  name: String, 
  classAndLevel: String,
  race: String,
  stats: String,
  gear: String,
  bio: String,
  campaigns: String,
  avatar: {
    type: String,
    default: "https://www.kenyons.com/wp-content/uploads/2017/04/default-image-620x600.jpg",
    },
    playerName: String
})

module.exports = mongoose.model('Characters', campaignSchema)