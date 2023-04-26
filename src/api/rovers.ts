// libs
import axios from "axios";

export const getRovers = async () => {
  const response = await axios.get(
    "https://api.nasa.gov/mars-photos/api/v1/rovers/?api_key=DEMO_KEY"
  );

  return response.data;
};

export const getSingleRover = async (
  rover: string | undefined,
  date: string | undefined
) => {
  const response = await axios.get(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/${
      rover && rover.toLowerCase()
    }/photos?earth_date=${date}&api_key=DEMO_KEY`
  );

  return response.data;
};
