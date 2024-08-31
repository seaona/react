import { DRAWER_WIDTH } from "../constants";
import sizes from './sizes';

const styles = theme => ({
    root: {
        display: 'flex',
        backgroundColor: 'red',
        '& header' : {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "space-between",
            height: "64px",
            padding: "0 2rem",
            paddingLeft: "25rem",
            "& a": {
            textDecoration: "none",
            },
        },
    },
    hide: {
        display: 'none !important',
    },
    appBar: {
        transition: theme.transitions.create(["margin", "width"], {
           easing: theme.transitions.easing.sharp,
           duration: theme.transitions.duration.leavingScreen
         }),

         height: "64px",

    },
    appBarShift: {
        width: `calc(100% - ${DRAWER_WIDTH}px)`,
        marginLeft: `${DRAWER_WIDTH} !important`,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
    },
    menuButton: {
        marginRight: 12,
        marginLeft: 20,
    },
    navBtns: {
        marginRight: '1rem',
        "&a": {
            textDecoration: "none",
        },
        [sizes.down("xs")]: {
            marginRight: 0,
        }
    },
    buttons: {
        margin: '0 0.5rem',
        "&a": {
            textDecoration: "none"
        },
        [sizes.down("xs")]: {
            margin: "0 0.2rem",
            padding: "0.3rem",
        }
    },
})

export default styles;