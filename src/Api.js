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
      console.log(params.toString());
      return response.data;
    });
}
export async function fetchTopMovies() {
  const params = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
  });

  return await axios
    .get(`${BASE_URL}/trending/movie/day?${params.toString()}`)
    .then(async response => {
      if (response.status !== 200) {
        throw new Error(response.status);
      }
      console.log(params.toString());
      return response.data;
    });
}

export async function fetchQueryMovies(queryParams) {
  const params = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
    ...queryParams, // Additional query parameters
  });

  return await axios
    .get(`${BASE_URL}/search/movie?${params.toString()}`)
    .then(async response => {
      if (response.status !== 200) {
        throw new Error(response.status);
      }
      console.log(params);
      return response.data;
    });
}

export async function fetchMovie(movie_id) {
  const params = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
  });

  return await axios
    .get(`${BASE_URL}/movie/${movie_id}?${params.toString()}`)
    .then(async response => {
      if (response.status !== 200) {
        throw new Error(response.status);
      }
      console.log(params);
      return response.data;
    });
}

export async function fetchMovieCast(movie_id, credits) {
  const params = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
  });

  return await axios
    .get(`${BASE_URL}/movie/${movie_id}/credits?${params.toString()}`)
    .then(async response => {
      if (response.status !== 200) {
        throw new Error(response.status);
      }
      console.log(params);
      return response.data;
    });
}
