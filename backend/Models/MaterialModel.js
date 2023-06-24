const mongoose = require("mongoose");

const materialSchema = new mongoose.Schema({
  customKeyMaterial: {
    type: String,
    unique: true,
  },
  userEmail: {
    type: String,
  },
  material: {
    type: String,
  },
  quantity: {
    type: String,
  },
  unitPrice: {
    type: String,
  },
});

module.exports = mongoose.model("Material", materialSchema);
