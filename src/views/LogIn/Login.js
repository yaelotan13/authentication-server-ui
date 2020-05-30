import React, { useState } from 'react';

import email from '../../assetes/icons/email.png';
import whiteEmail from '../../assetes/icons/email-white.png';
import whitePassword from '../../assetes/icons/password-white.png';
import passwordIcon from '../../assetes/icons/password.png';
import { Layout, Inputs } from './../../components';
import { InputData, validInputs, errorMessages, setError } from '../../util';
import { canLogIn } from '../../service';

const Login = (props) => {
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState({
        email: {
            value: '',
            hasError: false,
            errorMessage: '',
        },
        password: {
            value: '',
            hasError: false,
            errorMessage: '',
        }
    });

    const handleSubmit = async () => {
        if (validInputs(state, setState)) {
            setLoading(true);
            const response = await canLogIn({
                email: state.email.value,
                password: state.password.value
            });
            if (response.loggedIn) {
                props.history.push({
                    pathname: '/feed',
                    state: { userName: response.userName, firstTime: false }
                });
            } else {
                setLoading(false);
                if (response.error === errorMessages.emailNotCorrectError) {
                    setError(setState, 'email', errorMessages.emailNotCorrectError);
                }
                if (response.error === errorMessages.passwordNotCorrectError) {
                    setError(setState, 'password', errorMessages.passwordNotCorrectError);
                }
            }
        }
    };

    const handleChange = (event) => {
        event.persist();
        setState(prevState => {
            const updatedObject = { ...prevState[event.target.id] };
            updatedObject.value = event.target.value;
            updatedObject.hasError = false;

            return {
                ...prevState, 
                [event.target.id]: updatedObject
            }
        })
    };

    const inputs = [
        new InputData(1, 'Email', 'email', 'text', state.email.value, handleChange, email, whiteEmail, state.email.hasError, state.email.errorMessage),
        new InputData(2, 'Password', 'password', 'password', state.password.value, handleChange, passwordIcon, whitePassword, state.password.hasError, state.password.errorMessage),
    ]

    return (
        <Layout 
            title="Welcome Back"
            buttonTitle="Log In"
            handleSubmit={handleSubmit}
            question="Don't have an account?"
            action="Create Account"
            onAction={() => props.history.push('/signup')}
            loading={loading}
        >
            <Inputs inputs={inputs} />
        </Layout>
    );
};

export default Login;
