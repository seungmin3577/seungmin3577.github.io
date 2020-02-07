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
        <Grid item>SeungMin</Grid>
        <Grid item>깃헙 아이콘, 블로그 아이콘등등...</Grid>
      </Grid>
    </div>
  );
};

export default Header;
