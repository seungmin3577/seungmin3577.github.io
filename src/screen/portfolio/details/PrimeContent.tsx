import React from "react";
import { Grid } from "@material-ui/core";
import Slider from "react-slick";
import { useStyles } from "../../../common";
import { StackIcon } from "../../../components";

import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";

import { sources } from "../../../public/bizprime";

import {
  AndroidSVG,
  IOSSVG,
  WebPNG,
  ReactNativePNG,
  ReactPNG,
  GitLabSVG,
  ApolloPNG,
  ExpressSVG,
  GraphQLPNG,
  NodeSVG,
  HTMLSVG,
  CSSSVG,
  JavaScriptSVG,
  MySQLSVG,
  AWSSVG,
  TypeScriptSVG,
  DockerSVG,
  PrismaIcon,
  ZeplinPNG,
  SlackSVG,
  NestSVG,
  JiraPNG,
  ConfluencePNG,
  JandiPNG,
  BitRisePNG,
  MaterialUISVG
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

const PrimeContent = () => {
  const classes = useStyles();

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
      <Grid xs={12}>
        <Grid item xs={12} className={classes.mainTitle}>
          CHABOT Prime
        </Grid>
        <Grid item xs={12} container justify="center" alignItems="center">
          <Grid item xs={12} className={classes.stackHead}>
            PlatForm
          </Grid>
          <Grid item xs={12} container justify="center" alignItems="center">
            <StackIcon src={WebPNG} />
            <StackIcon src={AndroidSVG} />
            <StackIcon src={IOSSVG} />
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
          </Grid>
          <Grid item xs={12} container justify="center" alignItems="center">
            <StackIcon src={TypeScriptSVG} />
            <StackIcon src={ReactPNG} />
            <StackIcon src={ReactNativePNG} />
            <StackIcon src={ApolloPNG} />
            <StackIcon src={MaterialUISVG} />
          </Grid>
        </Grid>
        <Grid item xs={12} container justify="center" alignItems="center">
          <Grid item xs={12} className={classes.stackHead}>
            Back-End-Stack
          </Grid>
          <Grid item xs={12} container justify="center" alignItems="center">
            <StackIcon src={AWSSVG} />
            <StackIcon src={NodeSVG} />
            <StackIcon src={ExpressSVG} />
            <StackIcon src={NestSVG} />
          </Grid>
          <Grid item xs={12} container justify="center" alignItems="center">
            <StackIcon src={GraphQLPNG} />
            <StackIcon src={PrismaIcon} />
            <StackIcon src={DockerSVG} />
            <StackIcon src={MySQLSVG} />
          </Grid>
        </Grid>
        <Grid item xs={12} container justify="center" alignItems="center">
          <Grid item xs={12} className={classes.stackHead}>
            ETC
          </Grid>
          <Grid item xs={12} container justify="center" alignItems="center">
            <StackIcon src={GitLabSVG} />
            <StackIcon src={BitRisePNG} />
            <StackIcon src={ZeplinPNG} />
          </Grid>
          <Grid item xs={12} container justify="center" alignItems="center">
            <StackIcon src={SlackSVG} />
            <StackIcon src={JandiPNG} />
            <StackIcon src={JiraPNG} />
            <StackIcon src={ConfluencePNG} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PrimeContent;
