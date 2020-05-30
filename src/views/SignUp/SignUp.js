import React, { useState } from 'react';

import { Layout, Inputs } from '../../components';
import user from '../../assetes/icons/user.png';
import whiteUser from '../../assetes/icons/user-white.png';
import whitePassword from '../../assetes/icons/password-white.png';
import passwordIcon from '../../assetes/icons/password.png';
import email from '../../assetes/icons/email.png';
import { InputData, validInputs, setError, errorMessages } from '../../util';
import { canSignIn } from '../../service';

const SignUp = (props) => {
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState({
        userName: {
            value: '',
            hasError: false,
            errorMessage: '',
        },
        email: {
            value: '',
            hasError: false,
            errorMessage: '',
        },
        password: {
            value: '',
            hasError: false,
            errorMessage: '',
        },
        confirmPassword: {
            value: '',
            hasError: false,
            errorMessage: '',
        }
    });

    const handleSubmit = async () => {
        if (validInputs(state, setState)) {
            setLoading(true);
            const response = await canSignIn({
                name: state.userName.value,
                email: state.email.value,
                password: state.password.value
            });
            if (response.signedIn) {
                props.history.push({
                    pathname: '/feed',
                    state: { userName: state.userName.value, firstTime: true }
                });
            } else {
                setLoading(false);
                if (response.error === errorMessages.emailExists) {
                    setError(setState, 'email', errorMessages.emailExists)
                }
            }
        }
    }

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
        new InputData(2, 'Email', 'email', 'text', state.email.value, handleChange, email, whiteUser, state.email.hasError, state.email.errorMessage),
        new InputData(3, 'Password', 'password', 'password', state.password.value, handleChange, passwordIcon, whitePassword, state.password.hasError, state.password.errorMessage),
        new InputData(4, 'Confirm Password', 'confirmPassword','password', state.confirmPassword.value, handleChange, passwordIcon, whitePassword, state.confirmPassword.hasError, state.confirmPassword.errorMessage),
    ]

    return (
        <Layout
            title="Sign Up"
            buttonTitle="Sign Up"
            handleSubmit={handleSubmit}
            question="Already have an account?"
            action="Sign In"
            onAction={() => props.history.push('/login')}
            loading={loading}
        >
            <Inputs inputs={inputs} />
        </Layout>
    )
};

export default SignUp;
