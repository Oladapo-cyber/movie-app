import axios from "axios";

/**
 * Base URL for the Open Movie Database (OMDb) API
 * Note: This API requires an API key for authentication
 * @constant {string} BASE_URL
 * @see {@link http://www.omdb.com/} OMDb API Documentation
 */
const BASE_URL = `https://www.omdbapi.com/`;
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

export const fetchAllMovies = async (page = 1) => {
  try {
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&s=movie&page=${page}`
    );
    return response.data;
  } catch (error) {
    console.log({ Error: error.message });
  }
};

export const fetcMovieDetailsById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&i=${id}`);
    return response.data;
  } catch (error) {
    console.log({ Error: error.message });
    return null;
  }
};

export const fetchMovieByTitle = async (title) => {
  try {
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}*T=${title} `
    );
    return response.data;
  } catch (error) {
    console.log({ Error: error.message });
    return null;
  }
};
