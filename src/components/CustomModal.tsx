import React, { Fragment } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Modal } from "@material-ui/core";

interface Props {
  open?: any;
  closeHandler?: Function;
  Content?: React.SFC<Props>;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      height: "90%",
      width: "80%",
      margin: "auto",
      boxShadow: theme.shadows[5],
      overflow: "scroll"
    }
  })
);

const CustomModal: React.SFC<Props> = ({
  open = false,
  closeHandler = () => {},
  Content = () => {
    return <Fragment />;
  }
}) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const handleClose = () => {
    closeHandler();
  };

  return (
    <div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          {/* {content} */}
          <Content></Content>
          <CustomModal />
        </div>
      </Modal>
    </div>
  );
};

export default CustomModal;
