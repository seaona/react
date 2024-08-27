import React, { Component } from "react";
import { Link } from 'react-router-dom';
import classNames from "classnames";
import { withStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { AppBar, CssBaseline, Toolbar } from '@mui/material';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import PaletteMetaForm from "./PaletteMetaForm";

const drawerWidth = 400;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(["margin", "width"], {
           easing: theme.transitions.easing.sharp,
           duration: theme.transitions.duration.leavingScreen
         }),
         flexDirection: "row",
         justifyContent: "center",
         alignItems: "center",
         height: "64px"

    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
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
        }
    },
    buttons: {
        margin: '0 0.5rem',
        "&a": {
            textDecoration: "none"
        }
    },
})
class PaletteFormNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newPaletteName: "",
            formShowing: false,

        }
        this.handleChange = this.handleChange.bind(this);
        this.showForm = this.showForm.bind(this);
        this.hideForm = this.hideForm.bind(this);
     }

    componentDidMount() {
      ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => {
        return this.props.palettes.every(
           ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
         );
      });
    }

    handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        })
    }

    showForm() {
        this.setState({
            formShowing: true
        });
    }

    hideForm() {
        this.setState({
            formShowing: false
        });
    }

    render() {
        const { classes, open, palettes, handleSubmit } = this.props;
        const { newPaletteName } = this.state;
        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    color="default"
                    className={classNames(classes.appBar, {
                        [classes.appBarShift] : open
                    })}
                >
                    <Toolbar disableGutters={!open}>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.props.handleDrawerOpen}
                            className={classNames(classes.menuButton, open && classes.hide)}
                            style={{backgroundColor: "#fff", border: "1px solid #ccc"}}
                        >
                            <IconButton />
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap>
                            Create a Palette
                        </Typography>
                    </Toolbar>
                    <div className={classes.navBtns}>
                            <Link to='/'>
                                <Button variant='contained' color='secondary' className={classes.buttons}>Go Back</Button>
                            </Link>
                            <Button variant="contained" onClick={this.showForm} className={classes.buttons}>
                                Save
                            </Button>
                        </div>
                </AppBar>
                {this.state.formShowing && 
                    <PaletteMetaForm 
                        palettes={palettes}
                        handleSubmit={handleSubmit}
                        hideForm={this.hideForm}
                    />
                }
            </div>
        )
     }
}

export default withStyles(styles, { withTheme: true})(PaletteFormNav);