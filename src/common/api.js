import { Api } from "@mui/icons-material";
import axios from "axios";
import constants from "./constants";
const api = axios.create({ baseURL: "https://api.spacexdata.com/" });

const login = async () => {
  try {
    const response = await api.get(`v5/launches`);

    console.log(`response`, response);
    return response?.data;
  } catch (error) {
    onError(error?.response.data);
    return false;
  }
};

const API = {};

export default API;
