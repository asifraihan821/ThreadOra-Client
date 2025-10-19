import axios from "axios";

const authApiClient = axios.create({
  baseURL: "https://thread-ora-fashion-web-store.vercel.app/",
});

export default authApiClient;
