const {handleCostEstimation, handleDeleteRecord, handleGetData} = require("../Controllers/CostControllers");
const { postInventory, getInventory, deleteInventoryData } = require("../Controllers/InventoryController");
const { postProjectForm, getProjectFormData } = require("../Controllers/ProjectFormControllers");

const router = require("express").Router();

router.post("/costestimation", handleCostEstimation);
router.delete("/costestimation/:id", handleDeleteRecord);
router.get("/costestimation", handleGetData)
router.post("/inventorymanagement", postInventory);
router.get("/inventorymanagement", getInventory);
router.get("/dashboard", getInventory);
router.delete("/inventorymanagement/:id", deleteInventoryData);
router.post("/projectmanagement", postProjectForm);
router.get("/projectmanagement", getProjectFormData);

module.exports = router;