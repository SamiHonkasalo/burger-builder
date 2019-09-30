import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-6cb82.firebaseio.com/"
});

export default instance;
