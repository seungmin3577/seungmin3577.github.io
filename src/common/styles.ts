import { makeStyles } from "@material-ui/core/styles";
import zIndex from "@material-ui/core/styles/zIndex";
import { Height } from "@material-ui/icons";

export const PALETTE = {
  black: "#000",
  white: "#fefefe"
};

export const STYLES = makeStyles({
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

export const layoutStyles = makeStyles({
  container: {
    height: "100%",
    overflowY: "scroll",
    overflowX: "auto"
  },
  headerContainer: {
    backgroundColor: "transparent",
    zIndex: 100,
    height: "60px",
    top: 0,
    position: "absolute",
    color: PALETTE.white,
    minWidth: "100%"
  },
  headerContent: {
    height: "100%",
    padding: "0 30px"
  },
  imageAreaContainer: {},
  imageAreaContent: {
    position: "relative",
    background: "rgba(0,0,0,0.5) !important",
    overflow: "hidden"
  },
  imageAreaCover: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    zIndex: 99,
    background: "rgba(0,0,0,0.5) !important"
  },
  imageAreaText: {},
  imageAreaImage: {
    objectFit: "cover",
    width: "100%"
  },
  introAreaContainer: {},
  skillAreaContainer: {},
  portfolioContainer: {},
  footerContainer: {
    padding: "0 30px",
    height: "300px",
    background: "#000"
  }
});

export const headerStyles = makeStyles({});
