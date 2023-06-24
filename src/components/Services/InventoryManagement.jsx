import React, { useState, useEffect } from "react";
import "./InventoryManagement.css";
import InventoryTable from "./InventoryTable";
import { useSelector } from "react-redux";
import { selectUser } from "../../feature/userSlice";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
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
function InventoryManagement() {

  const user = useSelector(selectUser);


  const [clientEmail, setClientEmail] = useState("");
  //const [invId, setInvId] = useState(1);

  const [inventoryData, setInventoryData] = useState({
    minimumSiteArea: "",
    siteArea: "",
    buildingCoverage: "",
    parkingCoverage: "",
    demolitionCost: "",
    sitePreparationCost: "",
    neighbourhoodCharter: "",
    isViewToExteriorImportant: "",
    isDesirableView: "",
    isAcceptableToPlanningBoardsLocal: "",
    isAcceptableToPlanningBoardsRegional: "",
    isExposedToFloodWater: "",
    isIn100YearFloodWater: "",
    areNotableTreesShown: "",
    areNaturalFeaturesShown: "",
    willConstructionHarmFeatures: "",
    areSiteContoursShown: "",
    siteContoursDescription: "",
    areMajorAmountsOfFillExpected: "",
    areMajorAmountsOfSpoilExpected: "",
    isSubjectToWinds: "",
    willCreateWinds: "",
  });
  const [inventoryArray, setInventoryArray] = useState([]);

  function generateShortUUID() {
    const fullUUID = uuidv4();
    const shortUUID = fullUUID.substring(0, 12); // Truncate to 12 characters
    return shortUUID;
  }

  const classes = useStyles();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInventoryData((prev) => ({ ...prev, [name]: value }));
  };
  const handleThisClick = (name, value) => {
    setInventoryData((prev) => ({ ...prev, [name]: value }));
  };
  
  const [records, setRecords] = useState([]);

  const fetchRecords = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/inventorymanagement"
      );
      setRecords(response.data);
      //console.log(response.data);
      setInventoryArray(response.data.inventoryData);
    } catch (error) {
      console.error("Failed to fetch records:", error);
    }
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  const handleInventorySubmit = async (e) => {
    e.preventDefault();
    // Perform any necessary validation or processing with the captured values
    try {
      const { data } = await axios.post(
        "http://localhost:5000/inventorymanagement",
        {
          inventoryId: generateShortUUID(),
          clientEmail: clientEmail,
          userEmail: user.email,
          minimumSiteArea: inventoryData.minimumSiteArea,
          siteArea: inventoryData.siteArea,
          buildingCoverage: inventoryData.buildingCoverage,
          parkingCoverage: inventoryData.parkingCoverage,
          demolitionCost: inventoryData.demolitionCost,
          sitePreparationCost: inventoryData.sitePreparationCost,
          neighbourhoodCharter: inventoryData.neighbourhoodCharter,
          isViewToExteriorImportant: inventoryData.isViewToExteriorImportant,
          isDesirableView: inventoryData.isDesirableView,
          isAcceptableToPlanningBoardsLocal:
            inventoryData.isAcceptableToPlanningBoardsLocal,
          isAcceptableToPlanningBoardsRegional:
            inventoryData.isAcceptableToPlanningBoardsRegional,
          isExposedToFloodWater: inventoryData.isExposedToFloodWater,
          isIn100YearFloodWater: inventoryData.isIn100YearFloodWater,
          areNotableTreesShown: inventoryData.areNotableTreesShown,
          areNaturalFeaturesShown: inventoryData.areNaturalFeaturesShown,
          willConstructionHarmFeatures:
            inventoryData.willConstructionHarmFeatures,
          areSiteContoursShown: inventoryData.areSiteContoursShown,
          siteContoursDescription: inventoryData.siteContoursDescription,
          areMajorAmountsOfFillExpected:
            inventoryData.areMajorAmountsOfFillExpected,
          areMajorAmountsOfSpoilExpected:
            inventoryData.areMajorAmountsOfSpoilExpected,
          isSubjectToWinds: inventoryData.isSubjectToWinds,
          willCreateWinds: inventoryData.willCreateWinds,
        },
        {
          withCredentials: true,
        }
      );
      fetchRecords();
      console.log(data)
    } catch (err) {
      console.log(err);
    }

    setInventoryData(
    {
      minimumSiteArea: "",
      siteArea: "",
      buildingCoverage: "",
      parkingCoverage: "",
      demolitionCost: "",
      sitePreparationCost: "",
      neighbourhoodCharter: "",
      isViewToExteriorImportant: "",
      isDesirableView: "",
      isAcceptableToPlanningBoardsLocal: "",
      isAcceptableToPlanningBoardsRegional: "",
      isExposedToFloodWater: "",
      isIn100YearFloodWater: "",
      areNotableTreesShown: "",
      areNaturalFeaturesShown: "",
      willConstructionHarmFeatures: "",
      areSiteContoursShown: "",
      siteContoursDescription: "",
      areMajorAmountsOfFillExpected: "",
      areMajorAmountsOfSpoilExpected: "",
      isSubjectToWinds: "",
      willCreateWinds: ""
    });

    // Reset the form
    
  };

  console.log(inventoryArray);

  const [showForm, setShowForm] = useState(false);
  const handleOpenMaterialForm = () => {
    setShowForm(true);
  };
  const handleCloseForm = () => {
    setShowForm(false);
  };


  const [expandedItem, setExpandedItem] = useState(null);

  const handleItemClick = (email) => {
    if (expandedItem === email) {
      setExpandedItem(null); // Collapse the item if already expanded
    } else {
      setExpandedItem(email); // Expand the clicked item
    }
  };

  const handleDeleteData = async (event, invId) => {
    event.stopPropagation(); // Prevent the click event from triggering the parent item click
    // Implement your delete logic here
      try {
        const del_result = await axios.delete(
          "http://localhost:5000/inventorymanagement/" + invId
        );
        // Perform any necessary updates or fetch the updated records list
        fetchRecords();
        console.log(del_result);
        console.log(`Deleting item with inventory ID: ${invId}`);
      } catch (error) {
        console.error("Failed to delete record:", error);
      }
  };

  return (
    <div className="section">
      {user && user.displayName === "Contractor" ? (
        <div className="section-1-table">
          <button
            className="material-hide-show"
            style={{ width: "20rem", marginTop: "1rem" }}
            onClick={handleOpenMaterialForm}
          >
            Add detail
          </button>
          <Dialog open={showForm} onClose={handleCloseForm}>
            <DialogTitle className={classes.dialogTitle}>Add Data</DialogTitle>
            <form>
              <DialogContent>
                <TextField
                  label="Client's Email"
                  fullWidth
                  required
                  className={classes.formField}
                  type="email"
                  name="clientEmail"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                />
                <TextField
                  label="Minimum Site Area"
                  fullWidth
                  required
                  className={classes.formField}
                  type="text"
                  name="minimumSiteArea"
                  value={inventoryData.minimumSiteArea}
                  onChange={handleChange}
                />
                <TextField
                  label="Site Area"
                  fullWidth
                  required
                  className={classes.formField}
                  type="text"
                  placeholder="Site Area"
                  name="siteArea"
                  value={inventoryData.siteArea}
                  onChange={handleChange}
                />
                <TextField
                  label="Estimated Building Coverage"
                  fullWidth
                  required
                  className={classes.formField}
                  type="text"
                  name="buildingCoverage"
                  value={inventoryData.buildingCoverage}
                  onChange={handleChange}
                />
                <TextField
                  label="Estimated Parking Coverage"
                  fullWidth
                  required
                  className={classes.formField}
                  type="text"
                  name="parkingCoverage"
                  value={inventoryData.parkingCoverage}
                  onChange={handleChange}
                />
                <TextField
                  label="Demolition Cost"
                  fullWidth
                  required
                  className={classes.formField}
                  type="text"
                  name="demolitionCost"
                  value={inventoryData.demolitionCost}
                  onChange={handleChange}
                />
                <TextField
                  label="Site Preparation Cost"
                  fullWidth
                  required
                  className={classes.formField}
                  type="text"
                  name="sitePreparationCost"
                  value={inventoryData.sitePreparationCost}
                  onChange={handleChange}
                />
                <TextField
                  label="Specify Neighborhood Charter"
                  fullWidth
                  required
                  className={classes.formField}
                  type="text"
                  name="neighbourhoodCharter"
                  value={inventoryData.neighbourhoodCharter}
                  onChange={handleChange}
                />
              </DialogContent>
              <DialogActions className={classes.dialogActions}>
                <Button
                  type="button"
                  variant="contained"
                  color="default"
                  onClick={handleCloseForm}
                >
                  Add
                </Button>
              </DialogActions>
            </form>
          </Dialog>

          <div className="radio-button-div">
            <div style={{ display: "flex" }}>
              <div style={{ marginRight: "12rem" }}>
                <label className="parent-label">
                  Is view to exterior important in this project?
                </label>
                <div className="row  justify-content-center ">
                  <div className="col-6 col-lg-6 col-md-6 text-center position-relative">
                    <button
                      onClick={() =>
                        handleThisClick("isViewToExteriorImportant", "yes")
                      }
                      className={`testerCarrierY-N ${
                        inventoryData.isViewToExteriorImportant === "yes"
                          ? "selected testerCarrierY-N-bg"
                          : ""
                      }`}
                    >
                      <p
                        style={{
                          fontWeight: 600,
                          fontSize: "1.4rem",
                        }}
                      >
                        Yes
                      </p>
                    </button>
                  </div>

                  <div className="col-6 col-lg-6 col-md-6 text-center position-relative">
                    <button
                      onClick={() =>
                        handleThisClick("isViewToExteriorImportant", "no")
                      }
                      className={`testerCarrierY-N ${
                        inventoryData.isViewToExteriorImportant === "no"
                          ? "selected testerCarrierY-N-bg"
                          : ""
                      }`}
                    >
                      <p
                        style={{
                          fontWeight: 600,
                          fontSize: "1.4rem",
                        }}
                      >
                        No
                      </p>
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <label className="parent-label">
                  Is view at this site desirable one?
                </label>
                <div className="row  justify-content-center ">
                  <div className="col-6 col-lg-6 col-md-6 text-center position-relative">
                    <button
                      onClick={() => handleThisClick("isDesirableView", "yes")}
                      className={`testerCarrierY-N ${
                        inventoryData.isDesirableView === "yes"
                          ? "selected testerCarrierY-N-bg"
                          : ""
                      }`}
                    >
                      <p
                        style={{
                          fontWeight: 600,
                          fontSize: "1.4rem",
                        }}
                      >
                        Yes
                      </p>
                    </button>
                  </div>

                  <div className="col-6 col-lg-6 col-md-6 text-center position-relative">
                    <button
                      onClick={() => handleThisClick("isDesirableView", "no")}
                      className={`testerCarrierY-N ${
                        inventoryData.isDesirableView === "no"
                          ? "selected testerCarrierY-N-bg"
                          : ""
                      }`}
                    >
                      <p
                        style={{
                          fontWeight: 600,
                          fontSize: "1.4rem",
                        }}
                      >
                        No
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", marginTop: "2rem" }}>
              <div>
                <label className="parent-label">
                  Is project acceptable to planning boards and agencies: Local?
                </label>
                <div className="row  justify-content-center ">
                  <div className="col-6 col-lg-6 col-md-6 text-center position-relative">
                    <button
                      onClick={() =>
                        handleThisClick(
                          "isAcceptableToPlanningBoardsLocal",
                          "yes"
                        )
                      }
                      className={`testerCarrierY-N ${
                        inventoryData.isAcceptableToPlanningBoardsLocal ===
                        "yes"
                          ? "selected testerCarrierY-N-bg"
                          : ""
                      }`}
                    >
                      <p
                        style={{
                          fontWeight: 600,
                          fontSize: "1.4rem",
                        }}
                      >
                        Yes
                      </p>
                    </button>
                  </div>

                  <div className="col-6 col-lg-6 col-md-6 text-center position-relative">
                    <button
                      onClick={() =>
                        handleThisClick(
                          "isAcceptableToPlanningBoardsLocal",
                          "no"
                        )
                      }
                      className={`testerCarrierY-N ${
                        inventoryData.isAcceptableToPlanningBoardsLocal === "no"
                          ? "selected testerCarrierY-N-bg"
                          : ""
                      }`}
                    >
                      <p
                        style={{
                          fontWeight: 600,
                          fontSize: "1.4rem",
                        }}
                      >
                        No
                      </p>
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <label className="parent-label">
                  Is project acceptable to planning boards and agencies:
                  Regional?
                </label>
                <div className="row  justify-content-center ">
                  <div className="col-6 col-lg-6 col-md-6 text-center position-relative">
                    <button
                      onClick={() =>
                        handleThisClick(
                          "isAcceptableToPlanningBoardsRegional",
                          "yes"
                        )
                      }
                      className={`testerCarrierY-N ${
                        inventoryData.isAcceptableToPlanningBoardsRegional ===
                        "yes"
                          ? "selected testerCarrierY-N-bg"
                          : ""
                      }`}
                    >
                      <p
                        style={{
                          fontWeight: 600,
                          fontSize: "1.4rem",
                        }}
                      >
                        Yes
                      </p>
                    </button>
                  </div>

                  <div className="col-6 col-lg-6 col-md-6 text-center position-relative">
                    <button
                      onClick={() =>
                        handleThisClick(
                          "isAcceptableToPlanningBoardsRegional",
                          "no"
                        )
                      }
                      className={`testerCarrierY-N ${
                        inventoryData.isAcceptableToPlanningBoardsRegional ===
                        "no"
                          ? "selected testerCarrierY-N-bg"
                          : ""
                      }`}
                    >
                      <p
                        style={{
                          fontWeight: 600,
                          fontSize: "1.4rem",
                        }}
                      >
                        No
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", marginTop: "2rem" }}>
              <div style={{ marginRight: "12rem" }}>
                <label className="parent-label">
                  Is area exposed to flood water?
                </label>
                <div className="row  justify-content-center ">
                  <div className="col-6 col-lg-6 col-md-6 text-center position-relative">
                    <button
                      onClick={() =>
                        handleThisClick("isExposedToFloodWater", "yes")
                      }
                      className={`testerCarrierY-N ${
                        inventoryData.isExposedToFloodWater === "yes"
                          ? "selected testerCarrierY-N-bg"
                          : ""
                      }`}
                    >
                      <p
                        style={{
                          fontWeight: 600,
                          fontSize: "1.4rem",
                        }}
                      >
                        Yes
                      </p>
                    </button>
                  </div>

                  <div className="col-6 col-lg-6 col-md-6 text-center position-relative">
                    <button
                      onClick={() =>
                        handleThisClick("isExposedToFloodWater", "no")
                      }
                      className={`testerCarrierY-N ${
                        inventoryData.isExposedToFloodWater === "no"
                          ? "selected testerCarrierY-N-bg"
                          : ""
                      }`}
                    >
                      <p
                        style={{
                          fontWeight: 600,
                          fontSize: "1.4rem",
                        }}
                      >
                        No
                      </p>
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <label className="parent-label">
                  Is area in 100 year flood water?
                </label>
                <div className="row  justify-content-center ">
                  <div className="col-6 col-lg-6 col-md-6 text-center position-relative">
                    <button
                      onClick={() =>
                        handleThisClick("isIn100YearFloodWater", "yes")
                      }
                      className={`testerCarrierY-N ${
                        inventoryData.isIn100YearFloodWater === "yes"
                          ? "selected testerCarrierY-N-bg"
                          : ""
                      }`}
                    >
                      <p
                        style={{
                          fontWeight: 600,
                          fontSize: "1.4rem",
                        }}
                      >
                        Yes
                      </p>
                    </button>
                  </div>

                  <div className="col-6 col-lg-6 col-md-6 text-center position-relative">
                    <button
                      onClick={() =>
                        handleThisClick("isIn100YearFloodWater", "no")
                      }
                      className={`testerCarrierY-N ${
                        inventoryData.isIn100YearFloodWater === "no"
                          ? "selected testerCarrierY-N-bg"
                          : ""
                      }`}
                    >
                      <p
                        style={{
                          fontWeight: 600,
                          fontSize: "1.4rem",
                        }}
                      >
                        No
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", marginTop: "2rem" }}>
              <div style={{ marginRight: "12rem" }}>
                <label className="parent-label">
                  Are trees of notable quality and/or size shown on existing
                  site plans?
                </label>
                <div className="row  justify-content-center ">
                  <div className="col-6 col-lg-6 col-md-6 text-center position-relative">
                    <button
                      onClick={() =>
                        handleThisClick("areNotableTreesShown", "yes")
                      }
                      className={`testerCarrierY-N ${
                        inventoryData.areNotableTreesShown === "yes"
                          ? "selected testerCarrierY-N-bg"
                          : ""
                      }`}
                    >
                      <p
                        style={{
                          fontWeight: 600,
                          fontSize: "1.4rem",
                        }}
                      >
                        Yes
                      </p>
                    </button>
                  </div>

                  <div className="col-6 col-lg-6 col-md-6 text-center position-relative">
                    <button
                      onClick={() =>
                        handleThisClick("areNotableTreesShown", "no")
                      }
                      className={`testerCarrierY-N ${
                        inventoryData.areNotableTreesShown === "no"
                          ? "selected testerCarrierY-N-bg"
                          : ""
                      }`}
                    >
                      <p
                        style={{
                          fontWeight: 600,
                          fontSize: "1.4rem",
                        }}
                      >
                        No
                      </p>
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <label className="parent-label">
                    Are significant natural features (rock, outcroppings,
                    boulders, streams, etc.) shown on existing site plans
                  </label>
                </div>

                <div className="row  justify-content-center ">
                  <div className="col-6 col-lg-6 col-md-6 text-center position-relative">
                    <button
                      onClick={() =>
                        handleThisClick("areNaturalFeaturesShown", "yes")
                      }
                      className={`testerCarrierY-N ${
                        inventoryData.areNaturalFeaturesShown === "yes"
                          ? "selected testerCarrierY-N-bg"
                          : ""
                      }`}
                    >
                      <p
                        style={{
                          fontWeight: 600,
                          fontSize: "1.4rem",
                        }}
                      >
                        Yes
                      </p>
                    </button>
                  </div>

                  <div className="col-6 col-lg-6 col-md-6 text-center position-relative">
                    <button
                      onClick={() =>
                        handleThisClick("areNaturalFeaturesShown", "no")
                      }
                      className={`testerCarrierY-N ${
                        inventoryData.areNaturalFeaturesShown === "no"
                          ? "selected testerCarrierY-N-bg"
                          : ""
                      }`}
                    >
                      <p
                        style={{
                          fontWeight: 600,
                          fontSize: "1.4rem",
                        }}
                      >
                        No
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ marginRight: "12rem" }}>
                <label className="parent-label">
                  Will proposed construction harm existing significant trees,
                  vegetation or natural features
                </label>
                <div className="row  justify-content-center ">
                  <div className="col-6 col-lg-6 col-md-6 text-center position-relative">
                    <button
                      onClick={() =>
                        handleThisClick("willConstructionHarmFeatures", "yes")
                      }
                      className={`testerCarrierY-N ${
                        inventoryData.willConstructionHarmFeatures === "yes"
                          ? "selected testerCarrierY-N-bg"
                          : ""
                      }`}
                    >
                      <p
                        style={{
                          fontWeight: 600,
                          fontSize: "1.4rem",
                        }}
                      >
                        Yes
                      </p>
                    </button>
                  </div>

                  <div className="col-6 col-lg-6 col-md-6 text-center position-relative">
                    <button
                      onClick={() =>
                        handleThisClick("willConstructionHarmFeatures", "no")
                      }
                      className={`testerCarrierY-N ${
                        inventoryData.willConstructionHarmFeatures === "no"
                          ? "selected testerCarrierY-N-bg"
                          : ""
                      }`}
                    >
                      <p
                        style={{
                          fontWeight: 600,
                          fontSize: "1.4rem",
                        }}
                      >
                        No
                      </p>
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <label className="parent-label">
                  Site Contours: Are they shown at minimum 5 foot intervals on
                  existing plans?
                </label>
                <div className="row  justify-content-center ">
                  <div className="col-6 col-lg-6 col-md-6 text-center position-relative">
                    <button
                      onClick={() =>
                        handleThisClick("areSiteContoursShown", "yes")
                      }
                      className={`testerCarrierY-N ${
                        inventoryData.areSiteContoursShown === "yes"
                          ? "selected testerCarrierY-N-bg"
                          : ""
                      }`}
                    >
                      <p
                        style={{
                          fontWeight: 600,
                          fontSize: "1.4rem",
                        }}
                      >
                        Yes
                      </p>
                    </button>
                  </div>

                  <div className="col-6 col-lg-6 col-md-6 text-center position-relative">
                    <button
                      onClick={() =>
                        handleThisClick("areSiteContoursShown", "no")
                      }
                      className={`testerCarrierY-N ${
                        inventoryData.areSiteContoursShown === "no"
                          ? "selected testerCarrierY-N-bg"
                          : ""
                      }`}
                    >
                      <p
                        style={{
                          fontWeight: 600,
                          fontSize: "1.4rem",
                        }}
                      >
                        No
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: "flex" }}>
              <div style={{ marginRight: "12rem" }}>
                <label className="parent-label">
                  Are major amounts of fill expected?
                </label>
                <div className="row  justify-content-center ">
                  <div className="col-6 col-lg-6 col-md-6 text-center position-relative">
                    <button
                      onClick={() =>
                        handleThisClick("areMajorAmountsOfFillExpected", "yes")
                      }
                      className={`testerCarrierY-N ${
                        inventoryData.areMajorAmountsOfFillExpected === "yes"
                          ? "selected testerCarrierY-N-bg"
                          : ""
                      }`}
                    >
                      <p
                        style={{
                          fontWeight: 600,
                          fontSize: "1.4rem",
                        }}
                      >
                        Yes
                      </p>
                    </button>
                  </div>

                  <div className="col-6 col-lg-6 col-md-6 text-center position-relative">
                    <button
                      onClick={() =>
                        handleThisClick("areMajorAmountsOfFillExpected", "no")
                      }
                      className={`testerCarrierY-N ${
                        inventoryData.areMajorAmountsOfFillExpected === "no"
                          ? "selected testerCarrierY-N-bg"
                          : ""
                      }`}
                    >
                      <p
                        style={{
                          fontWeight: 600,
                          fontSize: "1.4rem",
                        }}
                      >
                        No
                      </p>
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <label className="parent-label">
                  Are major amounts of spoil likely to result from construction?
                </label>
                <div className="row  justify-content-center ">
                  <div className="col-6 col-lg-6 col-md-6 text-center position-relative">
                    <button
                      onClick={() =>
                        handleThisClick("areMajorAmountsOfSpoilExpected", "yes")
                      }
                      className={`testerCarrierY-N ${
                        inventoryData.areMajorAmountsOfSpoilExpected === "yes"
                          ? "selected testerCarrierY-N-bg"
                          : ""
                      }`}
                    >
                      <p
                        style={{
                          fontWeight: 600,
                          fontSize: "1.4rem",
                        }}
                      >
                        Yes
                      </p>
                    </button>
                  </div>

                  <div className="col-6 col-lg-6 col-md-6 text-center position-relative">
                    <button
                      onClick={() =>
                        handleThisClick("areMajorAmountsOfSpoilExpected", "no")
                      }
                      className={`testerCarrierY-N ${
                        inventoryData.areMajorAmountsOfSpoilExpected === "no"
                          ? "selected testerCarrierY-N-bg"
                          : ""
                      }`}
                    >
                      <p
                        style={{
                          fontWeight: 600,
                          fontSize: "1.4rem",
                        }}
                      >
                        No
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ marginRight: "12rem" }}>
                <label className="parent-label">
                  Will project be subject to winds created by tall buildings?
                </label>
                <div className="row  justify-content-center ">
                  <div className="col-6 col-lg-6 col-md-6 text-center position-relative">
                    <button
                      onClick={() => handleThisClick("isSubjectToWinds", "yes")}
                      className={`testerCarrierY-N ${
                        inventoryData.isSubjectToWinds === "yes"
                          ? "selected testerCarrierY-N-bg"
                          : ""
                      }`}
                    >
                      <p
                        style={{
                          fontWeight: 600,
                          fontSize: "1.4rem",
                        }}
                      >
                        Yes
                      </p>
                    </button>
                  </div>

                  <div className="col-6 col-lg-6 col-md-6 text-center position-relative">
                    <button
                      onClick={() => handleThisClick("isSubjectToWinds", "no")}
                      className={`testerCarrierY-N ${
                        inventoryData.isSubjectToWinds === "no"
                          ? "selected testerCarrierY-N-bg"
                          : ""
                      }`}
                    >
                      <p
                        style={{
                          fontWeight: 600,
                          fontSize: "1.4rem",
                        }}
                      >
                        No
                      </p>
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <label className="parent-label">
                  Will project create winds by destroying hills or trees by
                  proximity to other tall buildings, etc.?
                </label>
                <div className="row  justify-content-center ">
                  <div className="col-6 col-lg-6 col-md-6 text-center position-relative">
                    <button
                      onClick={() => handleThisClick("willCreateWinds", "yes")}
                      className={`testerCarrierY-N ${
                        inventoryData.willCreateWinds === "yes"
                          ? "selected testerCarrierY-N-bg"
                          : ""
                      }`}
                    >
                      <p
                        style={{
                          fontWeight: 600,
                          fontSize: "1.4rem",
                        }}
                      >
                        Yes
                      </p>
                    </button>
                  </div>

                  <div className="col-6 col-lg-6 col-md-6 text-center position-relative">
                    <button
                      onClick={() => handleThisClick("willCreateWinds", "no")}
                      className={`testerCarrierY-N ${
                        inventoryData.willCreateWinds === "no"
                          ? "selected testerCarrierY-N-bg"
                          : ""
                      }`}
                    >
                      <p
                        style={{
                          fontWeight: 600,
                          fontSize: "1.4rem",
                        }}
                      >
                        No
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <label className="parent-label">
              b. Describe (level, rolling, steeply slope, etc.).
              <div>
                <input
                  type="text"
                  name="siteContoursDescription"
                  value={inventoryData.siteContoursDescription}
                  onChange={handleChange}
                  style={{ width: "80%", height: "50px" }}
                />
              </div>
            </label>
          </div>

          <button
            className="material-hide-button"
            onClick={handleInventorySubmit}
          >
            Submit
          </button>

          <ul>
            {inventoryArray.map((item) => (
              <li
                key={item.clientEmail}
                onClick={() => handleItemClick(item.clientEmail)}
              >
                {item.clientEmail}
                {expandedItem === item.clientEmail && (
                  <div>
                    {/* Render the remaining data for the expanded item */}
                    <p>Client's Email: {item.clientEmail}</p>
                    <p>User Email: {item.userEmail}</p>
                    <p>Minimum Site Area: {item.minimumSiteArea}</p>
                    <p>Site Area: {item.siteArea}</p>
                    <p>Building Coverage: {item.buildingCoverage}</p>
                    <p>Parking Coverage: {item.parkingCoverage}</p>
                    <p>Demolition Cost: {item.demolitionCost}</p>
                    <p>Site Preparation Cost: {item.sitePreparationCost}</p>
                    <p>Neighbourhood Charter: {item.neighbourhoodCharter} </p>
                    <p>
                      Is View To Exterior Important:{" "}
                      {item.isViewToExteriorImportant}
                    </p>
                    <p>Is Desirable View: {item.isDesirableView}</p>
                    <p>
                      Is Acceptable To Planning Boards (Local):{" "}
                      {item.isAcceptableToPlanningBoardsLocal}
                    </p>
                    <p>
                      Is Acceptable To Planning Boards (Regional):{" "}
                      {item.isAcceptableToPlanningBoardsRegional}
                    </p>
                    <p>
                      Is Exposed To Flood Water: {item.isExposedToFloodWater}
                    </p>
                    <p>
                      Is In 100 Year Flood Water: {item.isIn100YearFloodWater}
                    </p>
                    <p>Are Notable Trees Shown: {item.areNotableTreesShown}</p>
                    <p>
                      Are Natural Features Shown: {item.areNaturalFeaturesShown}
                    </p>
                    <p>
                      Will Construction Harm Features:{" "}
                      {item.willConstructionHarmFeatures}
                    </p>
                    <p>Are Site Contours Shown: {item.areSiteContoursShown}</p>
                    <p>
                      Site Contours Description: {item.siteContoursDescription}
                    </p>
                    <p>
                      Are Major Amounts Of Fill Expected:{" "}
                      {item.areMajorAmountsOfFillExpected}
                    </p>
                    <p>
                      Are Major Amounts Of Spoil Expected:{" "}
                      {item.areMajorAmountsOfSpoilExpected}
                    </p>
                    <p>Is Subject To Winds: {item.isSubjectToWinds}</p>
                    <p>Will Create Winds: {item.willCreateWinds}</p>
                    
                    <button
                      onClick={(event) =>
                        handleDeleteData(event, item.inventoryId)
                      }
                    >
                      X
                    </button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="table-btn">
          <InventoryTable inventoryArray={inventoryArray} />

          <button className="refresh-btn" onClick={fetchRecords}>
            Refresh record
          </button>
        </div>
      )}
    </div>
  );
}

export default InventoryManagement;
