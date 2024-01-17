import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://rocketmovies-api-t3nc.onrender.com',
})