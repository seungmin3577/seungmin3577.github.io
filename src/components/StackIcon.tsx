import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { STYLES } from "../common";

interface StackIcon {
  src: any;
}

const StackIcon = (props: StackIcon) => {
  const classes = STYLES();
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
