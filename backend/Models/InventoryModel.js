const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
  inventoryId: {
    type: String,
    unique: true,
  },
  clientEmail: {
    type: String,
  },
  userEmail: {
    type: String,
  },
  minimumSiteArea: {
    type: String,
  },
  siteArea: {
    type: String,
  },
  buildingCoverage: {
    type: String,
  },
  parkingCoverage: {
    type: String,
  },
  demolitionCost: {
    type: String,
  },
  sitePreparationCost: {
    type: String,
  },
  neighbourhoodCharter: {
    type: String,
  },
  isViewToExteriorImportant: {
    type: String,
  },
  isDesirableView: {
    type: String,
  },
  isAcceptableToPlanningBoardsLocal: {
    type: String,
  },
  isAcceptableToPlanningBoardsRegional: {
    type: String,
  },
  isExposedToFloodWater: {
    type: String,
  },
  isIn100YearFloodWater: {
    type: String,
  },
  areNotableTreesShown: {
    type: String,
  },
  areNaturalFeaturesShown: {
    type: String,
  },
  willConstructionHarmFeatures: {
    type: String,
  },
  areSiteContoursShown: {
    type: String,
  },
  siteContoursDescription: {
    type: String,
  },
  areMajorAmountsOfFillExpected: {
    type: String,
  },
  areMajorAmountsOfSpoilExpected: {
    type: String,
  },
  isSubjectToWinds: {
    type: String,
  },
  willCreateWinds: {
    type: String,
  },
});

module.exports = mongoose.model("Inventory", inventorySchema);