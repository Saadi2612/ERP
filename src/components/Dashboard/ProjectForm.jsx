import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
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

const schema = z.object({
  projectName: z.string().nonempty("Project Name is required"),
  projectManager: z.string().nonempty("Project Manager is required"),
  dueDate: z.string().nonempty("Due Date is required"),
  status: z.string().nonempty("Status is required"),
  progress: z.string().nonempty("Progress is required"),
});

const ProjectForm = ({ onSubmit }) => {
  const classes = useStyles();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(schema) });

  const [showForm, setShowForm] = React.useState(false);

  const handleOpenForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleFormSubmit = (data) => {
    const { projectName, projectManager, dueDate, status, progress } = data;
    const project = {
      projectName,
      projectManager,
      dueDate,
      status,
      progress,
    };

    const milestone = {
      projectName,
      milestoneName: "Milestone 1",
      dueDate,
      status,
      progress,
    };

    onSubmit(project, milestone);
    setShowForm(false);
    reset();
  };

  return (
    <>
      <Button
        type="button"
        variant="contained"
        color="primary"
        onClick={handleOpenForm}
      >
        Add New Entry
      </Button>

      <Dialog open={showForm} onClose={handleCloseForm}>
        <DialogTitle className={classes.dialogTitle}>Add New Entry</DialogTitle>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <DialogContent>
            <TextField
              label="Project Name"
              fullWidth
              {...register("projectName")}
              error={!!errors.projectName}
              helperText={errors.projectName?.message}
              className={classes.formField}
            />
            <TextField
              label="Project Manager"
              fullWidth
              {...register("projectManager")}
              error={!!errors.projectManager}
              helperText={errors.projectManager?.message}
              className={classes.formField}
            />
            <TextField
              type="date"
              label="Due Date"
              shrink="true"
              fullWidth
              {...register("dueDate")}
              error={!!errors.dueDate}
              helperText={errors.dueDate?.message}
              className={classes.formField}
            />
            <TextField
              label="Status"
              fullWidth
              {...register("status")}
              error={!!errors.status}
              helperText={errors.status?.message}
              className={classes.formField}
            />
            <TextField
              label="Progress"
              fullWidth
              {...register("progress")}
              error={!!errors.progress}
              helperText={errors.progress?.message}
              className={classes.formField}
            />
          </DialogContent>
          <DialogActions className={classes.dialogActions}>
            <Button type="submit" variant="contained" color="primary">
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
    </>
  );
};

export default ProjectForm;
