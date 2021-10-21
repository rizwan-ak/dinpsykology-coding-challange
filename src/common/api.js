import axios from "axios";
const api = axios.create({ baseURL: "https://api.spacexdata.com/" });

export const fetchLaunches = async (callBack) => {
  try {
    const response = await api.get(`v5/launches`);
    callBack(response?.data);
  } catch (err) {
    console.error(err);
  }
};
