import React, { Component } from'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Switch from '@mui/material/Switch';
import { withStyles } from '@mui/styles';
import styles from './styles/NavbarStyles';
import { ThemeContext } from './contexts/ThemeContext';
import { withLanguageContext } from './contexts/LanguageContext';

const content = {
    english: {
        search: "Search",
        flag: "🇬🇧",
    },
    catalan: {
        search: "Cercar",
        flag: "🇫🇷",
    },
    spanish: {
        search: "Buscar",
        flag: "🇪🇸",
    }
}
class Navbar extends Component {
    static contextType = ThemeContext;
    render() {
        const { isDarkMode, toggleTheme } = this.context;

        const { classes } = this.props;
        const { language } = this.props.languageContext;
        const {search, flag} = content[language];

        return (
            <div className={classes.root}>
                <AppBar
                    position="static"
                    color={isDarkMode ? " default" : "primary"}
                >
                    <Toolbar>
                        <IconButton
                            className={classes.menuButton}
                            color="inherit"
                        >
                            <span>{flag}</span>
                        </IconButton>
                        <Typography
                            className={classes.title}
                            variant="h6"
                            color="inherit"
                        >
                            App Title
                        </Typography>
                        <Switch onChange={toggleTheme}/>
                        <div className={classes.grow} />
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase 
                                placeholder={`${search}...`}
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                            />
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withLanguageContext(withStyles(styles)(Navbar));