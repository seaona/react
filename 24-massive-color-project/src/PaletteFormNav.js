import React, { Component } from "react";
import { Link } from 'react-router-dom';
import classNames from "classnames";
import { withStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { AppBar, CssBaseline, Toolbar } from '@mui/material';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

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

    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        flexDirection: "row",
    },
    menuButton: {
        marginRight: 12,
        marginLeft: 20,
    },
    navBtns: {

    }
})
class PaletteFormNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newPaletteName: "",

        }
        this.handleChange = this.handleChange.bind(this);
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

    render() {
        const { classes, open } = this.props;
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
                            <ValidatorForm
                                onSubmit={() => this.props.handleSubmit(newPaletteName)}
                            >
                            <TextValidator
                                label='Palette Name'
                                value={this.state.newPaletteName}
                                name="newPaletteName"
                                onChange={this.handleChange}
                                validators={["required", "isPaletteNameUnique"]}
                                errorMessages={["Enter Palette Name", "Name already taken"]}
                            />
                            <Button 
                                variant='contained'
                                color='primary'
                                type="submit"
                            >
                                Save Palette
                            </Button>
                            <Link to='/'>
                                <Button variant='contained' color='secondary'>Go Back</Button>
                            </Link>
                            </ValidatorForm>
                        </div>
                </AppBar>
            </div>
        )
     }
}

export default withStyles(styles, { withTheme: true})(PaletteFormNav);