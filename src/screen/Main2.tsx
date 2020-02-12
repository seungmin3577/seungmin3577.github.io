import React, { useEffect, useRef, useState } from "react";
import { Grid, isWidthDown } from "@material-ui/core";
import useWindowScroll from "@react-hook/window-scroll";

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
  const [scrollTop, setScrollTop] = useState(0);

  return (
    <>
      <Grid
        id={"scroll-container"}
        container
        className={classes.container}
        onScroll={e => {
          const element: any = e.target;
          setScrollTop(element.scrollTop);
        }}
      >
        <Grid item xs container>
          <Header isScrollTop={scrollTop === 0} />
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
