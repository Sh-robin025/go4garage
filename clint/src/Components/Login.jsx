import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import Modal from './Modal';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                go4garage
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
}));

export default function Login() {
    const [error, setError] = useState()
    const [isVendor, setIsVendor] = useState(false)
    const { register, handleSubmit } = useForm();
    const classes = useStyles();
    const history = useHistory()
    console.log(error)

    const onSubmit = data => {
        setError()
        if (isVendor) {
            axios.post('http://localhost:8080/vendor/login', data)
                .then(res => {
                    loginRes(res.data)
                })
        } else {
            axios.post('http://localhost:8080/user/login', data)
                .then(res => {
                    loginRes(res.data)
                })
        }
    }

    const loginRes = (data) => {
        if (data.status === 200) {
            history.push('/products')
        }
        if (data.status === 404) {
            setError(data.message)
        }
        if (data.status === 401) {
            setError(data.message)
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Log in
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit(onSubmit)} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="username"
                        {...register("userName")}
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        {...register("password")}
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember"
                            onClick={() => setIsVendor(!isVendor)} color="primary" />}
                        label="Log in as vendor"
                    />
                    <Modal location={'login'} message={error} />
                    <Grid container>
                        <Grid item>
                            <Link href="/signUp" variant="body2">
                                New User ? Registration here
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}