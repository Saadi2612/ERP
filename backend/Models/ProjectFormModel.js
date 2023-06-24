const mongoose = require("mongoose");

const projectFormSchema = new mongoose.Schema({
  pFormId: {
    type: String,
    unique: true,
  },
  userEmail: {
    type: String,
  },
  clientEmail: {
    type: String,
  },
  category: {
    type: String,
  },
  taskName: {
    type: String,
  },
  vendorName: {
    type: String,
  },
  laborHours: {
    type: String,
  },
  laborRate: {
    type: String,
  },
  materialUnits: {
    type: String,
  },
  materialRate: {
    type: String,
  },
  fixedCost: {
    type: String,
  },
  budgetAmount: {
    type: String,
  },
  actualAmount: {
    type: String,
  },
  underOver: {
    type: String,
  },
});

module.exports = mongoose.model("ProjectForm", projectFormSchema);
