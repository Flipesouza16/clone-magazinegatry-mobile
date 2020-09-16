import axios from 'axios';

const api = axios.create({
    baseURL: 'https://backend-clone-magazinegatry.herokuapp.com/products'
});

export default api;