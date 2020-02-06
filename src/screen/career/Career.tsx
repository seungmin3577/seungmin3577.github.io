import React from "react";
import { CONSTANT } from "../../common";
import { CustomTable } from "../../components";

import { Grid, Typography } from "@material-ui/core";

const { TITLE, BODY, HEAD_TITLE } = CONSTANT;

const Career = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h2">이력서</Typography>
      </Grid>
      <Grid item xs={12}>
        <CustomTable
          headTitle={HEAD_TITLE.BACKGROUND}
          titleData={TITLE.BACKGROUND}
          bodyData={BODY.BACKGROUND}
        ></CustomTable>
      </Grid>
      <Grid item xs={12}>
        <CustomTable
          headTitle={HEAD_TITLE.CAREER}
          titleData={TITLE.CAREER}
          bodyData={BODY.CAREER}
        ></CustomTable>
      </Grid>
      <Grid item xs={12}>
        <CustomTable
          headTitle={HEAD_TITLE.INTERNATIONAL_ACTIVITY}
          titleData={TITLE.INTERNATIONAL_ACTIVITY}
          bodyData={BODY.INTERNATIONAL_ACTIVITY}
        ></CustomTable>
      </Grid>
      <Grid item xs={12}>
        <CustomTable
          headTitle={HEAD_TITLE.LICENSE}
          titleData={TITLE.LICENSE}
          bodyData={BODY.LICENSE}
        ></CustomTable>
      </Grid>
      <Grid item xs={12}>
        <CustomTable
          headTitle={HEAD_TITLE.STACK}
          titleData={TITLE.STACK}
          bodyData={BODY.STACK}
        ></CustomTable>
      </Grid>
    </Grid>
  );
};

export default Career;
