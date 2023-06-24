const mongoose = require("mongoose");

const miscSchema = new mongoose.Schema({
  customKeyMisc: {
    type: String,
    unique: true,
  },
  userEmail: {
    type: String,
  },
  miscCharges: {
    type: String,
  },
  hrs_qty: {
    type: String,
  },
  rate: {
    type: String,
  },
});

module.exports = mongoose.model("Miscellaneous", miscSchema);
