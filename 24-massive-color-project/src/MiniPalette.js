import React, { Component } from 'react';
import { withStyles } from '@mui/styles';
import Delete from '@mui/icons-material/Delete';

import styles from './styles/MiniPaletteStyles';


// functional stateless component
// inside props we are going to have class properties
class MiniPalette extends Component {
    constructor(props) {
        super(props);
        this.deletePalette = this.deletePalette.bind(this);
    }
    
    deletePalette(e) {
        e.stopPropagation();
        this.props.openDialog(this.props.id);
    }

    render() {
        const { classes, paletteName, emoji, colors, handleClick } = this.props;
        const miniColorBoxes = colors.map(color => (
            <div
                className={classes.miniColor}
                style={{ backgroundColor: color.color}}
                key={color.name}
            />
        ));

        return(
            <div className={classes.root} onClick={handleClick}>
                <Delete
                    className={classes.deleteIcon}
                    onClick={this.deletePalette}
                />
                <div className={classes.colors}>{miniColorBoxes}</div>
                <h5 className={classes.title}>
                {paletteName} <span className={classes.emoji}>{emoji}</span>
                </h5>
            </div> 
        )
    }
}

// higher order component
export default withStyles(styles)(MiniPalette);