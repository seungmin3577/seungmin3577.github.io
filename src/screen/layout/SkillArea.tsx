import React from "react";
import { Grid } from "@material-ui/core";
import { layoutStyles } from "../../common";
import { StackIcon, CustomLine } from "../../components";

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
  BootstrapPNG,
  StyledComponentPNG,
  MaterialUISVG,
  GitHubSVG,
  JquerySVG
} from "../../public/tech";

const SkillArea = () => {
  const classes = layoutStyles();

  return (
    <Grid container className={classes.skillAreaContainer}>
      <Grid item xs={12} className={classes.areaTitle}>
        Tech Stack
      </Grid>
      <CustomLine title="Platform" />
      <Grid item xs={12} container justify="center">
        <StackIcon src={WebPNG} />
        <StackIcon src={AndroidSVG} />
        <StackIcon src={IOSSVG} />
      </Grid>

      <CustomLine title="Front-End" />
      <Grid item xs={12} container justify="center">
        <StackIcon src={HTMLSVG} />
        <StackIcon src={CSSSVG} />
        <StackIcon src={JavaScriptSVG} />
        <StackIcon src={JquerySVG} />
      </Grid>
      <Grid item xs={12} container justify="center">
        <StackIcon src={MaterialUISVG} />
        <StackIcon src={BootstrapPNG} />
        <StackIcon src={StyledComponentPNG} />
      </Grid>
      <Grid item xs={12} container justify="center">
        <StackIcon src={TypeScriptSVG} />
        <StackIcon src={ReactPNG} />
        <StackIcon src={ReactNativePNG} />
      </Grid>
      <CustomLine title="Back-End" />
      <Grid item xs={12} container justify="center">
        <StackIcon src={NodeSVG} />
        <StackIcon src={ExpressSVG} />
        <StackIcon src={NestSVG} />
      </Grid>
      <CustomLine title="Database" />
      <Grid item xs={12} container justify="center">
        <StackIcon src={MySQLSVG} />
      </Grid>
      <CustomLine title="DataLayer" />
      <Grid item xs={12} container justify="center">
        <StackIcon src={GraphQLPNG} />
        <StackIcon src={ApolloPNG} />
        <StackIcon src={PrismaIcon} />
      </Grid>
      <CustomLine title="VersionControl" />
      <Grid item xs={12} container justify="center">
        <StackIcon src={GitLabSVG} />
        <StackIcon src={GitHubSVG} />
      </Grid>
      <CustomLine title="CooperationTool" />
      <Grid item xs={12} container justify="center">
        <StackIcon src={SlackSVG} />
        <StackIcon src={JandiPNG} />
        <StackIcon src={JiraPNG} />
        <StackIcon src={ConfluencePNG} />
      </Grid>
    </Grid>
  );
};

export default SkillArea;
