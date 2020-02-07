import React from "react";
import { Grid } from "@material-ui/core";
import { layoutStyles } from "../../common";

type Props = {
  src: string;
  alt: string;
  styles?: object;
};

const ImageArea = ({ src, alt, styles = {} }: Props) => {
  const classes = layoutStyles();
  return (
    <Grid container className={classes.imageAreaContainer}>
      <Grid item xs={12} className={classes.imageAreaContent}>
        <img
          src={src}
          alt={alt}
          className={classes.imageAreaImage}
          style={{ ...styles }}
        ></img>
        <div className={classes.imageAreaCover} />
      </Grid>
    </Grid>
  );
};

export default ImageArea;
