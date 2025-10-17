import axios from "axios";

const authApiClient = axios.create({
  baseURL: "https://thread-ora-fashion-web-store-amfy.vercel.app/",
});

export default authApiClient;
