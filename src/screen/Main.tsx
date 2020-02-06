import React from "react";
import { Route, Switch } from "react-router-dom";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import {
  Drawer,
  AppBar,
  Toolbar,
  CssBaseline,
  Divider,
  IconButton
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import clsx from "clsx";

import { NavigationMenu } from "../components";
import { About, Career, Portfolio } from "./";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      backgroundColor: "#000"
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginRight: 36
    },
    hide: {
      display: "none"
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap"
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1
      }
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar
    },
    content: {
      flexGrow: 1,
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      marginTop: "64px",
      padding: theme.spacing(2)
    }
  })
);

const Main = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open
            })}
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            <Menu />
          </IconButton>
        </div>
        <Divider />
        <NavigationMenu />
      </Drawer>
      <main className={classes.content}>
        <Switch>
          <Route exact path="/career/about" component={About}></Route>
          <Route exact path="/career/career" component={Career}></Route>
          <Route exact path="/career/portfolio" component={Portfolio}></Route>
        </Switch>
      </main>
    </div>
  );
};
export default Main;
