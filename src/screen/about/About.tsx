import React from "react";

import { Grid } from "@material-ui/core";
import Typist from "react-typist";

const About = () => {
  const docs = "//github.com/jstejada/react-typist";
  const firstString = "< 👋Hello Wolrd! / >";
  const deletedString = "rld! / >";
  const secondString = "I'm Jeong Seung Min.";
  const thirdString = "I'll be full stack developer!";
  return (
    <Grid container spacing={2}>
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
  );
};

export default About;
