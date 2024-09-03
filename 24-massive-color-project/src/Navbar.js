import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Snackbar from '@mui/material/Snackbar';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { withStyles } from '@mui/styles';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import styles from './styles/NavbarStyles';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            format: "hex",
            open: false,
        }
        this.handleFormatChange = this.handleFormatChange.bind(this);
        this.closeSnackbar = this.closeSnackbar.bind(this);
    }

    closeSnackbar() {
        this.setState({ open: false });
    }
    
    handleFormatChange(e) {
        this.setState({format: e.target.value, open: true});
        this.props.handleChange(e.target.value);
    }
    render() {
        const { level, changeLevel, showingAllColors, classes } = this.props;
        const { format }= this.state;

        return(
            <header className={classes.Navbar}>
                <div className={classes.logo}>
                    <Link to='/'>reactcolorpicker</Link>
                </div>
                {showingAllColors && (
                    <div>
                        <span>Level: {level}</span>
                        <div className={classes.slider}>
                        <Slider
                            defaultValue={level}
                            min={100}
                            max={900}
                            step={100}
                            onChangeComplete={changeLevel}
                        />
                    </div>
                    </div>
                )}
                <div className={classes.selectContainer}>
                    <Select value={format} onChange={this.handleFormatChange}>
                        <MenuItem value="hex">HEX - #ffffff</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                        <MenuItem value="rgba">RGBA - rgb(255,255,255, 1.0)</MenuItem>
                    </Select>
                </div>
                <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    open={this.state.open}
                    autoHideDuration={3000}
                    message={<span id='message-id'>Format Changed To {format.toUpperCase()}</span>}
                    ContentProps={{
                        'aria-describedby': 'message-id'
                    }}
                    onClose={this.closeSnackbar}
                    action={[
                        <IconButton
                            onClick={this.closeSnackbar}
                            color='inherit'
                            key='close'
                            aria-label='close'
                        >
                            <CloseIcon/>
                        </IconButton>
                    ]}
                />
            </header>
        )
    }
}

export default withStyles(styles)(Navbar);