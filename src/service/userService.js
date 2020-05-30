import axiosInstance from './axiosInstance';
import { errorMessages } from '../util';

export const isLoggedIn = async () => {
    try {
        const result = await axiosInstance.get('user');
        console.log(result);

        if (result.status === 200) {
            return { loggedIn: true };
        } 
    } catch (error) {
        return { loggedIn: false };
    }
};

export const canSignIn = async (user) => {
    try {
        const result = await axiosInstance.post('users', {
            name: user.name, 
            email: user.email, 
            password: user.password
        });
        if (result.status === 201) {
            return { signedIn: true };
        } 
    } catch (error) {
        if (error.response.data === errorMessages.emailExists) {
            return { signedIn: false, error: errorMessages.emailExists }
        }
    }

    return { signedIn: false, error: errorMessages.generalError };
}

export const canLogIn = async (user) => {
    try {
        const result = await axiosInstance.post('signin', {
            email: user.email, 
            password: user.password
        });
        if (result.status === 200) {
            return { loggedIn: true, userName: result.data };
        } 
    } catch (error) {
        if (error.response.data === errorMessages.emailNotCorrectError) {
            return { loggedIn: false, error: errorMessages.emailNotCorrectError }
        }
        if (error.response.data === errorMessages.passwordNotCorrectError) {
            return { loggedIn: false, error: errorMessages.passwordNotCorrectError }
        }
    }

    return { loggedIn: false, error: errorMessages.generalError };
}

export const canLogOut = async () => {
    const result = await axiosInstance.post('/signout');
    if (result.status === 202) {
        return true;
    }

    return false;
}