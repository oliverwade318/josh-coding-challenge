// libs
import axios from "axios";
axios.defaults.baseURL = 'https://api.nasa.gov/mars-photos/api';

export const getRovers = async () => {
  const response = await axios.get(
    "/v1/rovers/?api_key=DEMO_KEY"
  );

  return response.data;
};

export const getSingleRover = async (
  rover: string | undefined,
  date: string | undefined
) => {
  const response = await axios.get(
    `/v1/rovers/${
      rover && rover.toLowerCase()
    }/photos?earth_date=${date}&api_key=DEMO_KEY`
  );

  return response.data;
};
