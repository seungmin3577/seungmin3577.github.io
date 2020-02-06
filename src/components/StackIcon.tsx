import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { useStyles } from "../common";

interface StackIcon {
  src: any;
}

const StackIcon = (props: StackIcon) => {
  const classes = useStyles();
  const { src } = props;

  return (
    <Grid item>
      <Paper className={classes.stackIconContainer}>
        <img className={classes.stackIcon} src={src} alt={"Icon"}></img>
      </Paper>
    </Grid>
  );
};

export default StackIcon;
