import axios from "axios";
import React from "react";

const apiClientInterceptor = axios.create ({
  baseURL: "https://thread-ora-fashion-web-store-amfy.vercel.app/api/v1/",
});

export default apiClientInterceptor;

apiClientInterceptor.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem("authTokens"))?.access;
    if(token) {
        config.headers.Authorization = `JWT ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
