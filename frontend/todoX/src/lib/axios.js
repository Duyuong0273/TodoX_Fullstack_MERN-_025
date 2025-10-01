import axios from "axios";

const BASE__URL=import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api"

const api = axios.create({
    baseURL: BASE__URL
})
export default api