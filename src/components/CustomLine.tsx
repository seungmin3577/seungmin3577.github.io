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
    padding: "0 15px"
  }
});

type Props = {
  title: string;
  icons?: any;
  refer?: any;
};

const CustomLine = ({ title, refer }: Props) => {
  const classes = useStyles();

  return (
    <div ref={refer} className={classes.container}>
      <Grid container justify="center" alignItems="center">
        <Grid item className={classes.title}>
          {title}
        </Grid>
        <Grid item xs className={classes.line} />
      </Grid>
    </div>
  );
};

export default CustomLine;
