import React, { useState } from "react";
import "./CostEstimation.css";
import EstimateTable from "./EstimateTable";
import {
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) =>
  createStyles({
    dialogTitle: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    dialogActions: {
      justifyContent: "space-between",
      paddingTop: theme.spacing(2),
    },
    formField: {
      marginBottom: theme.spacing(2),
    },
  })
);
function CostEstimation() {
  const [isMaterialInputVisible, setMaterialInputVisible] = useState(false);
  const [isLaborInputVisible, setLaborInputVisible] = useState(false);
  const [isMiscInputVisible, setMiscInputVisible] = useState(false);

  const [materialData, setMaterialData] = useState({
    material: "",
    quantity: "",
    unitPrice: "",
  });

  const [laborData, setLaborData] = useState({
    labor: "",
    hours: "",
    rate: "",
  });

  const [miscData, setMiscData] = useState({
    miscCharges: "",
    hrs_qty: "",
    rate: "",
  });

  const [materialArray, setMaterialArray] = useState([]);
  const [laborArray, setLaborArray] = useState([]);
  const [miscArray, setMiscArray] = useState([]);

  //Functions for Material
  const handleMaterialInputChange = (e) => {
    const { name, value } = e.target;
    setMaterialData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleMaterialSubmit = (e) => {
    e.preventDefault();
    setMaterialArray((prevArray) => [...prevArray, materialData]);
    setMaterialData({ material: "", quantity: "", unitPrice: "" });
  };

  const handleToggleMaterialInput = () => {
    setMaterialInputVisible(!isMaterialInputVisible);
  };

  //Functions for Labor
  const handleLaborInputChange = (e) => {
    const { name, value } = e.target;
    setLaborData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLaborSubmit = (e) => {
    e.preventDefault();
    setLaborArray((prevArray) => [...prevArray, laborData]);
    setLaborData({ labor: "", hours: "", rate: "" });
  };

  const handleToggleLaborInput = () => {
    setLaborInputVisible(!isLaborInputVisible);
  };

  //Functions for Misc
  const handleMiscInputChange = (e) => {
    const { name, value } = e.target;
    setMiscData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleMiscSubmit = (e) => {
    e.preventDefault();
    setMiscArray((prevArray) => [...prevArray, miscData]);
    setMiscData({ labor: "", hours: "", rate: "" });
  };

  const handleToggleMiscInput = () => {
    setMiscInputVisible(!isMiscInputVisible);
  };
  ////
  const classes = useStyles();
  const [showForm, setShowForm] = useState(false);
  const [showLaborForm, setShowLaborForm] = useState(false);
  const [showMiscForm, setShowMiscForm] = useState(false);
  const handleOpenMaterialForm = () => {
    setShowForm(true);
  };
  const handleOpenLaborForm = () => {
    setShowLaborForm(true);
  };
  const handleOpenMiscForm = () => {
    setShowMiscForm(true);
  };
  const handleCloseForm = () => {
    setShowForm(false);
    setShowMiscForm(false);
    setShowLaborForm(false);
  };
  return (
    <div className="div">
      <div className="data-input-div">
        <div
          className="input-fields-container"
          style={{ marginBottom: "20px" }}
        >
          <button
            className="material-hide-show"
            onClick={handleOpenMaterialForm}
          >
            Show Material fields
          </button>

          <Dialog open={showForm} onClose={handleCloseForm}>
            <DialogTitle className={classes.dialogTitle}>
              Add New Material
            </DialogTitle>
            <form>
              <DialogContent>
                <TextField
                  label="Enter Material"
                  fullWidth
                  name="material"
                  onChange={handleMaterialInputChange}
                  value={materialData.material}
                  required
                  className={classes.formField}
                />
                <TextField
                  label="Enter Quantity"
                  fullWidth
                  value={materialData.quantity}
                  onChange={handleMaterialInputChange}
                  required
                  name="quantity"
                  className={classes.formField}
                />
                <TextField
                  label="Enter Unit"
                  fullWidth
                  value={materialData.unitPrice}
                  onChange={handleMaterialInputChange}
                  required
                  name="unitPrice"
                  className={classes.formField}
                />
              </DialogContent>
              <DialogActions className={classes.dialogActions}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={handleMaterialSubmit}
                >
                  Add
                </Button>
                <Button
                  type="button"
                  variant="contained"
                  color="default"
                  onClick={handleCloseForm}
                >
                  Cancel
                </Button>
              </DialogActions>
            </form>
          </Dialog>
        </div>

        <div
          className="input-fields-container"
          style={{ marginBottom: "20px" }}
        >
          <button className="material-hide-show" onClick={handleOpenLaborForm}>
            Show Labor fields
          </button>
          <Dialog open={showLaborForm} onClose={handleCloseForm}>
            <DialogTitle className={classes.dialogTitle}>
              Add New Labor
            </DialogTitle>
            <form>
              <DialogContent>
                <TextField
                  label="Enter Labor"
                  fullWidth
                  required
                  className={classes.formField}
                  type="text"
                  name="labor"
                  value={laborData.labor}
                  onChange={handleLaborInputChange}
                />
                <TextField
                  label="Enter Hours"
                  fullWidth
                  required
                  className={classes.formField}
                  type="text"
                  name="hours"
                  value={laborData.hours}
                  onChange={handleLaborInputChange}
                />
                <TextField
                  label="Enter Rate"
                  fullWidth
                  required
                  className={classes.formField}
                  type="text"
                  name="rate"
                  value={laborData.rate}
                  onChange={handleLaborInputChange}
                />
              </DialogContent>
              <DialogActions className={classes.dialogActions}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={handleLaborSubmit}
                >
                  Add
                </Button>
                <Button
                  type="button"
                  variant="contained"
                  color="default"
                  onClick={handleCloseForm}
                >
                  Cancel
                </Button>
              </DialogActions>
            </form>
          </Dialog>
        </div>

        <div className="input-fields-container">
          <button className="material-hide-show" onClick={handleOpenMiscForm}>
            Show Miscellaneous
          </button>
          <Dialog open={showMiscForm} onClose={handleCloseForm}>
            <DialogTitle className={classes.dialogTitle}>
              Add New Miscellaneous
            </DialogTitle>
            <form>
              <DialogContent>
                <TextField
                  label="Enter Miscellaneous Charges"
                  fullWidth
                  required
                  className={classes.formField}
                  type="text"
                  name="miscCharges"
                  value={miscData.miscCharges}
                  onChange={handleMiscInputChange}
                />
                <TextField
                  label="Enter Hours/Quantity"
                  fullWidth
                  required
                  className={classes.formField}
                  type="text"
                  name="hrs_qty"
                  value={miscData.hrs_qty}
                  onChange={handleMiscInputChange}
                />
                <TextField
                  label="Enter Rate"
                  fullWidth
                  required
                  className={classes.formField}
                  type="text"
                  name="rate"
                  value={miscData.rate}
                  onChange={handleMiscInputChange}
                />
              </DialogContent>
              <DialogActions className={classes.dialogActions}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={handleMiscSubmit}
                >
                  Add
                </Button>
                <Button
                  type="button"
                  variant="contained"
                  color="default"
                  onClick={handleCloseForm}
                >
                  Cancel
                </Button>
              </DialogActions>
            </form>
          </Dialog>
        </div>
      </div>
      <div className="table-div" style={{ marginTop: "30px" }}>
        <EstimateTable
          materialArray={materialArray}
          laborArray={laborArray}
          miscArray={miscArray}
        />
      </div>
    </div>
  );
}

export default CostEstimation;
