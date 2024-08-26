import React, { Component } from 'react';
import classNames from "classnames";
import Drawer from '@mui/material/Drawer';
import { withStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Navigate } from 'react-router-dom';
import {arrayMoveImmutable} from 'array-move';
import DraggableColorList from './DraggableColorList';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const drawerWidth = 400;

const theme = createTheme({

  // Define your theme here

});

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
    },
  });

class NewPaletteForm extends Component {
    static defaultProps = {
      maxColors: 20,
    }

    constructor(props) {
        super(props);
        this.state = {
          open: true,
          newColorName: "",
          colors: this.props.palettes[0].colors,
          redirect: false,
        };
        this.handleDrawerClose = this.handleDrawerClose.bind(this);
        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
        this.addNewColor = this.addNewColor.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.removeColor = this.removeColor.bind(this);
        this.clearColors = this.clearColors.bind(this);
        this.addRandomColor = this.addRandomColor.bind(this);
    }

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };
    
    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    addNewColor = (newColor) => {
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

    clearColors() {
      this.setState({ colors: [] });
    }

    addRandomColor() {
      // pick random color from existing palettes
      const allColors = this.props.palettes.map(p => p.colors).flat();
      var rand = Math.floor(Math.random() * allColors.length);
      const randomColor = allColors[rand];
      this.setState({colors: [...this.state.colors, randomColor]});
    }

    handleSubmit(newPaletteName) {
      const newPalette = {
        paletteName: newPaletteName,
        id: newPaletteName.toLowerCase().replace(/ /g, "-"),
        colors: this.state.colors,
      }
      
      this.props.savePalette(newPalette);
      this.setState({ redirect: true });
    }

    removeColor(colorName) {
      console.log("AAAA", colorName)
      this.setState({
        colors: this.state.colors.filter(color => color.name !== colorName)
      });
    }

    // we don't have to bind because tt's using class property syntax

    /* In modern JavaScript, particularly with the introduction of class properties syntax,
    you can define methods as class properties, which allows you to avoid the need 
    to explicitly bind them in the constructor.
    This is because class property arrow functions automatically bind the method to the instance of the class

    Arrow Functions and Lexical this: Arrow functions do not have their own this context. 
    Instead, they inherit this from the surrounding lexical context, which in this case is the class instance
    */
    onSortEnd = ({oldIndex, newIndex}) => {
      this.setState(({colors}) => ({
        colors: arrayMoveImmutable(colors, oldIndex, newIndex),
      }));
    }

    render() {
        const { classes, maxColors, palettes } = this.props;
        const { open, colors, redirect } = this.state;
        const paletteIsFull = colors.length >= maxColors;

        if (redirect) {
          return <Navigate to="/" />;
        }

        return (
          <div className={classes.root}>
            <ThemeProvider theme={theme}>
              <PaletteFormNav 
                open={open}
                palettes={palettes}
                handleSubmit={this.handleSubmit}
                handleDrawerOpen={this.handleDrawerOpen}
              />
            </ThemeProvider>
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
              <div className={classes.container}>
                <Typography variant='h4' gutterBottom>
                  Design Your Palette
                </Typography>
                <div className={classes.buttons}>
                  <Button
                    variant='contained'
                    color='secondary'
                    className={classes.button}
                    onClick={this.clearColors}
                  >
                    Clear Palette
                  </Button>
                  <Button
                    variant='contained'
                    color='primary'
                    className={classes.button}
                    disabled={paletteIsFull}
                    onClick={this.addRandomColor}
                  >
                    Random Color
                  </Button>
                </div>
                <ColorPickerForm
                  paletteIsFull={paletteIsFull}
                  addNewColor={this.addNewColor}
                  colors={colors}
                />
              </div>
            </Drawer>
            <main
              className={classNames(classes.content, {
                [classes.contentShift]: open
              })}
            >
            <div className={classes.drawerHeader} />
            <DraggableColorList
              colors={colors}
              removeColor={this.removeColor}
              axis='xy'
              onSortEnd={this.onSortEnd}
            />
            </main>
          </div>
        );
      }
}

export default withStyles(styles, { withTheme: true})(NewPaletteForm);