import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-patogordo.netlify.app/api",
});
