import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../feature/userSlice";
import "./CostEstimation.css";
import EstimateTable from "./EstimateTable";
import EstimateTableContractor from "./EstimateTableContractor";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import {
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Container,
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
  //console.log(user)
  // const [isMaterialInputVisible, setMaterialInputVisible] = useState(false);
  // const [isLaborInputVisible, setLaborInputVisible] = useState(false);
  // const [isMiscInputVisible, setMiscInputVisible] = useState(false);
  const user = useSelector(selectUser);

   const [selectedItem, setSelectedItem] = useState("");
   const [selectedPrice, setSelectedPrice] = useState("");

   const handleSelect = (event) => {
     const selectedOption = event.target.value;
     setSelectedItem(selectedOption);

     // Find the price based on the selected item
     const item = data.find((item) => item.name === selectedOption);
     if (item) {
       setSelectedPrice(item.price);
     }
   };

  // function checkUser() {
  //   let userType = Object.values(user).includes("Client");
  //   return userType
  // }

  // useEffect(()=> {
  //   checkUser();
  // }, [user])
  // console.log(checkUser)
  //const [materialId, setMaterialId] = useState(1);
  const [materialData, setMaterialData] = useState({
    material: "",
    quantity: "",
    unitPrice: "",
  });

  //const [laborId, setLaborId] = useState(1);
  const [laborData, setLaborData] = useState({
    labor: "",
    hours: "",
    rate: "",
  });

  //const [miscId, setMiscId] = useState(1);
  const [miscData, setMiscData] = useState({
    miscCharges: "",
    hrs_qty: "",
    rate: "",
  });

  const [materialArray, setMaterialArray] = useState([]);
  const [laborArray, setLaborArray] = useState([]);
  const [miscArray, setMiscArray] = useState([]);

  const [records, setRecords] = useState([]);

  const fetchRecords = async () => {
    try {
      const response = await axios.get("http://localhost:5000/costestimation");
      setRecords(response.data);
      setMaterialArray(response.data.materialData);
      setLaborArray(response.data.laborData);
      setMiscArray(response.data.miscData);
    } catch (error) {
      console.error("Failed to fetch records:", error);
    }
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  function generateCustomKey() {
    return uuidv4();
  }
  //console.log(materialArray);

  //Functions for Material
  const handleMaterialInputChange = (e) => {
    const { name, value } = e.target;
    setMaterialData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleMaterialSubmit = async (e) => {
    e.preventDefault();

    console.log(materialData);

    try {
      const { data } = await axios.post(
        "http://localhost:5000/costestimation",
        {
          userEmail: user.email,
          customKeyMaterial: "mtrl_" + generateCustomKey(),
          material: materialData.material,
          quantity: materialData.quantity,
          unitPrice: selectedPrice,
        },
        {
          withCredentials: true,
        }
      );
      fetchRecords();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
    setMaterialData({
      material: "",
      quantity: "",
      unitPrice: "",
    });
  };

  // const handleToggleMaterialInput = () => {
  //   setMaterialInputVisible(!isMaterialInputVisible);
  // };

  //Functions for Labor
  const handleLaborInputChange = (e) => {
    const { name, value } = e.target;
    setLaborData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLaborSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:5000/costestimation",
        {
          userEmail: user.email,
          customKeyLabor: "lbr_" + generateCustomKey(),
          labor: laborData.labor,
          hours: laborData.hours,
          rate: laborData.rate,
        },
        {
          withCredentials: true,
        }
      );
      fetchRecords();
      //window.show(data.m_id);
    } catch (err) {
      console.log(err);
    }
    //setLaborArray((prevArray) => [...prevArray, laborData]);
    setLaborData({ labor: "", hours: "", rate: "" });
  };

  // const handleToggleLaborInput = () => {
  //   setLaborInputVisible(!isLaborInputVisible);
  // };

  //Functions for Misc
  const handleMiscInputChange = (e) => {
    const { name, value } = e.target;
    setMiscData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleMiscSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:5000/costestimation",
        {
          userEmail: user.email,
          customKeyMisc: "misc_" + generateCustomKey(),
          miscCharges: miscData.miscCharges,
          hrs_qty: miscData.hrs_qty,
          rate: miscData.rate,
        },
        {
          withCredentials: true,
        }
      );
      fetchRecords();
      //console.log(data);
    } catch (err) {
      console.log(err);
    }
    setMiscData({
      miscCharges: "",
      hrs_qty: "",
      rate: "",
    });
    //setMiscArray((prevArray) => [...prevArray, miscData]);
  };

  const handleDeleteRequest = async (id) => {
    //console.log(id);
    try {
      const del_result = await axios.delete(
        "http://localhost:5000/costestimation/" + id
      );
      // Perform any necessary updates or fetch the updated records list
      fetchRecords();
      console.log(del_result);
    } catch (error) {
      console.error("Failed to delete record:", error);
    }
  };

  // const handleToggleMiscInput = () => {
  //   setMiscInputVisible(!isMiscInputVisible);
  // };

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

  const data = [
  { name: 'Bricks- B Class', price: '13.50' },
  { name: 'Bricks-Awal (A Class Machine Made)', price: '14.00' },
  { name: 'Bricks-Awwal (A Class)', price: '14.50' },
  { name: 'Bricks-Awwal (A+ Class)', price: '16.50' },
  { name: 'Bricks-Awwal Tiles (A Class)', price: '14.50' },
  { name: 'Bricks-Ballast (Rora)', price: '70.00' },
  { name: 'Bricks-Khanggar (C Class)', price: '12.50' },
  { name: 'Cement-Power OPC', price: '1120.00' },
  { name: 'Cement-Bestway OPC', price: '1135.00' },
  { name: 'Cement-Cherat', price: '1125.00' },
  { name: 'Cement-DG OPC', price: '1135.00' },
  { name: 'Cement-Fauji OPC', price: '1120.00' },
  { name: 'Cement-Flying OPC', price: '1085.00' },
  { name: 'Cement-Lucky OPC', price: '1120.00' },
  { name: 'Cement-Maple Leaf OPC', price: '1170.00' },
  { name: 'Crush-Deena Bajar (1 Inch-1.25 Inches)', price: '95.00' },
  { name: 'Crush-Margalla', price: '147.00' },
  { name: 'Crush-Mix Bajar (Kaccha)', price: '125.00' },
  { name: 'Crush-Sargodha Bajri (4 Sooter Or 15-20mm)', price: '130.00' },
  { name: 'Sand-Chenab', price: '65.00' },
  { name: 'Sand-Ghassu (Slit Sand)', price: '28.00' },
  { name: 'Sand-Ghazi', price: '110.00' },
  { name: 'Sand-Lawrencepur', price: '105.00' },
  { name: 'Sand-Ravi', price: '42.00' },
  { name: 'Steel-Bar 60-Grade AF Steel', price: '268.00' },
  { name: 'Steel-Bar 60-Grade Amreli Steel', price: '272.00' },
  { name: 'Steel-Bar 60-Grade FF Steel', price: '270.00' },
  { name: 'Steel-Bar 60-Grade Ittefaq Steel', price: '268.00' },
  { name: 'Steel-Bar 60-Grade Kamran Steel', price: '270.00' },
  { name: 'Steel-Bar 60-Grade MS Steel', price: '268.00' },
  { name: 'Steel-Bar 60-Grade Mughal Steel', price: '272.00' },
  { name: 'Steel-Bar 60-Grade Saeed Steel', price: '270.00' },
  { name: 'Wood-Ash', price: '12000.00' },
  { name: 'Wood-Chir', price: '2500.00' },
  { name: 'Wood-Diyar', price: '7000.00' },
  { name: 'Wood-Kail', price: '3800.00' },
  { name: 'Wood-Mahogany', price: '9000.00' },
  { name: 'Wood-Partal', price: '3200.00' },
  { name: 'Wood-Red Oak', price: '9000.00' },
  { name: 'Wood-Sapale', price: '11000.00' },
  { name: 'Wood-Yellow Pine', price: '4500.00' },
];


  return (
    <div className="div">
      {user && user.displayName === "Client" ? (
        <>
          <div className="data-input-div">
            <div
              className="input-fields-container"
              style={{ marginBottom: "20px" }}
            >
              <button
                className="material-hide-show"
                onClick={handleOpenMaterialForm}
              >
                Add Material
              </button>

              <Dialog open={showForm} onClose={handleCloseForm}>
                <DialogTitle className={classes.dialogTitle}>
                  Add New Material
                </DialogTitle>
                <form>
                  <DialogContent>
                    <select
                      id="dropdown"
                      value={selectedItem}
                      onChange={handleSelect}
                    >
                      <option value="">-- Select --</option>
                      {data.map((item, index) => (
                        <option key={index} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                    </select>

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
                      label="Unit Price"
                      fullWidth
                      value={selectedPrice}
                      //onChange={(e) => setMaterialData((prev) => ({...prev, [e.target.name]: e.target.value}))}
                      readOnly
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
              <button
                className="material-hide-show"
                onClick={handleOpenLaborForm}
              >
                Add Labor
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
              <button
                className="material-hide-show"
                onClick={handleOpenMiscForm}
              >
                Add Miscellaneous
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

              <button className="refresh-btn" onClick={fetchRecords}>
                Refresh records
              </button>
            </div>
          </div>
          <div className="table-div" style={{ marginTop: "30px" }}>
            <EstimateTable
              materialArray={materialArray}
              laborArray={laborArray}
              miscArray={miscArray}
              handleDeleteRequest={handleDeleteRequest}
            />
          </div>
        </>
      ) : (
        <div className="table-btn">
          <div className="table-div" style={{ marginTop: "30px" }}>
            <EstimateTableContractor
              materialArray={materialArray}
              laborArray={laborArray}
              miscArray={miscArray}
            />
          </div>

          <button className="refresh-btn" onClick={fetchRecords}>
            Refresh records
          </button>
        </div>
      )}
    </div>
  );
}

export default CostEstimation;
