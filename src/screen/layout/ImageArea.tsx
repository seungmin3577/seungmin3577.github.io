import React from "react";
import { Grid } from "@material-ui/core";
import Typist from "react-typist";
import { layoutStyles } from "../../common";
type Props = {
  src: string;
  alt: string;
  styles?: object;
};

const ImageArea = ({ src, alt, styles = {} }: Props) => {
  const classes = layoutStyles();

  const firstString = "< 👋Hello Wolrd! / >";
  const deletedString = "rld! / >";
  const secondString = "I'm Jeong Seung Min.";
  const thirdString = "I'll be full stack developer!";

  return (
    <Grid container className={classes.imageAreaContainer}>
      <Grid item xs={12} className={classes.imageAreaContent}>
        <img
          src={src}
          alt={alt}
          className={classes.imageAreaImage}
          style={{ ...styles }}
        ></img>
        <div className={classes.imageAreaCover}>
          <Grid
            item
            xs={12}
            container
            className={classes.imageAreaText}
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <Typist
                avgTypingDelay={100}
                startDelay={1000}
                cursor={{ hideWhenDone: true }}
              >
                {firstString}
                <Typist.Backspace count={8} delay={1000} />
                {deletedString}
                <Typist.Delay ms={1250} />
                <br />
                {secondString}
                <Typist.Delay ms={1250} />
                <br />
                {thirdString}
                <Typist.Delay ms={1250} />
                <br />
                Thank you for visiting my site!
              </Typist>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
};

export default ImageArea;
