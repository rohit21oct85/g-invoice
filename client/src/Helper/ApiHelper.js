
import axios from 'axios';
import * as cons from './Cons.js';

const access_token = localStorage.getItem('access_token');
const api = axios.create({
    baseURL: cons.REACT_API_URL,
    headers: {
        'Content-Type': 'Application/json',
        'Authorization':'Bearer '+access_token
    }
});

export async function post(url, payload){
    const response = await api.post(url, payload);
    return response;
}

export async function get(url){
    const response = await api.get(url);
    return response;
}

export async function del(url, payload){
    const response = await api.delete(url, payload);
    return response;
}
