const InventoryModel = require("../Models/InventoryModel");


module.exports.getInventory = async (req, res) => {
  try {
    const inventoryData = await InventoryModel.find();

    const result = {inventoryData};
    console.log(result)

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve data" });
  }
};

module.exports.postInventory = async (req, res) => {
  console.log(req.body);
  try {
    const {
      inventoryId,
      clientEmail,
      userEmail,
      minimumSiteArea,
      siteArea,
      buildingCoverage,
      parkingCoverage,
      demolitionCost,
      sitePreparationCost,
      neighbourhoodCharter,
      isViewToExteriorImportant,
      isDesirableView,
      isAcceptableToPlanningBoardsLocal,
      isAcceptableToPlanningBoardsRegional,
      isExposedToFloodWater,
      isIn100YearFloodWater,
      areNotableTreesShown,
      areNaturalFeaturesShown,
      willConstructionHarmFeatures,
      areSiteContoursShown,
      siteContoursDescription,
      areMajorAmountsOfFillExpected,
      areMajorAmountsOfSpoilExpected,
      isSubjectToWinds,
      willCreateWinds,
    } = req.body;
    
    const inventory = await InventoryModel.create({
        inventoryId,
        clientEmail,
        userEmail,
        minimumSiteArea,
        siteArea,
        buildingCoverage,
        parkingCoverage,
        demolitionCost,
        sitePreparationCost,
        neighbourhoodCharter,
        isViewToExteriorImportant,
        isDesirableView,
        isAcceptableToPlanningBoardsLocal,
        isAcceptableToPlanningBoardsRegional,
        isExposedToFloodWater,
        isIn100YearFloodWater,
        areNotableTreesShown,
        areNaturalFeaturesShown,
        willConstructionHarmFeatures,
        areSiteContoursShown,
        siteContoursDescription,
        areMajorAmountsOfFillExpected,
        areMajorAmountsOfSpoilExpected,
        isSubjectToWinds,
        willCreateWinds,
    });

    res.send({ data: inventory, posted: true });
    //res.status(200).send({message: "User created successfully.", success: true});
  } catch (err) {
    console.log(err);
    res.json({ created: false });
    res
      .status(500)
      .send({ message: "Error posting inventory.", success: false });
  }
};

module.exports.deleteInventoryData = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const data = await InventoryModel.findOneAndDelete({
      inventoryId: id,
    });
    res.status(200).json({ message: "Inventory item deleted successfully" });
    //console.log(data);
  } catch {
    res.status(500).json({ error: "Failed to delete item" });
  }
};