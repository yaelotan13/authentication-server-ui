import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { Layout, Input } from '../../components';
import user from '../../assetes/icons/user.png';
import whiteUser from '../../assetes/icons/user-white.png';
import whitePassword from '../../assetes/icons/password-white.png';
import passwordIcon from '../../assetes/icons/password.png';

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
}));

const SignUp = (props) => {
    const classes = useStyle();
    const [loading, setLoading] = useState(false);
    const [userName, setUserName] = useState({
        userName: '',
        hasError: false,
        errorMessage: '',
    });
    const [password, setPassword] = useState({
        password: '', 
        hasError: false,
        errorMessage: '',
    });
    const [confirmPassword, setConfirmPassword] = useState({
        password: '', 
        hasError: false,
        errorMessage: '',
    });

    const handleSubmit = () => {
        let hasError = false;

        if (userName.userName.length < 1) {
            setUserName(prevState => {
                const newState = { 
                    ...prevState, 
                    hasError: true, 
                    errorMessage: 'Please enter a user name' 
                };
                return newState;
            }) 
            hasError = true;
        }

        if (password.password.length < 1) {
            setPassword(prevState => {
                const newState = { 
                    ...prevState, 
                    hasError: true, 
                    errorMessage: 'Please enter a password' 
                };
                return newState;
            }) 
            hasError = true;
        }

        if (confirmPassword.password.length < 1) {
            setConfirmPassword(prevState => {
                const newState = { 
                    ...prevState, 
                    hasError: true, 
                    errorMessage: 'Please re-enter your password' 
                };
                return newState;
            }) 
            hasError = true;
        }


        if (confirmPassword.password !== password.password) {
            setConfirmPassword(prevState => {
                const newState = { 
                    ...prevState, 
                    hasError: true, 
                    errorMessage: 'Your password is not correct' 
                };
                return newState;
            }) 
            hasError = true;
        }

        if (hasError) {
            console.log('cant get in')
        } else {
            console.log('go in!');
            setLoading(true);
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

    const handleConfirmPasswordChanged = (event) => {
        event.persist();
        setConfirmPassword(prevState => {
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
            title="Sign Up"
            buttonTitle="Sign Up"
            handleSubmit={handleSubmit}
            question="Already have an account?"
            action="sign in"
            onAction={() => props.history.push('/login')}
            loading={loading}
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
                    errorMessage={userName.errorMessage}
                />
                <Input 
                    placeholder="Password" 
                    value={password.password}
                    handleChange={handlePasswordChanged}
                    icon={passwordIcon} 
                    type="password"
                    whiteIcon={whitePassword} 
                    hasError={password.hasError}
                    errorMessage={password.errorMessage}
                />
                {password.password.length > 0 &&
                    <Input 
                        placeholder="Confirm Password" 
                        value={confirmPassword.password}
                        handleChange={handleConfirmPasswordChanged}
                        icon={passwordIcon} 
                        type="password"
                        whiteIcon={whitePassword} 
                        hasError={confirmPassword.hasError}
                        errorMessage={confirmPassword.errorMessage}
                    />
                }
            </Box>
        </Layout>
    )
};

export default SignUp;
