import React, { Fragment } from "react";

import {
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { AccountBox, School, Build, Code } from "@material-ui/icons";
import { Link } from "react-router-dom";

const NavigationMenu = () => {
  return (
    <Fragment>
      <List>
        <Link
          to={"/about"}
          style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }}
        >
          <ListItem button key={"About"}>
            <ListItemIcon>
              <AccountBox></AccountBox>
            </ListItemIcon>

            <ListItemText primary={"About"} />
          </ListItem>
        </Link>

        <Link
          to={"/career"}
          style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }}
        >
          <ListItem button key={"Career"}>
            <ListItemIcon>
              <School></School>
            </ListItemIcon>

            <ListItemText primary={"Career"} />
          </ListItem>
        </Link>

        <Link
          to={"/portfolio"}
          style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }}
        >
          <ListItem button key={"Portfolio"}>
            <ListItemIcon>
              <Build></Build>
            </ListItemIcon>

            <ListItemText primary={"Portfolio"} />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link
          to={"/contents/frontend"}
          style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }}
        >
          <ListItem button key={"Front-End"}>
            <ListItemIcon>
              <Code></Code>
            </ListItemIcon>
            <ListItemText primary={"Front-End"} />
          </ListItem>
        </Link>

        <Link
          to={"/contents/backend"}
          style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }}
        >
          <ListItem button key={"Back-End"}>
            <ListItemIcon>
              <Code></Code>
            </ListItemIcon>
            <ListItemText primary={"Back-End"} />
          </ListItem>
        </Link>

        <Link
          to={"/contents/database"}
          style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }}
        >
          <ListItem button key={"DataBase"}>
            <ListItemIcon>
              <Code></Code>
            </ListItemIcon>
            <ListItemText primary={"DataBase"} />
          </ListItem>
        </Link>
      </List>
    </Fragment>
  );
};

export default NavigationMenu;
