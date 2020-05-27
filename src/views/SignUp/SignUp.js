import React, { useState } from 'react';

import { Layout, Inputs } from '../../components';
import user from '../../assetes/icons/user.png';
import whiteUser from '../../assetes/icons/user-white.png';
import whitePassword from '../../assetes/icons/password-white.png';
import passwordIcon from '../../assetes/icons/password.png';
import { InputData } from '../../data';

const SignUp = (props) => {
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

    const inputs = [
        new InputData('User Name', 'text', userName.userName, handleUserNameChanged, user, whiteUser, userName.hasError, userName.errorMessage),
        new InputData('Password', 'password', password.password, handlePasswordChanged, passwordIcon, whitePassword, password.hasError, password.errorMessage),
        new InputData('Confirm Password', 'password', confirmPassword.password, handleConfirmPasswordChanged, passwordIcon, whitePassword, confirmPassword.hasError, confirmPassword.errorMessage),
    ]

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
            <Inputs inputs={inputs} />
        </Layout>
    )
};

export default SignUp;
