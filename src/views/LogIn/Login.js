import React, { useState } from 'react';

import user from '../../assetes/icons/user.png';
import whiteUser from '../../assetes/icons/user-white.png';
import whitePassword from '../../assetes/icons/password-white.png';
import passwordIcon from '../../assetes/icons/password.png';
import { Layout, Inputs } from './../../components';
import { InputData, invalidInputs } from '../../util';

const Login = (props) => {
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState({
        userName: {
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

    const handleSubmit = () => {
        if (invalidInputs(state, setState)) {
            console.log('CANT log in');
        } else {
            console.log('logged in!');
            setLoading(true);
            props.history.push('/page');
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
        new InputData(1, 'User Name', 'userName', 'text', state.userName.value, handleChange, user, whiteUser, state.userName.hasError, state.userName.errorMessage),
        new InputData(2, 'Password', 'password', 'password', state.password.value, handleChange, passwordIcon, whitePassword, state.password.hasError, state.password.errorMessage),
    ]

    return (
        <Layout 
            title="Welcome Back"
            buttonTitle="Log In"
            handleSubmit={handleSubmit}
            question="Don't have an account?"
            action="create account"
            onAction={() => props.history.push('/signup')}
            loading={loading}
        >
            <Inputs inputs={inputs} />
        </Layout>
    );
};

export default Login;
