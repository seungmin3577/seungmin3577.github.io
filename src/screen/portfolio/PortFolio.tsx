import React, { Fragment, useState } from "react";
import { Grid } from "@material-ui/core";
import { CustomCard, CustomModal } from "../../components";
import {
  AbleContent,
  ChabotContent,
  PrimeContent,
  TheFcContent
} from "./details";

import thefc from "../../public/thefc/thefc_logo.png";
import able from "../../public/able/able_logo.png";
import prime from "../../public/bizprime/prime_logo.png";
import chabot from "../../public/chabot/chabot_logo.png";

const PortFolio = () => {
  const [open, setOpen] = useState("");

  const closeHandler = () => {
    setOpen("");
  };

  return (
    <Fragment>
      <Grid container justify={"flex-start"} alignItems={"center"} spacing={2}>
        <Grid item lg={4} sm={6} xs={12}>
          <CustomCard
            img={thefc}
            title={"재무디자인"}
            contents={`기간 : 2017년 4월 - 2018년 1월\n소속회사: 코드브로스\n프로젝트명 : 재무디자인 (Android, Web)\n기술스텍 : HTML5, CSS3, Javascript, JQuery, PHP, MySQL, AWS(EC2), Git, Laravel(5.1), Java, Android`}
            onClick={() => {
              setOpen("thefc");
            }}
          ></CustomCard>
        </Grid>
        <Grid item lg={4} sm={6} xs={12}>
          <CustomCard
            img={able}
            title={"ABLE PEN"}
            contents={`기간 : 2018년 7월 - 2018년 10월\n소속회사: 코드브로스\n프로젝트명 : ABLE PEN(Web)\n기술스텍:  HTML5, CSS3, Javascript, JQuery, PHP, MySQL, AWS(EC2), Git, Laravel(5.1)`}
            onClick={() => {
              setOpen("able");
            }}
          ></CustomCard>
        </Grid>
        <Grid item lg={4} sm={6} xs={12}>
          <CustomCard
            img={chabot}
            title={"CHABOT B2C"}
            contents={`기간 : 2019년 6월 - 2019년 9월\n소속회사: 본컨설팅네트웍스\n프로젝트명 : Chabot(IOS, Android, Web)\n기술스텍:  React, React Native, NodeJS, ExpressJS, GraphQL, AWS(EC2)`}
            onClick={() => {
              setOpen("chabot");
            }}
          ></CustomCard>
        </Grid>
        <Grid item lg={4} sm={6} xs={12}>
          <CustomCard
            img={prime}
            title={"CHABOT Prime"}
            contents={`기간 : 2019년 10월 - 2020년 1월\n소속회사: 본컨설팅네트웍스\n프로젝트명 : Chabot(IOS, ANDROID, Web)\n기술스텍:  React, React Native, NodeJS, ExpressJS, GraphQL, NestJS, CI/CD(Gitlab-ci, Bitrise, AWS-cli), AWS(EC2, S3, RDS, IAM), Docker(MySQL Image, Prisma Image)`}
            onClick={() => {
              setOpen("prime");
            }}
          ></CustomCard>
        </Grid>
      </Grid>
      <CustomModal
        Content={TheFcContent}
        open={open === "thefc"}
        closeHandler={closeHandler}
      />
      <CustomModal
        Content={AbleContent}
        open={open === "able"}
        closeHandler={closeHandler}
      />
      <CustomModal
        Content={ChabotContent}
        open={open === "chabot"}
        closeHandler={closeHandler}
      />
      <CustomModal
        Content={PrimeContent}
        open={open === "prime"}
        closeHandler={closeHandler}
      />
    </Fragment>
  );
};

export default PortFolio;
