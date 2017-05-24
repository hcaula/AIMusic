var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

module.exports = function() {

  var musicSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    artist: {
      type: String,
      required: true
    },
    cover: {
      type: String
    },
    video_url: {
      type: String
    }
  });

  return mongoose.model('Music', musicSchema);
};
