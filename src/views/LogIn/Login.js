import React, { useState } from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import beach from '../../assetes/images/beach.jpg';
import user from '../../assetes/icons/user.png';
import whiteUser from '../../assetes/icons/user-white.png';
import whitePassword from '../../assetes/icons/password-white.png';
import passwordIcon from '../../assetes/icons/password.png';
import { Input, PrimaryButton, Question } from './../../components';

const useStyle = makeStyles((theme) => ({
    container: {
        height: '100vh',
        display: 'flex'
    },
    img: {
        backgroundImage: `url(${beach})`,
        width: '50vw',
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        [theme.breakpoints.down('sm')]: {
            width: '100vw',
            backgorundPosition: 'right',
        },
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '50vw',
        [theme.breakpoints.down('sm')]: {
            width: '90vw',
            position: 'absolute',
            top: 80,
            backgroundColor: 'rgba(230, 230, 230, 0.85)',
            borderRadius: 5,
            marginLeft: '5vw'
        },
    },
    separator: {
        height: '10vh'
    },
    title: {
        fontSize: theme.typography.h1.fontSize,
        fontFamily: theme.typography.h1.fontFamily,
        color: theme.palette.text.primary
    },
    inputsContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            marginTop: '10vh',
            width: '100vw',
        }, 
    },
    inputContainer: {
        display: 'flex',
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
}));

const Login = (props) => {
    const classes = useStyle();
    const [userName, setUserName] = useState({
        userName: '',
        hasError: false
    });
    const [password, setPassword] = useState({
        password: '', 
        hasError: false
    });

    const handleSubmit = () => {
        let hasError = false;

        if (userName.userName.length < 1) {
            setUserName(prevState => {
                const newState = { ...prevState, hasError: true };
                return newState;
            }) 
            hasError = true;
        }

        if (password.password.length < 1) {
            setPassword(prevState => {
                const newState = { ...prevState, hasError: true };
                return newState;
            }) 
            hasError = true;
        }

        if (hasError) {
            console.log('cant get in')
        } else {
            console.log('go in!')
        }
    };

    const handlePasswordChanged = (event) => {
        event.persist();
        setPassword(prevState => {
            const newState = { 
                ...prevState, 
                password: event.target.value, 
                hasError: false 
            };
            return newState;
        }) 
    }

    const handleUserNameChanged = (event) => {
        event.persist();
        setUserName(prevState => {
            const newState = { 
                ...prevState, 
                userName: event.target.value, 
                hasError: false 
            };
            return newState;
        }) 
    }

    return (
        <Box className={classes.container}>
            <Box className={classes.img} />
            <Box className={classes.content}>
                <Box className={classes.separator} />
                <Typography className={classes.title}>Welcome Back</Typography>
                <Box className={classes.inputsContainer}>
                    <Input 
                        placeholder="User Name"
                        value={userName.userName} 
                        handleChange={handleUserNameChanged}
                        icon={user} 
                        type="text"
                        whiteIcon={whiteUser} 
                        hasError={userName.hasError}
                        errorMessage="Please enter a user name"
                    />
                    <Input 
                        placeholder="Password" 
                        value={password.password}
                        handleChange={handlePasswordChanged}
                        icon={passwordIcon} 
                        type="password"
                        whiteIcon={whitePassword} 
                        hasError={password.hasError}
                        errorMessage="Please enter a password"
                    />
                </Box>
                <Box className={classes.buttonContainer}>
                    <PrimaryButton title="Log In" onClick={handleSubmit} />
                    <Question question="Don't have an account?" action="create account" />
                </Box>
                <Box className={classes.separator} />
            </Box>
        </Box>
    );
};

export default Login;
