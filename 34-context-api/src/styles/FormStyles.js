import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    breakpoints: {
      values: {
        sm: 0,
        md: 640,
        lg: 1024,
        xlg: 1200,
      },
    },
});

const styles = {
    main: {
        width: "auto",
        display: "block",
        marginLeft: theme.spacing.unit *3,
        marginRight: theme.spacing.unit *3,
        [theme.breakpoints.up("md")]: {
            width: 400,
            marginLeft: "auto",
            marginRight: "auto",
        }
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%",
        marginTop: theme.spacing.unit * 3,
    },
    submit: {
        marginTop: theme.spacing.uint * 3,
    },
}

export default styles;