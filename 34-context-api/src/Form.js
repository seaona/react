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

class Form extends Component {
    render() {
        const { classes } = this.props;
        return(
            <main className={classes.main}>
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography
                        variant='h5'
                    >
                        Sign In
                    </Typography>
                    <Select value="english">
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
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <Input id="email" name="email" autoFocus></Input>
                        </FormControl>
                        <FormControl
                            margin="normal"
                            required
                            fullWidth
                        >
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input id="password" name="password"></Input>
                        </FormControl>
                        <FormControlLabel
                            control={<Checkbox color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            variant="contained"
                            type="submit"
                            fullWidth color="primary"
                            className={classes.submit}
                        >
                            Sign In
                        </Button>
                    </form>
                </Paper>
            </main>
        )
    }
}

export default withStyles(styles)(Form);