import React from 'react';
import { withStyles } from '@mui/styles';
import Delete from '@mui/icons-material/Delete';

import styles from './styles/MiniPaletteStyles';


// functional stateless component
// inside props we are going to have class properties
function MiniPalette(props) {
    const { classes, paletteName, emoji, colors, handleClick } = props;
    const miniColorBoxes = colors.map(color => (
        <div
            className={classes.miniColor}
            style={{ backgroundColor: color.color}}
            key={color.name}
        />
    ));

    return(
        <div className={classes.root} onClick={handleClick}>
            <div className={classes.delete}>
                <Delete className={classes.deleteIcon}/>
            </div>
            <div className={classes.colors}>{miniColorBoxes}</div>
            <h5 className={classes.title}>
             {paletteName} <span className={classes.emoji}>{emoji}</span>
            </h5>
        </div> 
    )
}

// higher order component
export default withStyles(styles)(MiniPalette);