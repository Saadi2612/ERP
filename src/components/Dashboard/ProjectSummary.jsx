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

const ProjectSummary = ({ projects }) => {
  const classes = useStyles();

  // Extract project data for chart
  const projectNames = projects.map((project) => project.projectName);
  const projectProgress = projects.map((project) => project.progress);
  console.log(projectNames, projectProgress);

  // Define chart data
  const chartData = projectNames.map((name, index) => ({
    name,
    // if projectProgress is a string, convert it to a number else return the 0
    value: Number(projectProgress[index]) || 0,
  }));

  const COLORS = ["#2196f3", "#f44336", "#4caf50", "#ffc107"];

  const [selectedProject, setSelectedProject] = useState("");

  const handleProjectChange = (event) => {
    setSelectedProject(event.target.value);
  };

  const filteredProjects = selectedProject
    ? projects.filter((project) => project.projectName === selectedProject)
    : projects;
  if (Array.isArray(projects) && projects.length === 0) {
    // no projects yet message
    return (
      <p>
        No projects yet. Click <strong>Add New Entry</strong> to add your first
      </p>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8}>
          <Card className={`${classes.card} ${classes.tableCard}`}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Project Summary
              </Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Project Name</TableCell>
                      <TableCell>Project Manager</TableCell>
                      <TableCell>Due Date</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Progress</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredProjects.map((project, index) => (
                      <TableRow key={index}>
                        <TableCell>{project.projectName}</TableCell>
                        <TableCell>{project.projectManager}</TableCell>
                        <TableCell>{project.dueDate}</TableCell>
                        <TableCell>{project.status}</TableCell>
                        <TableCell>
                          <div
                            className={classes.roundedCell}
                            style={{
                              backgroundColor: COLORS[index % COLORS.length],
                            }}
                          >
                            {project.progress}%
                          </div>
                        </TableCell>
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
                value={selectedProject}
                onChange={handleProjectChange}
                variant="outlined"
                className={classes.selectBox}
              >
                <MenuItem value="">All Projects</MenuItem>
                {projects.map((project, index) => (
                  <MenuItem key={index} value={project.projectName}>
                    {project.projectName}
                  </MenuItem>
                ))}
              </Select>
              <Typography variant="h5" component="h2" gutterBottom>
                Project Progress
              </Typography>
              <div className={classes.chartCaption}>
                <Legend
                  layout="vertical"
                  align="right"
                  verticalAlign="middle"
                />
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProjectSummary;
