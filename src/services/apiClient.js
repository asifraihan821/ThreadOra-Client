import axios from 'axios';

const apiClient = axios.create({
    baseURL: "https://thread-ora-fashion-web-store-amfy.vercel.app/api/v1/",
})

export default apiClient;