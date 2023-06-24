import React, { useState, useEffect } from "react";
import ProjectFormButton from "./ProjectForm";
import ProjectSummary from "./ProjectSummary";
import MilestoneProgress from "./MilestoneProgress";
import InventoryTable from "../Services/InventoryTable";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { selectUser } from "../../feature/userSlice";
import axios from "axios";
import {
  Container,
  Grid,
  Button,
  makeStyles,
  createStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      minHeight: "100vh",
      padding: 0,
    },
    sidebar: {
      backgroundColor: "#333",
      textAlign: "center",
      margin: "0 auto",
      color: "#fff",
      padding: theme.spacing(2),
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      width: 300,
    },
    addButton: {
      marginBottom: theme.spacing(2),
      backgroundColor: "#2196f3",
      color: "#fff",
      "&:hover": {
        backgroundColor: "#1976d2",
      },
    },
    link: {
      color: "#fff",
      marginBottom: theme.spacing(1),
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline",
      },
    },
    content: {
      padding: theme.spacing(2),
    },
  })
);

const Dashboard = () => {
  const user = useSelector(selectUser);

  const [formEntries, setFormEntries] = useState([]);

  const [clientEmail, setClientEmail] = useState("");
  const [category, setCategory] = useState("");
  const [taskName, setTaskName] = useState("");
  const [vendorName, setVendorName] = useState("");
  const [laborHours, setLaborHours] = useState(0);
  const [laborRate, setLaborRate] = useState(0);
  const [materialUnits, setMaterialUnits] = useState(0);
  const [materialRate, setMaterialRate] = useState(0);
  const [fixedCost, setFixedCost] = useState(0);
  const [budgetAmount, setBudgetAmount] = useState(0);
  const [actualAmount, setActualAmount] = useState(0);

  const classes = useStyles();
  const [showForm, setShowForm] = useState(false);
  const [projects, setProjects] = useState([]);
  const [milestones, setMilestones] = useState([]);

  const [records, setRecords] = useState([]);

  const fetchProjectRecords = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/projectmanagement"
      );
      setRecords(response.data);
      //console.log(response.data);
      setFormEntries(response.data.projectFormData);
    } catch (error) {
      console.error("Failed to fetch records:", error);
    }
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  const handleFormSubmit = (project, milestone) => {
    console.log(project, "HEHEH");
    setProjects([...projects, project]);
    setMilestones([...milestones, milestone]);
    setShowForm(false);
  };

  const [showInventory, setShowInventory] = useState(false);

  const toggleShowInventory = () => {
    setShowInventory(!showInventory);
  };

  const [showProjectForm, setShowProjectForm] = useState(false);

  const toggleShowProjectForm = () => {
    setShowProjectForm(!showProjectForm);
  };

  const [inventoryArray, setInventoryArray] = useState([]);

  const fetchRecords = async () => {
    try {
      const response = await axios.get("http://localhost:5000/dashboard");
      //setRecords(response.data);
      //console.log(response.data);
      setInventoryArray(response.data.inventoryData);
    } catch (error) {
      console.error("Failed to fetch records:", error);
    }
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  // Calculate the sum of budget amount, actual amount, and under/over
  const totalBudget = formEntries.reduce(
    (sum, entry) => sum + entry.budgetAmount,
    0
  );
  const totalActual = formEntries.reduce(
    (sum, entry) => sum + entry.actualAmount,
    0
  );
  const totalUnderOver = totalBudget - totalActual;

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3} className={classes.sidebar}>
          <div className={classes.sidebar}>
            <ProjectFormButton onSubmit={handleFormSubmit} />

            <Button variant="contained" onClick={toggleShowInventory}>
              {showInventory ? "Hide Inventory" : "Show Inventory"}
            </Button>

            <Button variant="contained" onClick={toggleShowProjectForm}>
              {showProjectForm ? "Hide Project Form" : "Show Project Form"}
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} md={9} className={classes.content}>
          <div className={classes.content}>
            <ProjectSummary projects={projects} />
            {/* <MilestoneProgress milestones={milestones} /> */}

            {showInventory ? (
              <div>
                <InventoryTable inventoryArray={inventoryArray} />
                <button className="refresh-btn" onClick={fetchRecords}>
                  Refresh Inventory
                </button>
              </div>
            ) : null}

            {showProjectForm ? (
              <>
                <div className="total-container">
                  <div className="total-item">
                    <label>Total Budget:</label>
                    <span>${totalBudget}</span>
                  </div>
                  <div className="total-item">
                    <label>Total Actual:</label>
                    <span>${totalActual}</span>
                  </div>
                  <div className="total-item">
                    <label>Total Under/Over:</label>
                    <span>${totalUnderOver}</span>
                  </div>
                </div>
                {/* Display the form entries in a table */}
                {formEntries.length > 0 && (
                  <table className="table table-striped table-hover">
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Client's Email</th>
                        <th scope="col">Category</th>
                        <th scope="col">Task Name</th>
                        <th scope="col">Vendor/Contractor</th>
                        <th scope="col">Labor Hours</th>
                        <th scope="col">Labor Rate</th>
                        <th scope="col">Material Units</th>
                        <th scope="col">Material Rate</th>
                        <th scope="col">Fixed Cost</th>
                        <th scope="col">Budget Amount</th>
                        <th scope="col">Actual Amount</th>
                        <th scope="col">Under/Over</th>
                      </tr>
                    </thead>
                    <tbody>
                      {formEntries.map((entry, index) => (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <td>{entry.clientEmail}</td>
                          <td>{entry.category}</td>
                          <td>{entry.taskName}</td>
                          <td>{entry.vendorName}</td>
                          <td>{entry.laborHours}</td>
                          <td>{entry.laborRate}</td>
                          <td>{entry.materialUnits}</td>
                          <td>{entry.materialRate}</td>
                          <td>{entry.fixedCost}</td>
                          <td>{entry.budgetAmount}</td>
                          <td>{entry.actualAmount}</td>
                          <td>{entry.underOver}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
                <button
                  className="btn btn-primary"
                  onClick={fetchProjectRecords}
                >
                  Refresh Records
                </button>
              </>
            ) : null}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
