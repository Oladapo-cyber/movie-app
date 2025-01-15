// Service module for handling API requests to the Open Movie Database (OMDb)
import axios from "axios";

// Base URL for all OMDb API requests
const BASE_URL = `https://www.omdbapi.com/`;

// API key from environment variables (.env file)
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

// Gets a paginated list of movies from OMDb API
export const fetchAllMovies = async (page = 1) => {
  try {
    // Send GET request with API key, movie type, and page number
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&s=movie&page=${page}`
    );
    // Return movie data
    return response.data;
  } catch (error) {
    // Log any errors during request
    console.log({ Error: error.message });
  }
};

// Gets detailed information for a specific movie by IMDB ID
export const fetcMovieDetailsById = async (id) => {
  try {
    // Send GET request with API key and movie ID
    const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&i=${id}`);
    // Return movie details
    return response.data;
  } catch (error) {
    // Log error and return null if request fails
    console.log({ Error: error.message });
    return null;
  }
};

// Searches for movies by title
export const fetchMovieByTitle = async (title) => {
  try {
    // Send GET request with API key and movie title
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}*T=${title} `
    );
    // Return search results
    return response.data;
  } catch (error) {
    // Log error and return null if request fails
    console.log({ Error: error.message });
    return null;
  }
};
