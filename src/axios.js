import axios from "axios";

const API = axios.create({
  baseURL: "https://your-backend-domain.com/api",   // backend ka live URL
});

export default API;

