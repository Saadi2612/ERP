const MaterialModel = require("../Models/MaterialModel");
const LaborModel = require("../Models/LaborModel");
const MiscModel = require("../Models/MiscellaneousModel");

module.exports.handleGetData = async (req, res) => {
  try {
    const laborData = await LaborModel.find();
    const materialData = await MaterialModel.find();
    const miscData = await MiscModel.find();

    const result = {
      laborData,
      materialData,
      miscData,
    };

    res.status(200).json(result);
                                                                                                                
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve data" });
  }
};


const postMaterial = async (req, res, next) => {
  console.log(req.body);
  try {
    const { userEmail, customKeyMaterial, material, quantity, unitPrice } = req.body;
    const materials = await MaterialModel.create({
      userEmail,
      customKeyMaterial,
      material,
      quantity,
      unitPrice,
    });

    res.send({ data: materials, posted: true });
    //res.status(200).send({message: "User created successfully.", success: true});
  } catch (err) {
    console.log(err);
    res.json({created: false });
    res.status(500).send({ message: "Error posting material.", success: false });
  }
};

const postLabor = async (req, res, next) => {
  console.log(req.body);
  try {
    const { userEmail, customKeyLabor, labor, hours, rate } = req.body;
    const labors = await LaborModel.create({
      userEmail,
      customKeyLabor,
      labor,
      hours,
      rate,
    });

    res.send({ data: labors, posted: true });
    //res.status(200).send({message: "User created successfully.", success: true});

  } catch (err) {
    console.log(err);
    res.json({ created: false });
    res
      .status(500)
      .send({ message: "Error posting labor.", success: false });
  }
};

const postMiscellaneous = async (req, res, next) => {
  console.log(req.body);
  try {
    const { userEmail, customKeyMisc, miscCharges, hrs_qty, rate } = req.body;
    const miscellaneous = await MiscModel.create({
      userEmail,
      customKeyMisc,
      miscCharges,
      hrs_qty,
      rate,
    });

    res.send({ data: miscellaneous, posted: true });
    //res.status(200).send({message: "User created successfully.", success: true});
  } catch (err) {
    console.log(err);
    res.json({ created: false });
    res.status(500).send({ message: "Error posting Miscellaneous Charges.", success: false });
  }
};

const deleteMaterial = async (req, res, next) => {
  try {
    const {id} = req.params;
    //console.log(id);
    const data = await MaterialModel.findOneAndDelete({
      customKeyMaterial: id,
    });
    res.status(200).json({ message: "Material deleted successfully" });
    //console.log(data);
  } catch {
    res.status(500).json({ error: "Failed to delete record" });
  }
}

const deleteLabor = async (req, res, next) => {
  try {
    const { id } = req.params;
    //console.log(id);
    const data = await LaborModel.findOneAndDelete({ customKeyLabor: id });
    res.status(200).json({ message: "Labor deleted successfully" });
    //console.log(data);
  } catch {
    res.status(500).json({ error: "Failed to delete record" });
  }
};

const deleteMisc = async (req, res, next) => {
  try {
    const { id } = req.params;
    //console.log(id);
    const data = await MiscModel.findOneAndDelete({ customKeyMisc: id });
    res.status(200).json({ message: "Misc charges deleted successfully" });
    //console.log(data);
  } catch {
    res.status(500).json({ error: "Failed to delete record" });
  }
};

module.exports.handleDeleteRecord = async (req, res, next) => {
  // Check the action being requested based on the button clicked or any other criteria
  console.log(req.params)
  if(req.params.id.includes("mtrl")){
      deleteMaterial(req, res);
    } else if(req.params.id.includes("lbr")){
      deleteLabor(req, res);
    } else if (req.params.id.includes("misc")) {
      deleteMisc(req, res);
    }
  
};

module.exports.handleCostEstimation = async (req, res, next) => {
  // Check the action being requested based on the button clicked or any other criteria
  //console.log(Object.keys(req.body).includes("material"))

  if (Object.keys(req.body).includes("material")) {
    postMaterial(req, res, next);
  } else if (Object.keys(req.body).includes("labor")) {
    postLabor(req, res, next);
  } else if (Object.keys(req.body).includes("miscCharges")) {
    postMiscellaneous(req, res, next);
  } else {
    // Handle invalid or unsupported action
    res.status(400).json({ error: "Invalid action" });
  }
}
