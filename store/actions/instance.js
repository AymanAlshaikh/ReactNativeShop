import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.100.237:8000",
});
export default instance;
//192.168.100.237