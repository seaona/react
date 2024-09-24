import React, { Component } from'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { withStyles } from '@mui/styles';
import styles from './styles/FormStyles';
import { LanguageContext } from './contexts/LanguageContext';

const words = {
    english: {
        email: "Email",
        signIn: "Sign In",
        password: "Password",
        remember: "Remember Me"
    },
    catalan: {
        email: "Correu",
        signIn: "Iniciar Sessió",
        password: "Contrasenya",
        remember: "Recorda'm"
    },
    spanish: {
        email: "Correo",
        signIn: "Iniciar Sesión",
        password: "Contraseña",
        remember: "Recuérdame"
    }
}
class Form extends Component {
    static contextType = LanguageContext;

    render() {
        const { language, changeLanguage } = this.context;
        const { classes } = this.props;
        const { email, signIn, password, remember } = words[language];
        return(
            <main className={classes.main}>
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography
                        variant='h5'
                    >
                        {signIn}
                    </Typography>
                    <Select value={language} onChange={changeLanguage}>
                        <MenuItem value="english">English</MenuItem>
                        <MenuItem value="catalan">Catalan</MenuItem>
                        <MenuItem value="spanish">Spanish</MenuItem>
                    </Select>
                    <form className={classes.form}>
                        <FormControl
                            margin="normal"
                            required
                            fullWidth
                        >
                            <InputLabel htmlFor="email">{email}</InputLabel>
                            <Input id="email" name="email" autoFocus></Input>
                        </FormControl>
                        <FormControl
                            margin="normal"
                            required
                            fullWidth
                        >
                            <InputLabel htmlFor="password">{password}</InputLabel>
                            <Input id="password" name="password"></Input>
                        </FormControl>
                        <FormControlLabel
                            control={<Checkbox color="primary" />}
                            label={remember}
                        />
                        <Button
                            variant="contained"
                            type="submit"
                            fullWidth color="primary"
                            className={classes.submit}
                        >
                            {signIn}
                        </Button>
                    </form>
                </Paper>
            </main>
        )
    }
}

export default withStyles(styles)(Form);