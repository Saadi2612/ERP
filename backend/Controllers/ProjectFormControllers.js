const ProjectFormModel = require("../Models/ProjectFormModel");

module.exports.getProjectFormData = async (req, res) => {
  try {
    const projectFormData = await ProjectFormModel.find();

    const result = { projectFormData };

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve data" });
  }
};


module.exports.postProjectForm = async (req, res) => {
  console.log(req.body);
  try {
    const {
        pFormId,
        userEmail,
        clientEmail,
        category,
        taskName,
        vendorName,
        laborHours,
        laborRate,
        materialUnits,
        materialRate,
        fixedCost,
        budgetAmount,
        actualAmount,
        underOver,
    } = req.body;

    const inventory = await ProjectFormModel.create({
        pFormId,
        userEmail,
        clientEmail,
        category,
        taskName,
        vendorName,
        laborHours,
        laborRate,
        materialUnits,
        materialRate,
        fixedCost,
        budgetAmount,
        actualAmount,
        underOver,
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