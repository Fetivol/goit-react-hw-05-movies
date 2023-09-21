import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '31e4aa16d394f964079920d6173ce10a',
    language: 'en-US',
  },
});

export async function fetchTopMovies() {
  try {
    const response = await API.get('/trending/movie/day');
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function fetchQueryMovies(queryParams) {
  try {
    const response = await API.get('/search/movie', {
      params: queryParams,
    });
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function fetchMovie(movie_id) {
  try {
    const response = await API.get(`/movie/${movie_id}`);
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function fetchMovieCast(movie_id) {
  try {
    const response = await API.get(`/movie/${movie_id}/credits`);
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
export async function fetchMovieReviews(movie_id) {
  try {
    const response = await API.get(`/movie/${movie_id}/reviews`);
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
