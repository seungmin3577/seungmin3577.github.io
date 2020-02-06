import { makeStyles } from "@material-ui/core/styles";
import { CONSTANT } from "./";

const { LIGHT_BLUE } = CONSTANT.COLOR;

const styles = makeStyles({
  carouselContainer: {
    height: "600px"
  },
  imgContainer: {
    backgroundColor: "#ddd",
    height: "600px"
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "scale-down"
  },
  content: {
    padding: "20px"
  },
  mainTitle: {
    textAlign: "center",
    fontSize: "40px",
    marginBottom: "15px"
  },
  deploySiteFont: {
    textAlign: "center",
    fontSize: "20px"
  },
  contentFont: {
    padding: "15px",
    textAlign: "left",
    fontSize: "16px"
  },
  stackIconContainer: {
    padding: "10px",
    margin: "15px",
    width: "60px",
    height: "60px"
  },
  stackIcon: {
    width: "100%",
    height: "100%",
    objectFit: "contain"
  },
  stackHead: {
    fontSize: "16px",
    textAlign: "left",
    marginTop: "20px"
  }
});

export default styles;
