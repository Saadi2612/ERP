const mongoose = require("mongoose");

const laborSchema = new mongoose.Schema({
  customKeyLabor: {
    type: String,
    unique: true,
  },
  userEmail: {
    type: String,
  },
  hours: {
    type: String,
  },
  rate: {
    type: String,
  },
});

module.exports = mongoose.model("Labor", laborSchema);
