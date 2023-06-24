import React, { useState, useEffect } from "react";
import "./ProjectManagement.css";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { selectUser } from "../../feature/userSlice";

function ProjectManagement() {

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


  const [records, setRecords] = useState([]);

  const fetchRecords = async () => {
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

  function generateShortUUID() {
    const fullUUID = uuidv4();
    const shortUUID = fullUUID.substring(0, 12); // Truncate to 12 characters
    return shortUUID;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Check if any input field is empty
    if (
      !clientEmail ||
      !taskName ||
      !vendorName ||
      laborHours === 0 ||
      laborRate === 0 ||
      materialUnits === 0 ||
      materialRate === 0 ||
      fixedCost === 0 ||
      budgetAmount === 0 ||
      actualAmount === 0
    ) {
      alert("Please fill in all the fields.");
      return;
    } else {
      // Calculate the Under/Over value
      const underOver = budgetAmount - actualAmount;
      try {
        const { data } = await axios.post(
          "http://localhost:5000/projectmanagement",
          {
            pFormId: generateShortUUID(),
            userEmail: user.email,
            clientEmail: clientEmail,
            category: category,
            taskName: taskName,
            vendorName: vendorName,
            laborHours: laborHours,
            laborRate: laborRate,
            materialUnits: materialUnits,
            materialRate: materialRate,
            fixedCost: fixedCost,
            budgetAmount: budgetAmount,
            actualAmount: actualAmount,
            underOver: underOver,
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
    }

    // Create a new entry object with the Under/Over value
    // const newEntry = {
    //   category,
    //   taskName,
    //   vendorName,
    //   laborHours,
    //   laborRate,
    //   materialUnits,
    //   materialRate,
    //   fixedCost,
    //   budgetAmount,
    //   actualAmount,
    //   underOver,
    // };

    // Update the form entries array
    // setFormEntries((prevEntries) => [...prevEntries, newEntry]);

    // Clear the form inputs
    setClientEmail("");
    setCategory("");
    setTaskName("");
    setVendorName("");
    setLaborHours(0);
    setLaborRate(0);
    setMaterialUnits(0);
    setMaterialRate(0);
    setFixedCost(0);
    setBudgetAmount(0);
    setActualAmount(0);
  };
   // Calculate the sum of budget amount, actual amount, and under/over
   const totalBudget = formEntries.reduce((sum, entry) => sum + entry.budgetAmount, 0);
   const totalActual = formEntries.reduce((sum, entry) => sum + entry.actualAmount, 0);
   const totalUnderOver = totalBudget - totalActual;
 
  return (
    <div style={{ backgroundColor: "#ACBCFF" }}>
    {user && user.displayName === "Contractor" ? (
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
        <button className="btn btn-primary" onClick={fetchRecords}>
          Refresh Records
        </button>
        <h2>Project Management Form</h2>
        <form className="form-group form-container" onSubmit={handleSubmit}>
          <div>
            <label>Client's Email:</label>
            <input
              type="email"
              className="form-control"
              value={clientEmail}
              onChange={(e) => setClientEmail(e.target.value)}
            />
          </div>

          <div className="">
            <label>Category</label>
            <select
              className="form-control"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>--Select--</option>
              <option value="General Requirements">General Requirements</option>
              <option value="Site Prep">Site Prep</option>
              <option value="On-Site Water/Sewer">On-Site Water/Sewer</option>
              <option value="Utilities">Utilities</option>
            </select>
          </div>

          <div>
            <label>Task Name:</label>
            <input
              type="text"
              className="form-control"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
          </div>
          <div>
            <label>Vendor/Contractor:</label>
            <input
              type="text"
              className="form-control"
              value={vendorName}
              onChange={(e) => setVendorName(e.target.value)}
            />
          </div>
          <div>
            <label>Labor Hours:</label>
            <input
              type="number"
              className="form-control"
              value={laborHours}
              onChange={(e) => setLaborHours(parseFloat(e.target.value))}
            />
          </div>
          <div>
            <label>Labor Rate:</label>
            <input
              type="number"
              className="form-control"
              value={laborRate}
              onChange={(e) => setLaborRate(parseFloat(e.target.value))}
            />
          </div>
          <div>
            <label>Material Units:</label>
            <input
              type="number"
              className="form-control"
              value={materialUnits}
              onChange={(e) => setMaterialUnits(parseFloat(e.target.value))}
            />
          </div>
          <div>
            <label>Material Rate:</label>
            <input
              type="number"
              className="form-control"
              value={materialRate}
              onChange={(e) => setMaterialRate(parseFloat(e.target.value))}
            />
          </div>
          <div>
            <label>Fixed Cost:</label>
            <input
              type="number"
              className="form-control"
              value={fixedCost}
              onChange={(e) => setFixedCost(parseFloat(e.target.value))}
            />
          </div>
          <div>
            <label>Budget Amount:</label>
            <input
              type="number"
              className="form-control"
              value={budgetAmount}
              onChange={(e) => setBudgetAmount(parseFloat(e.target.value))}
            />
          </div>
          <div>
            <label>Actual Amount:</label>
            <input
              type="number"
              className="form-control"
              value={actualAmount}
              onChange={(e) => setActualAmount(parseFloat(e.target.value))}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </> ) : (
        <>
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
        <button className="btn btn-primary" onClick={fetchRecords}>
          Refresh Records
        </button>
        </>
      ) }
    </div>
  );
}

export default ProjectManagement;
