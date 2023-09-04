import axios from "axios";
const baseURL = "https://love-point-api.vercel.app/";
export const requestWithoutToken = axios.create({
  baseURL: baseURL,
});
export const requestWithToken = axios.create({
  baseURL: baseURL,
  headers: {
    token: "Bearer " + localStorage.getItem("accessToken"),
  },
});
