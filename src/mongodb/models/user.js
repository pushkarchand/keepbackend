let mongoose = require('../index');
let Schema = mongoose.Schema;
mongoose.set('useFindAndModify', false);

let userSchema = new Schema({
  firstName: String,
  lastName:String,
  password:String,
  emailId:String,
  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date, default: Date.now}
});
module.exports = mongoose.model('User', userSchema);