import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { withRouter } from 'react-router-dom';

import user from '../../assetes/icons/user.png';
import whiteUser from '../../assetes/icons/user-white.png';
import whitePassword from '../../assetes/icons/password-white.png';
import passwordIcon from '../../assetes/icons/password.png';
import { Input, Layout } from './../../components';

const useStyle = makeStyles((theme) => ({
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
        <Layout 
            title="Welcome Back"
            buttonTitle="Log In"
            handleSubmit={handleSubmit}
            question="Don't have an account?"
            action="create account"
        >
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
        </Layout>
    );
};

export default withRouter(Login);
