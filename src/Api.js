import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '31e4aa16d394f964079920d6173ce10a';

export async function fetchData(endpoint, queryParams) {
  const params = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
    ...queryParams, // Additional query parameters
  });

  return await axios
    .get(`${BASE_URL}/${endpoint}?${params.toString()}`)
    .then(async response => {
      if (response.status !== 200) {
        throw new Error(response.status);
      }
      return response.data;
    });
}

const queryParams = {
  page: 1,
  someOtherParam: 'value',
};

const endpoint = 'trending/movie/day'; // Your desired endpoint

fetchData(endpoint, queryParams)
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
