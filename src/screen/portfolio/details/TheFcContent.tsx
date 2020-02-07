import React from "react";
import { Grid } from "@material-ui/core";
import { STYLES } from "../../../common";
import { StackIcon } from "../../../components";
import Slider from "react-slick";

import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";

import { sources } from "../../../public/thefc";

import {
  WebPNG,
  HTMLSVG,
  CSSSVG,
  JavaScriptSVG,
  PHPSVG,
  LaravelIcon,
  MySQLSVG,
  AWSSVG,
  GitHubSVG,
  JquerySVG,
  CentOSPNG,
  AndroidSVG,
  JavaSVG
} from "../../../public/tech";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  cssEase: "linear"
};

const TheFcContent = () => {
  const classes = STYLES();

  return (
    <Grid container>
      <Grid className={classes.carouselContainer} item lg={12} md={12} xs={12}>
        <Slider {...settings}>
          {sources.map((item, index) => {
            return (
              <div className={classes.imgContainer} key={index}>
                <img className={classes.img} src={item} alt={"contents"} />
              </div>
            );
          })}
        </Slider>
      </Grid>
      <Grid item xs={12} className={classes.mainTitle}>
        재무디자인
      </Grid>
      <Grid item xs={12} container>
        <Grid item xs={12} container justify="center" alignItems="center">
          <Grid item xs={12} className={classes.stackHead}>
            PlatForm
          </Grid>
          <Grid item xs={12} container justify="center" alignItems="center">
            <StackIcon src={WebPNG} />
            <StackIcon src={AndroidSVG} />
          </Grid>
        </Grid>
        <Grid item xs={12} container justify="center" alignItems="center">
          <Grid item xs={12} className={classes.stackHead}>
            Front-End-Stack
          </Grid>
          <Grid item xs={12} container justify="center" alignItems="center">
            <StackIcon src={HTMLSVG} />
            <StackIcon src={CSSSVG} />
            <StackIcon src={JavaScriptSVG} />
            <StackIcon src={JquerySVG} />
          </Grid>
          <Grid item xs={12} container justify="center" alignItems="center">
            <StackIcon src={JavaSVG} />
          </Grid>
        </Grid>
        <Grid item xs={12} container justify="center" alignItems="center">
          <Grid item xs={12} className={classes.stackHead}>
            Back-End-Stack
          </Grid>
          <Grid item xs={12} container justify="center" alignItems="center">
            <StackIcon src={PHPSVG} />
            <StackIcon src={LaravelIcon} />
          </Grid>
          <Grid item xs={12} container justify="center" alignItems="center">
            <StackIcon src={MySQLSVG} />
            <StackIcon src={AWSSVG} />
            <StackIcon src={CentOSPNG} />
          </Grid>
        </Grid>
        <Grid item xs={12} container justify="center" alignItems="center">
          <Grid item xs={12} className={classes.stackHead}>
            ETC
          </Grid>
          <StackIcon src={GitHubSVG} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TheFcContent;
