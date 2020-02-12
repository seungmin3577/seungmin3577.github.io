import React, { useState } from "react";
import { Grid, Paper, Tabs, Tab } from "@material-ui/core";
import { layoutStyles } from "../../common";
import { CSSTransition, Transition } from "react-transition-group";

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
  unmounted: { opacity: 0 }
};

const PortfolioArea = () => {
  const classes = layoutStyles();
  const [inProp, setInProp] = useState(false);
  const [value, setValue] = useState(0);

  const tabHandler = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  console.log("TCL: value", value);

  return (
    <Grid container className={classes.portfolioContainer}>
      <Grid item xs={12} className={classes.areaTitle}>
        Portfolio
      </Grid>
      <Grid item xs={12}>
        <Tabs
          value={value}
          onChange={tabHandler}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Personal" />
          <Tab label="Group" />
          <Tab label="Company" />
        </Tabs>
      </Grid>
      {/* <Grid item xs>
        <div>
          <Transition in={inProp} timeout={500}>
            {state => (
              <div
                style={{
                  ...defaultStyle,
                  ...transitionStyles[state]
                }}
              >
                I'm a fade Transition!
              </div>
            )}
          </Transition>
          <button onClick={() => setInProp(true)}>Click to Enter</button>
        </div>
      </Grid> */}
    </Grid>
  );
};

export default PortfolioArea;
