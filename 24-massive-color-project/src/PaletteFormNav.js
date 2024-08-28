import React, { Component } from "react";
import { Link } from 'react-router-dom';
import classNames from "classnames";
import { withStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { AppBar, CssBaseline, Toolbar } from '@mui/material';
import PaletteMetaForm from "./PaletteMetaForm";
import styles from './styles/PaletteFormNavStyles'

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
                        <ChevronRightIcon
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.props.handleDrawerOpen}
                            className={classNames(classes.menuButton, open && classes.hide)}
                        >
                        </ChevronRightIcon>
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