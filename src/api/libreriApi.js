import axios from 'axios';

export const libreriApi = axios.create({
    baseURL: 'https://libreriapi.herokuapp.com/v1'
});