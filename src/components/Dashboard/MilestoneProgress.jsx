import React, { useState } from "react";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Select,
  MenuItem,
  Card,
  CardContent,
  Grid,
} from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      display: "flex",
      minHeight: "100vh",
    },
    card: {
      marginBottom: theme.spacing(3),
    },
    chartCard: {
      position: "relative",
    },
    selectBoxContainer: {
      position: "absolute",
      top: theme.spacing(2),
      right: theme.spacing(2),
    },
    selectBox: {
      // make small select box and align to right
      padding: theme.spacing(0.5),
      paddingRight: theme.spacing(3),
    },
    chartCaption: {
      textAlign: "center",
    },
    tableContainer: {
      maxHeight: 400,
    },
    roundedCell: {
      display: "inline-block",
      padding: theme.spacing(1),
      borderRadius: theme.spacing(1),
      color: theme.palette.common.white,
    },
  })
);

const MilestoneProgress = () => {
  const classes = useStyles();

  const milestones = [
    {
      milestoneName: "Milestone A",
      dueDate: "2023-06-30",
      status: "In Progress",
    },
    {
      milestoneName: "Milestone B",
      dueDate: "2023-07-15",
      status: "Completed",
    },
    {
      milestoneName: "Milestone C",
      dueDate: "2023-08-10",
      status: "Not Started",
    },
    {
      milestoneName: "Milestone D",
      dueDate: "2023-07-31",
      status: "In Progress",
    },
    {
      milestoneName: "Milestone E",
      dueDate: "2023-07-05",
      status: "Completed",
    },
    {
      milestoneName: "Milestone F",
      dueDate: "2023-08-20",
      status: "Not Started",
    },
    {
      milestoneName: "Milestone G",
      dueDate: "2023-09-10",
      status: "In Progress",
    },
    {
      milestoneName: "Milestone H",
      dueDate: "2023-08-05",
      status: "In Progress",
    },
    {
      milestoneName: "Milestone I",
      dueDate: "2023-07-25",
      status: "Completed",
    },
    {
      milestoneName: "Milestone J",
      dueDate: "2023-09-15",
      status: "Not Started",
    },
  ];

  const [selectedMilestone, setSelectedMilestone] = useState("");

  const handleMilestoneChange = (event) => {
    setSelectedMilestone(event.target.value);
  };

  const filteredMilestones = selectedMilestone
    ? milestones.filter(
        (milestone) => milestone.milestoneName === selectedMilestone
      )
    : milestones;

  const milestoneData = filteredMilestones.map((milestone, index) => ({
    milestoneName: milestone.milestoneName,
    value: 1, // Set a constant value of 1 for each milestone
    status: milestone.status,
  }));

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

  // Calculate milestone status count
  const milestoneStatusCount = milestones.reduce((count, milestone) => {
    count[milestone.status] = (count[milestone.status] || 0) + 1;
    return count;
  }, {});

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={8}>
        <Card className={`${classes.card} ${classes.tableCard}`}>
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              Overall Performance
            </Typography>
            <TableContainer className={classes.tableContainer}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Milestone</TableCell>
                    <TableCell>Due Date</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredMilestones.map((milestone, index) => (
                    <TableRow key={index}>
                      <TableCell>{milestone.milestoneName}</TableCell>
                      <TableCell>{milestone.dueDate}</TableCell>
                      <TableCell>{milestone.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card className={`${classes.card} ${classes.chartCard}`}>
          <CardContent>
            <Select
              value={selectedMilestone}
              onChange={handleMilestoneChange}
              variant="outlined"
              className={classes.selectBox}
            >
              <MenuItem value="">All Milestones</MenuItem>
              {milestones.map((milestone, index) => (
                <MenuItem key={index} value={milestone.milestoneName}>
                  {milestone.milestoneName}
                </MenuItem>
              ))}
            </Select>
            <Typography variant="h5" component="h2" gutterBottom>
              Milestone Progress
            </Typography>
            <div className={classes.chartCaption}>
              <Legend layout="vertical" align="right" verticalAlign="middle" />
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={milestoneData}
                  dataKey="value"
                  nameKey="milestoneName"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                >
                  {milestoneData.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default MilestoneProgress;
