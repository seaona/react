import React from 'react';
import { withStyles } from '@mui/styles';
import Delete from '@mui/icons-material/Delete';

const styles = {
    root: {
        width: "20%",
        height: "25%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.5px",
        "&:hover svg": {
            color: "white",
            transform: "scale(1.5)",
        }
    },
    boxContent: {
        position: "absolute",
        padding: "10px",
        width: "100%",
        left: "0px",
        bottom: "0px",
        color: "rgba(0, 0, 0, 0.5)",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px",
        display: "flex",
        justifyContent: "space-between",
    },
    deleteIcon: {
        color: "rgba(0, 0, 0, 0.5)",
        transition: "all 0.3s ease-in-out",
    }
}

function DraggableColorBox(props) {
    const { classes } = props;
    return (
        <div
            className={classes.root}
            style={{ backgroundColor: props.color}}
        >
            <div className={classes.boxContent}>
                <span>{props.name}</span>
                <Delete className={classes.deleteIcon}/>
            </div>
        </div>
    )
}

export default withStyles(styles)(DraggableColorBox);