import axios from "axios";

const API_KEY = "tu_api_key";
const BASE_URL = "https://api.tiqets.com/v2/products";

export const getAttractionsByCity = async (city) => {
  const response = await axios.get(`${BASE_URL}?city=${city}`, {
    headers: {
      Authorization: `ApiKey ${API_KEY}`,
    },
  });
  return response.data;
};
