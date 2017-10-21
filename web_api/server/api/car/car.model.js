const esodm = require('elasticsearch-odm-5');

// // // //

const CarSchema = new esodm.Schema({
  type: String,
  color: {type: String, required: true}
});

// // // //

module.exports = esodm.model('Car', CarSchema);
