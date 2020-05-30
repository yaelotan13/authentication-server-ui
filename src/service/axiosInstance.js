import axios from 'axios';

// const config = {
//     baseURL: process.env.REACT_APP_AUTH_SERVER_BASE_HOST
// };

const instance = axios.create({
    baseURL: 'http://localhost:3333',
    headers: { 
        'Content-Type': 'application/json', 
    },
    withCredentials: true,

});

// if (config.baseURL && config.baseURL.indexOf('localhost') >= 0) {
//     console.log('running on localhost')
// } else {
//     console.log('running in production mode')
//     config.withCredentials = true;
// }

// const axiosInstance = axios.create(config);
// axiosInstance.defaults.baseURL = process.env.REACT_APP_AUTH_SERVER_BASE_HOST;
// axiosInstance.baseURL = process.env.REACT_APP_AUTH_SERVER_BASE_HOST;

// console.log(axiosInstance.baseURL);

axios.defaults.withCredentials = true;

export default instance;