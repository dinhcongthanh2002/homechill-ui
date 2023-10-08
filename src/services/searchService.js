import axios from "axios";
const API_KEY = "7231178ff0746cf499bae0fd41f7ace1";
const BASE_URL = "https://api.themoviedb.org/3";
export const getSearchResult = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/multi`, {
      params: {
        api_key: API_KEY,
        language: "vi-VN",
        query,
      },
    });
    return response.data;
  } catch (error) {
    console.log("Get Action API error ", error);
  }
};
