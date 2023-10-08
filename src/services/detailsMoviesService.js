import axios from "axios";

const API_KEY = "7231178ff0746cf499bae0fd41f7ace1";
const BASE_URL = "https://api.themoviedb.org/3";
export const getDetailsMovies = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${id}`, {
      params: {
        api_key: API_KEY,
        // language: "vi-VN",
        append_to_response: "videos",
      },
    });
    return response.data;
  } catch (error) {
    console.log("Get Details API error ", error);
  }
};
