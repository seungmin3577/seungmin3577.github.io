import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { useStyles } from "../../../common";
import { StackIcon } from "../../../components";
import Slider from "react-slick";

import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";

import { sources } from "../../../public/able";

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
  CentOSPNG
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

const AbleModal = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid className={classes.carouselContainer} item lg={12} md={12} xs={12}>
        <Slider {...settings}>
          {sources.map((item, index) => {
            return (
              <div className={classes.imgContainer}>
                <img className={classes.img} src={item} alt={"contents"} />
              </div>
            );
          })}
        </Slider>
      </Grid>
      <Grid item xs={12} container className={classes.content}>
        <Grid item xs={12} className={classes.mainTitle}>
          ABLE PEN (에이블 PEN)
        </Grid>
        <Grid item xs={12} container>
          <Grid
            item
            xs={12}
            container
            justify="flex-start"
            alignItems="flex-start"
          >
            <Grid item xs={12} className={classes.stackHead}>
              PlatForm
            </Grid>
            <Grid
              item
              xs={12}
              container
              justify="flex-start"
              alignItems="flex-start"
            >
              <StackIcon src={WebPNG} />
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            container
            justify="flex-start"
            alignItems="flex-start"
          >
            <Grid item xs={12} className={classes.stackHead}>
              Front-End Stack
            </Grid>
            <StackIcon src={HTMLSVG} />
            <StackIcon src={CSSSVG} />
            <StackIcon src={JavaScriptSVG} />
            <StackIcon src={JquerySVG} />
          </Grid>
          <Grid
            item
            xs={12}
            container
            justify="flex-start"
            alignItems="flex-start"
          >
            <Grid item xs={12} className={classes.stackHead}>
              Back-End Stack
            </Grid>

            <Grid
              item
              xs={12}
              container
              justify="flex-start"
              alignItems="flex-start"
            >
              <StackIcon src={PHPSVG} />
              <StackIcon src={LaravelIcon} />
            </Grid>
            <Grid
              item
              xs={12}
              container
              justify="flex-start"
              alignItems="flex-start"
            >
              <StackIcon src={MySQLSVG} />
              <StackIcon src={AWSSVG} />
              <StackIcon src={CentOSPNG} />
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            container
            justify="flex-start"
            alignItems="flex-start"
          >
            <Grid item xs={12} className={classes.stackHead}>
              ETC
            </Grid>
            <StackIcon src={GitHubSVG} />
          </Grid>
          <Grid item xs={12} container>
            <Grid item xs={12} className={classes.stackHead}>
              Project 기간
            </Grid>
            <Grid item xs={12}>
              <Paper variant="outlined">
                <Grid item xs={12} className={classes.contentFont}>
                  2018. 08. 01 ~ 2018. 10. 31
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Paper variant="outlined" square>
              <Grid item xs={12} className={classes.contentFont}>
                Affiliated Company | 코드브로스(CODE BROS)
              </Grid>
              <Grid item xs={12} className={classes.contentFont}>
                Project Type | Responsive Web
              </Grid>
              <Grid item xs={12} className={classes.contentFont}>
                Project Member | 개발자 1명(본인), 디자이너 1명 총 2명
              </Grid>
              <Grid item xs={12} className={classes.contentFont}>
                Project Detail | 기획단계부터 참여하여 월 2회 정도의 미팅을
                하면서 개발을 진행했습니다.
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AbleModal;
