import React, { Component } from 'react';
import classNames from "classnames";
import Drawer from '@mui/material/Drawer';
import { withStyles, withTheme } from '@mui/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { AppBar, CssBaseline, Toolbar } from '@mui/material';

const drawerWidth = 240;


const styles = theme => ({
    root: {
      display: "flex"
    },
/*     appBar: {
        transition: theme.transitions.create(["margin", "width"], {
           easing: theme.transitions.easing.sharp,
           duration: theme.transitions.duration.leavingScreen
         })
    }, */
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      height: "100vh"
    },
    drawerPaper: {
      width: drawerWidth,
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

      marginLeft: -drawerWidth
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
    }
  });

class NewPaletteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          open: true,
        };
        this.handleDrawerClose = this.handleDrawerClose.bind(this);
        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);

    }

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };
    
    handleDrawerClose = () => {
        this.setState({ open: false });
    };
    
    render() {
        const { classes } = this.props;
        const { open } = this.state;

        return (
          <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={classNames(classes.AppBar, {
                    [classes.appBarShift] : open
                })}
            >
                <Toolbar disableGutters={!open}>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={this.handleDrawerOpen}
                        className={classNames(classes.menuButton, open && classes.hide)}
                    >
                        <IconButton />
                    </IconButton>
                    <Typography variant="h6" color="inherit" noWrap>
                        Persistent drawer
                    </Typography>
                </Toolbar>
            </AppBar>

            <Drawer
              className={classes.drawer}
              variant='persistent'
              anchor='left'
              open={open}
              classes={{
                paper: classes.drawerPaper
              }}
            >
              <div className={classes.drawerHeader}>
                <IconButton onClick={this.handleDrawerClose}>
                  <ChevronLeftIcon />
                </IconButton>
              </div>
              <Divider />
            </Drawer>
            <main
              className={classNames(classes.content, {
                [classes.contentShift]: open
              })}
            >
              <div className={classes.drawerHeader} />
            </main>
          </div>
        );
      }
}

export default withStyles(styles, { withTheme: true})(NewPaletteForm);