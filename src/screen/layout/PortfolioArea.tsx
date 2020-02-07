import React from "react";
import { Grid } from "@material-ui/core";
import { layoutStyles } from "../../common";

const PortfolioArea = () => {
  const classes = layoutStyles();

  return (
    <Grid container className={classes.portfolioContainer}>
      <Grid item xs>
        PortfolioArea
      </Grid>
    </Grid>
  );
};

export default PortfolioArea;
