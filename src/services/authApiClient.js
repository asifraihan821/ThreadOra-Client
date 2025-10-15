import axios from "axios";

const authClient = axios.create({
  baseURL: "https://thread-ora-fashion-web-store-amfy.vercel.app/",
});

export default authClient;
