import React, {useState} from "react";
import './InventoryTable.css';

const InventoryTable = ({inventoryArray}) => {

  const [rowSpan, setRowSpan] = useState(2);

  return (
    <div>
      <table className="inv-table">
        <tbody>
          <tr>
            <th rowSpan={2} colSpan={2}>ITEM</th>
          </tr>
          <tr>
            {inventoryArray.map((data, index) => (
              <th key={index}>SITE {index + 1}</th>
            ))}
          </tr>
          <tr>
            <td colSpan={2}>Minimum site area acceptable</td>
            {inventoryArray.map((data, index) => (
              <td key={index}>{data.minimumSiteArea}</td>
            ))}
          </tr>
          <tr>
            <td colSpan={2}>Site area</td>
            {inventoryArray.map((data, index) => (
              <td key={index}>{data.siteArea}</td>
            ))}
          </tr>
          <tr>
            <td rowSpan={4}>Estimated coverage</td>
          </tr>
          <tr>
            <td>a. Building</td>
            {inventoryArray.map((data, index) => (
              <td key={index}>{data.buildingCoverage}</td>
            ))}
          </tr>
          <tr>
            <td>b. Parking</td>
            {inventoryArray.map((data, index) => (
              <td key={index}>{data.parkingCoverage}</td>
            ))}
          </tr>
          <tr>
            <td>c. Total</td>
            {inventoryArray.map((data, index) => (
              <td key={index}>
                {parseInt(data.buildingCoverage) +
                  parseInt(data.parkingCoverage)}
              </td>
            ))}
          </tr>
          <tr>
            <td rowSpan={3}>Open Space</td>
          </tr>
          <tr>
            <td>a. Total</td>
            {inventoryArray.map((data, index) => (
              <td key={index}>
                {parseInt(data.siteArea) -
                  (parseInt(data.buildingCoverage) +
                    parseInt(data.parkingCoverage))}
              </td>
            ))}
          </tr>
          <tr>
            <td>b. Percent</td>
            {inventoryArray.map((data, index) => (
              <td key={index}>
                {(
                  ((parseInt(data.siteArea) -
                    (parseInt(data.buildingCoverage) +
                      parseInt(data.parkingCoverage))) /
                    parseInt(data.siteArea)) *
                  100
                ).toFixed(2) + "%"}
              </td>
            ))}
          </tr>
          <tr>
            <td rowSpan={3}>Cost</td>
          </tr>
          <tr>
            <td>a. Demolition</td>
            {inventoryArray.map((data, index) => (
              <td key={index}>{data.demolitionCost}</td>
            ))}
          </tr>
          <tr>
            <td>b. Site Preparation</td>
            {inventoryArray.map((data, index) => (
              <td key={index}>{data.sitePreparationCost}</td>
            ))}
          </tr>
          <tr>
            <td colSpan={2}>Specified neighbourhood charter</td>
            {inventoryArray.map((data, index) => (
              <td key={index}>{data.neighbourhoodCharter}</td>
            ))}
          </tr>
          <tr>
            <td colSpan={2}>Is view to exterior important in this project</td>
            {inventoryArray.map((data, index) => (
              <td key={index}>{data.isViewToExteriorImportant}</td>
            ))}
          </tr>
          <tr>
            <td colSpan={2}>Is view at this site a desirable one</td>
            {inventoryArray.map((data, index) => (
              <td key={index}>{data.isDesirableView}</td>
            ))}
          </tr>

          <tr>
            <td rowSpan={3}>
              Is project acceptable to planning boards and agencies
            </td>
          </tr>
          <tr>
            <td>Local</td>
            {inventoryArray.map((data, index) => (
              <td key={index}>{data.isAcceptableToPlanningBoardsLocal}</td>
            ))}
          </tr>
          <tr>
            <td>Regional</td>
            {inventoryArray.map((data, index) => (
              <td key={index}>{data.isAcceptableToPlanningBoardsRegional}</td>
            ))}
          </tr>
          <tr>
            <td colSpan={2}>Is area exposed to flood water</td>
            {inventoryArray.map((data, index) => (
              <td key={index}>{data.isExposedToFloodWater}</td>
            ))}
          </tr>
          <tr>
            <td colSpan={2}>Is area in 100 year flood water</td>
            {inventoryArray.map((data, index) => (
              <td key={index}>{data.isIn100YearFloodWater}</td>
            ))}
          </tr>
          <tr>
            <td colSpan={2}>
              Are trees of notable quality and/or size shown on existing site
              plans
            </td>
            {inventoryArray.map((data, index) => (
              <td key={index}>{data.areNotableTreesShown}</td>
            ))}
          </tr>
          <tr>
            <td colSpan={2}>
              Are significant natural features (rock, outcroppings, boulders,
              streams, etc.) shown on existing site plans
            </td>
            {inventoryArray.map((data, index) => (
              <td key={index}>{data.areNaturalFeaturesShown}</td>
            ))}
          </tr>
          <tr>
            <td colSpan={2}>
              Will proposed construction harm existing significant trees,
              vegetation or natural features
            </td>
            {inventoryArray.map((data, index) => (
              <td key={index}>{data.willConstructionHarmFeatures}</td>
            ))}
          </tr>
          <tr>
            <td rowSpan={3}>Site contours</td>
          </tr>
          <tr>
            <td>
              Are they shown at minimum 5 foot intervals on existing plans
            </td>
            {inventoryArray.map((data, index) => (
              <td key={index}>{data.areSiteContoursShown}</td>
            ))}
          </tr>
          <tr>
            <td>Describe (level, rolling, steeply sloped, etc.)</td>
            {inventoryArray.map((data, index) => (
              <td key={index}>{data.siteContoursDescription}</td>
            ))}
          </tr>
          <tr>
            <td colSpan={2}>Are major amounts of fill likely to be required</td>
            {inventoryArray.map((data, index) => (
              <td key={index}>{data.areMajorAmountsOfFillExpected}</td>
            ))}
          </tr>
          <tr>
            <td colSpan={2}>
              Are major amounts of spoil likely to result from construction
            </td>
            {inventoryArray.map((data, index) => (
              <td key={index}>{data.areMajorAmountsOfSpoilExpected}</td>
            ))}
          </tr>
          <tr>
            <td colSpan={2}>
              Will project be subject to winds created by tall buildings
            </td>
            {inventoryArray.map((data, index) => (
              <td key={index}>{data.isSubjectToWinds}</td>
            ))}
          </tr>
          <tr>
            <td colSpan={2}>
              Will project create winds by destroying hills or trees by
              proximity to other tall buildings, etc.
            </td>
            {inventoryArray.map((data, index) => (
              <td key={index}>{data.willCreateWinds}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;
