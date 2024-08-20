import React, { Component } from 'react';
import classNames from "classnames";
import Drawer from '@mui/material/Drawer';
import { withStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { AppBar, CssBaseline, Toolbar } from '@mui/material';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Navigate } from 'react-router-dom';
import DraggableColorBox from './DraggableColorBox';

const drawerWidth = 400;

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
      padding: "30px",
      marginTop: "64px",
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
          currentColor: "teal",
          newColorName: "",
          colors: [],
          redirect: false,
          newPaletteName: "",
        };
        this.handleDrawerClose = this.handleDrawerClose.bind(this);
        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
        this.updateCurrentColor = this.updateCurrentColor.bind(this);
        this.addNewColor = this.addNewColor.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
      ValidatorForm.addValidationRule('isColorNameUnique', (value) => {
        return this.state.colors.every(
           ({ name }) => name.toLowerCase() !== value.toLowerCase()
         );
      });

      ValidatorForm.addValidationRule('isColorUnique', (value) => {
        return this.state.colors.every(
           ({ color }) => color !== this.state.currentColor
         );
      });

      ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => {
        return this.props.palettes.every(
           ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
         );
      });
    }

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };
    
    handleDrawerClose = () => {
        this.setState({ open: false });
    };
    
    updateCurrentColor = (newColor) => {
      this.setState({ currentColor: newColor.hex });
    };

    addNewColor = () => {
      const newColor = {
        color: this.state.currentColor,
        name: this.state.newColorName
      }
      this.setState({
        colors: [...this.state.colors, newColor],
        newName: "",
      });
    }

    handleChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    handleSubmit() {
      let newName = this.state.newPaletteName;
      const newPalette = {
        paletteName: newName,
        id: newName.toLowerCase().replace(/ /g, "-"),
        colors: this.state.colors,
      }
      
      this.props.savePalette(newPalette);
      this.setState({ redirect: true });
    }

    render() {
        const { classes } = this.props;
        const { open, colors, redirect } = this.state;

        if (redirect) {
          return <Navigate to="/" />;
        }

        return (
          <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                color="default"
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
                    <ValidatorForm onSubmit={this.handleSubmit}>
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
                    </ValidatorForm>
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
              <Typography variant='h4'>
                Design Your Palette
              </Typography>
              <div>
                <Button variant='contained' color='secondary'>
                  Clear Palette
                </Button>
                <Button variant='contained' color='primary'>
                  Random Color
                </Button>
              </div>
              <ChromePicker
                color={this.state.currentColor}
                onChangeComplete={this.updateCurrentColor}
              />
              <ValidatorForm onSubmit={this.addNewColor}>
                <TextValidator
                  value={this.state.newColorName}
                  name="newColorName"
                  onChange={this.handleChange}
                  validators={["required", "isColorNameUnique", "isColorUnique"]}
                  errorMessages={[
                    "Enter a color name",
                    "Color name must be unique",
                    "Color already used",
                  ]}
                />
                <Button
                  variant='contained'
                  type='submit'
                  color='primary'
                  style= {{ backgroundColor: this.state.currentColor }}
                >
                  Add Color
                </Button>
              </ValidatorForm>

            </Drawer>
            <main
              className={classNames(classes.content, {
                [classes.contentShift]: open
              })}
            >
              <div className={classes.drawerHeader} />
                {colors.map(color => (
                  <DraggableColorBox color={color.color} name={color.name} />
                ))}
            </main>
          </div>
        );
      }
}

export default withStyles(styles, { withTheme: true})(NewPaletteForm);