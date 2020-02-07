import React from "react";
import { Grid } from "@material-ui/core";
import { layoutStyles } from "../../common";

const SkillArea = () => {
  const classes = layoutStyles();

  return (
    <Grid container className={classes.skillAreaContainer}>
      <Grid item xs>
        Skill Area
      </Grid>
    </Grid>
  );
};

export default SkillArea;
