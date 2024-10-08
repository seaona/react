import React from "react";
import { withStyles } from '@mui/styles';
import styles from './styles/PaletteFooterStyles';

// functional component, we don't have any state
function PaletteFooter(props) {
    const { paletteName, emoji, classes } = props;

    return(
        <footer className={classes.PaletteFooter}>
        {paletteName}
            <span className={classes.emoji}>{emoji}</span>
        </footer>
    );
}

export default withStyles(styles)(PaletteFooter);