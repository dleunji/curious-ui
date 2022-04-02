import axios from "axios";
const client = axios.create({
  baseURL: "https://localhost:5001",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});

export default client;
