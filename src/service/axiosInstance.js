import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://yael-auth-server-api.herokuapp.com/',
    headers: { 
        'Content-Type': 'application/json', 
    },
    withCredentials: true,

});

axios.defaults.withCredentials = true;

export default instance;