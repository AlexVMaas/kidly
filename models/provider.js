const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const providerSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  occupation: String,
  location: String,
  kids: String,
  interests: String,
  email: String,
});

const Provider= mongoose.model("Provider", providerSchema);

module.exports = Provider;