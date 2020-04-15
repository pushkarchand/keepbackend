let mongoose = require('../index');
let Schema = mongoose.Schema;
let ObjectId = mongoose.Schema.Types.ObjectId;
mongoose.set('useFindAndModify', false);


let storeSchema = new Schema({
  name: String,
  items:[Object],
  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date, default: Date.now}
});
module.exports = mongoose.model('Store', storeSchema);