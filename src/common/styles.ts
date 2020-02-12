import { makeStyles } from "@material-ui/core/styles";

export const PALETTE = {
  transparent: "transparent",
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
  areaTitle: {
    fontSize: "30px",
    textAlign: "left",
    verticalAlign: "center",
    marginBottom: "25px"
  },
  areaSubTitle: {
    fontSize: "24px",
    textAlign: "left",
    verticalAlign: "center"
  },
  container: {
    height: "100%",
    overflowY: "scroll",
    overflowX: "auto"
  },
  headerContainerOnTop: {
    backgroundColor: "transparent",
    zIndex: 100,
    height: "60px",
    top: 0,
    position: "absolute",
    color: PALETTE.white,
    minWidth: "100%"
  },
  headerContainer: {
    backgroundColor: "rgba(0,0,0,0.5) !important",
    transition: "opacity 0.3s ease",
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
  imageAreaContainer: {
    borderBottom: "1px solid #cfcfcf"
  },
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
    color: PALETTE.white,
    fontSize: 24,
    background: "rgba(0,0,0,0.5) !important"
  },
  imageAreaText: {
    width: "100%",
    height: "100%",
    zIndex: 100,
    backgroundColor: PALETTE.transparent
  },
  imageAreaImage: {
    objectFit: "cover",
    width: "100%"
  },
  introAreaContainer: {
    borderBottom: "1px solid #cfcfcf",
    padding: "15px 30px"
  },
  skillAreaContainer: {
    borderBottom: "1px solid #cfcfcf",
    padding: "15px 30px"
  },
  portfolioContainer: {
    borderBottom: "1px solid #cfcfcf",
    padding: "15px 30px"
  },
  footerContainer: {
    padding: "0 30px",
    height: "300px",
    background: "#000"
  }
});

export const headerStyles = makeStyles({});
