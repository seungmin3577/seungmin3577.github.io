import React from "react";
import { Grid } from "@material-ui/core";
import { layoutStyles } from "../../common";

const Footer = () => {
  const classes = layoutStyles();
  return (
    <Grid container className={classes.footerContainer}>
      <Grid item></Grid>
    </Grid>
  );
};

export default Footer;
