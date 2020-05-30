import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://yael-auth-server-api.herokuapp.com/',
    // baseURL: 'http://localhost:3333',
    headers: { 
        'Content-Type': 'application/json', 
    },
    withCredentials: true,

});

axios.defaults.withCredentials = true;

export default instance;