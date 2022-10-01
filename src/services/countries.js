import axios from "axios";

const baseUrl = "https://restcountries.com/v3.1/all";

// const getAll = async () => {
export default async function getAll() {
  const response = await axios.get(baseUrl);

  return response.data;
}

// export default { getAll };
