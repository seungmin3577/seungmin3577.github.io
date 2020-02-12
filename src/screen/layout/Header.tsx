import React from "react";
import { Grid } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { layoutStyles } from "../../common";

type Props = {
  isScrollTop?: boolean;
};

const Header = (props: Props) => {
  const classes = layoutStyles();
  const { isScrollTop = true } = props;

  return (
    <div
      className={
        isScrollTop ? classes.headerContainerOnTop : classes.headerContainer
      }
    >
      <Grid
        container
        justify={"space-between"}
        alignItems={"center"}
        className={classes.headerContent}
      >
        <Grid item>SeungMinJeong</Grid>
        <Grid item xs container justify="flex-end" alignItems="center"></Grid>
      </Grid>
    </div>
  );
};

export default Header;
