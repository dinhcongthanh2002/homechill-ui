import axios from "axios";

const API_KEY = "7231178ff0746cf499bae0fd41f7ace1";
const BASE_URL = "https://api.themoviedb.org/3";
export const getMusicMovies = async (page) => {
  try {
    const response = await axios.get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        language: "vi-VN",
        with_genres: 10402,
        page: page,
      },
    });
    return response.data;
  } catch (error) {
    console.log("Get Music API error ", error);
  }
};
