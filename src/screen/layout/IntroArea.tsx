import React from "react";
import { Grid } from "@material-ui/core";
import { layoutStyles } from "../../common";

const IntroArea = () => {
  const classes = layoutStyles();
  return (
    <Grid container className={classes.introAreaContainer}>
      <Grid item xs={12} className={classes.areaTitle}>
        Intro
      </Grid>
    </Grid>
  );
};

export default IntroArea;
