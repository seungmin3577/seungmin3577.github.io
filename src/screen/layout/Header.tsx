import React from "react";
import { Grid } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { layoutStyles } from "../../common";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: "0 30px",
      height: "80px",
      maxWidth: "100%"
    }
  })
);

const Header = () => {
  const classes = layoutStyles();

  return (
    <div className={classes.headerContainer}>
      <Grid
        container
        justify={"space-between"}
        alignItems={"center"}
        className={classes.headerContent}
      >
        <Grid item>SeungMinJeong</Grid>
        <Grid item></Grid>
      </Grid>
    </div>
  );
};

export default Header;
