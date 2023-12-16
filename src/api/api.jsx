import axios from "axios";
const BASE_URI = "https://youtube-v31.p.rapidapi.com";
const RapidAPI_KEY = '651229bbe7msh05d278214fcd791p1e90c2jsnb12191b3eaf7';

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": RapidAPI_KEY.toString(),
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const Apiservice = {
  async fetching(url) {
    const reponse = await axios.get(`${BASE_URI}/${url}`, options);
    return reponse.data;
  },
};
