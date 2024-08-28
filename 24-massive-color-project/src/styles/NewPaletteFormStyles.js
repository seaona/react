import { DRAWER_WIDTH } from "../constants";

const styles = ({
    root: {
      display: "flex"
    },
    drawer: {
      width: DRAWER_WIDTH,
      flexShrink: 0,
      height: "100vh"
    },
    drawerPaper: {
      width: DRAWER_WIDTH,
      display: "flex",
      alignItems: "center"
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      padding: "0 8px",
      justifyContent: "flex-end"
    },
    content: {
      flexGrow: 1,
      height: "calc(100vh - 64px)",
      padding: 0,
      marginTop: "64px",
      marginLeft: -DRAWER_WIDTH
    },
    contentShift: {
      marginLeft: 0
    },
    container: {
      width: "90%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    },
    buttons: {
      width: "100%"
    },
    button: {
      width: "50%"
    },
  });

  export default styles;