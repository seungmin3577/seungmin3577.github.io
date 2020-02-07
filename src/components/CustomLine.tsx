import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: { width: "100%" },
  line: {
    height: 1,
    background: "#cfcfcf"
  },
  title: {
    fontSize: 16,
    padding: "0 15px 0 0 "
  }
});
type Props = {
  title: string;
  icons?: any;
};

const CustomLine = ({ title }: Props) => {
  const classes = useStyles();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.container}
    >
      <Grid item className={classes.title}>
        {title}
      </Grid>
      <Grid item xs className={classes.line} />
    </Grid>
  );
};

export default CustomLine;
