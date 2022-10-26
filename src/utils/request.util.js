import axios from 'axios';

const request = axios.create({
    baseURL: process.env.REACT_APP_HOST_API,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default request;