import axios from "axios";

export default axios.create({
    baseURL:'https://localhost:8080',
    headers:{}
    // headers:{"ngrok-skip-browser-warning": "true"}
})