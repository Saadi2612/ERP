// import React, { useEffect, useState } from "react";
// import "./EstimateTable.css";
// import { calculateNewValue } from "@testing-library/user-event/dist/utils";
// import Table from "react-bootstrap/Table";
// const EstimateTable = ({ materialArray, laborArray, miscArray }) => {
//   const data = [
//     {
//       id: 1,
//       column1: "Row 1",
//       column2: "Data 1",
//       column3: "Data 2",
//       column4: "Data 3",
//     },
//     {
//       id: 2,
//       column1: "Row 2",
//       column2: "Data 4",
//       column3: "Data 5",
//       column4: "Data 6",
//     },
//     {
//       id: 3,
//       column1: "Row 3",
//       column2: "Data 7",
//       column3: "Data 8",
//       column4: "Data 9",
//     },

//     // Add more rows as needed...
//   ];

//   const [totalMaterial, setTotalMaterial] = useState(0);
//   const [totalLabor, setTotalLabor] = useState(0);
//   const [totalMisc, setTotalMisc] = useState(0);

//   useEffect(() => {
//     calculateTotalMaterial();
//   }, [materialArray]);

//   const calculateTotalMaterial = () => {
//     let sum = 0;
//     for (let index = 0; index < materialArray.length; index++) {
//       const { quantity, unitPrice } = materialArray[index];
//       const amount = quantity * unitPrice;
//       sum += amount;
//     }
//     setTotalMaterial(sum);
//   };

//   useEffect(() => {
//     calculateTotalLabor();
//   }, [laborArray]);

//   const calculateTotalLabor = () => {
//     let sum = 0;
//     for (let index = 0; index < laborArray.length; index++) {
//       const { hours, rate } = laborArray[index];
//       const amount = hours * rate;
//       sum += amount;
//     }
//     setTotalLabor(sum);
//   };

//   useEffect(() => {
//     calculateTotalMisc();
//   }, [miscArray]);

//   const calculateTotalMisc = () => {
//     let sum = 0;
//     for (let index = 0; index < miscArray.length; index++) {
//       const { hrs_qty, rate } = miscArray[index];
//       const amount = hrs_qty * rate;
//       sum += amount;
//     }
//     setTotalMisc(sum);
//   };

//   return (
//     <div className="tables-container" style={{ backgroundColor: "white" }}>
//       <table className="table">
//         <thead>
//           <tr className="heading-row">
//             <th className="wide-column">Material</th>
//             <th>Quantity</th>
//             <th>Unit Price</th>
//             <th>Total</th>
//           </tr>
//         </thead>
//         <tbody>
//           {materialArray.map((row) => (
//             <tr>
//               <td>{row.material}</td>
//               <td>{row.quantity}</td>
//               <td>{row.unitPrice}</td>
//               <td>{eval(row.quantity * row.unitPrice)}</td>
//             </tr>
//           ))}
//           <tr>
//             <td className="total-field" colSpan={3}>
//               Total Material
//             </td>
//             <td>{totalMaterial}</td>
//           </tr>
//         </tbody>
//       </table>

//       <table className="table">
//         <thead>
//           <tr className="heading-row">
//             <th className="wide-column">Labor</th>
//             <th>Hours</th>
//             <th>Rate</th>
//             <th>Total</th>
//           </tr>
//         </thead>
//         <tbody>
//           {laborArray.map((row) => (
//             <tr>
//               <td>{row.labor}</td>
//               <td>{row.hours}</td>
//               <td>{row.rate}</td>
//               <td>{eval(row.hours * row.rate)}</td>
//             </tr>
//           ))}
//           <tr>
//             <td className="total-field" colSpan={3}>
//               Total Labor
//             </td>
//             <td>{totalLabor}</td>
//           </tr>
//         </tbody>
//       </table>

//       <table className="table">
//         <thead>
//           <tr className="heading-row">
//             <th className="wide-column">Miscellaneous Charges</th>
//             <th>Hours / Quantity</th>
//             <th>Rate</th>
//             <th>Total</th>
//           </tr>
//         </thead>
//         <tbody>
//           {miscArray.map((row) => (
//             <tr>
//               <td>{row.miscCharges}</td>
//               <td>{row.hrs_qty}</td>
//               <td>{row.rate}</td>
//               <td>{eval(row.hrs_qty * row.rate)}</td>
//             </tr>
//           ))}
//           <tr>
//             <td className="total-field" colSpan={3}>
//               Total Miscellaneous Charges
//             </td>
//             <td>{totalMisc}</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default EstimateTable;
import React, { useEffect, useState } from "react";
import "./EstimateTable.css";
import Table from "react-bootstrap/Table";
import axios from "axios";

const EstimateTable = ({
  materialArray,
  laborArray,
  miscArray,
  handleDeleteRequest,
}) => {
  const [totalMaterial, setTotalMaterial] = useState(0);
  const [totalLabor, setTotalLabor] = useState(0);
  const [totalMisc, setTotalMisc] = useState(0);

  useEffect(() => {
    calculateTotalMaterial();
  }, [materialArray]);

  const calculateTotalMaterial = () => {
    let sum = 0;
    for (let index = 0; index < materialArray.length; index++) {
      const { quantity, unitPrice } = materialArray[index];
      const amount = quantity * unitPrice;
      sum += amount;
    }
    setTotalMaterial(sum);
  };

  useEffect(() => {
    calculateTotalLabor();
  }, [laborArray]);

  const calculateTotalLabor = () => {
    let sum = 0;
    for (let index = 0; index < laborArray.length; index++) {
      const { hours, rate } = laborArray[index];
      const amount = hours * rate;
      sum += amount;
    }
    setTotalLabor(sum);
  };

  useEffect(() => {
    calculateTotalMisc();
  }, [miscArray]);

  const calculateTotalMisc = () => {
    let sum = 0;
    for (let index = 0; index < miscArray.length; index++) {
      const { hrs_qty, rate } = miscArray[index];
      const amount = hrs_qty * rate;
      sum += amount;
    }
    setTotalMisc(sum);
  };

  // const handleDeleteClick = (id) => {
  //   handleDelete(id);
  // }

  return (
    <div className="tables-container" style={{ backgroundColor: "white" }}>
      <Table
        className="table"
        striped
        bordered
        hover
        style={{ marginBottom: "3rem" }}
      >
        <thead>
          <tr className="heading-row">
            <th>User Email</th>
            <th className="wide-column">Material</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {materialArray.map((row, index) => (
            <tr key={index}>
              <td>{row.userEmail}</td>
              <td>{row.material}</td>
              <td>{row.quantity}</td>
              <td>{row.unitPrice}</td>
              <td>{row.quantity * row.unitPrice}</td>
              <td onClick={() => handleDeleteRequest(row.customKeyMaterial)}>
                Delete
              </td>
            </tr>
          ))}
          <tr>
            <td className="total-field" colSpan={3}>
              Total Material
            </td>
            <td>{totalMaterial}</td>
          </tr>
        </tbody>
      </Table>

      <Table
        className="table"
        striped
        bordered
        hover
        style={{ marginBottom: "3rem" }}
      >
        <thead>
          <tr className="heading-row">
            <th>User Email</th>
            <th className="wide-column">Labor</th>
            <th>Hours</th>
            <th>Rate</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {laborArray.map((row, index) => (
            <tr key={index}>
              <td>{row.userEmail}</td>
              <td>{row.labor}</td>
              <td>{row.hours}</td>
              <td>{row.rate}</td>
              <td>{row.hours * row.rate}</td>
              <td onClick={() => handleDeleteRequest(row.customKeyLabor)}>
                Delete
              </td>
            </tr>
          ))}
          <tr>
            <td className="total-field" colSpan={3}>
              Total Labor
            </td>
            <td>{totalLabor}</td>
          </tr>
        </tbody>
      </Table>

      <Table className="table" striped bordered hover>
        <thead>
          <tr className="heading-row">
            <th>User Email</th>
            <th className="wide-column">Miscellaneous Charges</th>
            <th>Hours/Quantity</th>
            <th>Rate</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {miscArray.map((row, index) => (
            <tr key={index}>
              <td>{row.userEmail}</td>
              <td>{row.miscCharges}</td>
              <td>{row.hrs_qty}</td>
              <td>{row.rate}</td>
              <td>{row.hrs_qty * row.rate}</td>
              <td onClick={() => handleDeleteRequest(row.customKeyMisc)}>
                Delete
              </td>
            </tr>
          ))}
          <tr>
            <td className="total-field" colSpan={3}>
              Total Miscellaneous Charges
            </td>
            <td>{totalMisc}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default EstimateTable;
