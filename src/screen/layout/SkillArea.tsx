import React, { useEffect, useState, useRef } from "react";
import { Grid } from "@material-ui/core";
import { layoutStyles } from "../../common";
import { StackIcon, CustomLine } from "../../components";

import {
  AndroidSVG,
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
  BootstrapPNG,
  StyledComponentPNG,
  MaterialUISVG,
  GitHubSVG,
  JquerySVG,
  PHPSVG,
  LaravelIcon
} from "../../public/tech";

const SkillArea = () => {
  const classes = layoutStyles();
  const platformRef = useRef(null);
  const frontEndRef = useRef(null);
  const backEndRef = useRef(null);

  // useEffect(() => {
  //   if (platformRef !== null) {
  //     const platformElement: any = platformRef.current;

  //     platformElement.scrollIntoView({ behavior: "smooth" });
  //     platformElement.addEventListener("scroll", (e: any) => {
  //       console.log("TCL: SkillArea -> e.scrollTop", e.scrollTop);
  //     });
  //   }
  // }, [platformRef]);

  return (
    <Grid container className={classes.skillAreaContainer}>
      <Grid item xs={12} className={classes.areaTitle}>
        Tech Stack
      </Grid>

      <CustomLine refer={frontEndRef} title="Front-End" />
      <Grid item xs={12} container justify="center">
        <StackIcon src={HTMLSVG} />
        <StackIcon src={CSSSVG} />
        <StackIcon src={JavaScriptSVG} />
        <StackIcon src={JquerySVG} />
        <StackIcon src={AndroidSVG} />
      </Grid>
      <Grid item xs={12} container justify="center">
        <StackIcon src={TypeScriptSVG} />
        <StackIcon src={ReactPNG} />
        <StackIcon src={ReactNativePNG} />
        <StackIcon src={ApolloPNG} />
      </Grid>
      <Grid item xs={12} container justify="center">
        <StackIcon src={MaterialUISVG} />
        <StackIcon src={BootstrapPNG} />
        <StackIcon src={StyledComponentPNG} />
      </Grid>
      <CustomLine title="Back-End" />
      <Grid item xs={12} container justify="center">
        <StackIcon src={NodeSVG} />
        <StackIcon src={ExpressSVG} />
        <StackIcon src={NestSVG} />
        <StackIcon src={PHPSVG} />
        <StackIcon src={LaravelIcon} />
      </Grid>
      <Grid item xs={12} container justify="center">
        <StackIcon src={GraphQLPNG} />
        <StackIcon src={PrismaIcon} />
        <StackIcon src={MySQLSVG} />
        <StackIcon src={AWSSVG} />
        <StackIcon src={DockerSVG} />
      </Grid>
      <CustomLine title="CooperationTool" />
      <Grid item xs={12} container justify="center">
        <StackIcon src={SlackSVG} />
        <StackIcon src={JandiPNG} />
        <StackIcon src={JiraPNG} />
        <StackIcon src={ConfluencePNG} />
        <StackIcon src={ZeplinPNG} />
      </Grid>
      <Grid item xs={12} container justify="center">
        <StackIcon src={GitLabSVG} />
        <StackIcon src={GitHubSVG} />
        <StackIcon src={BitRisePNG} />
      </Grid>
    </Grid>
  );
};

export default SkillArea;
