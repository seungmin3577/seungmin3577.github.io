import React from "react";
import { Grid } from "@material-ui/core";

import {
  Header,
  Footer,
  ImageArea,
  IntroArea,
  SkillArea,
  PortfolioArea
} from "./layout";
import { layoutStyles } from "../common";
import Background from "../public/home.png";

const Main2 = () => {
  const classes = layoutStyles();
  return (
    <>
      <Grid container className={classes.container}>
        <Grid item xs container>
          <Header />
          <ImageArea
            src={Background}
            alt="이미지"
            styles={{ objectFit: "contain" }}
          />
          <IntroArea />
          <SkillArea />
          <PortfolioArea />
          <Footer />
        </Grid>
      </Grid>
    </>
  );
};

export default Main2;
