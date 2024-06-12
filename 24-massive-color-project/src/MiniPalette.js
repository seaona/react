import React, { Component } from 'react';
import { withStyles } from '@mui/styles';

const styles = {
    main: {
        backgroundColor: "purple",
        border: "3px solid teal",
        "& h1": {
            color: "white"
        }
    },
    secondary: {
        backgroundColor: "pink"
    }
}

// inside props we are going to have class properties
function MiniPalette(props) {
    const {classes} = props;
    console.log(classes);

    return(
        <div className={classes.main}>
            <h1>MiniPalette</h1>
            <section className={classes.secondary}>alksjdksa</section>
        </div> 
    )
}

// higher order component
export default withStyles(styles)(MiniPalette);