import axios from "axios";

const httpRequest = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default httpRequest;
