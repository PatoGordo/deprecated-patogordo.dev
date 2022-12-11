import axios from "axios";

export const api = axios.create({
  baseURL: "https://patogordo-admin.netlify.app/api",
});
