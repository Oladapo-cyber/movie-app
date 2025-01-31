// Import necessary libraries and components
import { useEffect, useState } from "react";
import TrendingMovieCard from "../components/TrendingMovieCard";
import { trendingMoviesData } from "../data/data";
import { fetchAllMovies, options } from "../services/omdbApi";
import MovieCard from "../components/MovieCard";
import axios from "axios";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

/**
 * Home component that fetches and displays two sets of movies from different TMDb endpoints.
 *
 * @component
 * @example
 * return (
 *   <Home />
 * )
 *
 * @description
 * This component retrieves:
 * 1. "Now Playing" movies using the TMDb "/movie/now_playing" endpoint and stores them in the "trendingMovies" state.
 * 2. Weekly "Trending" movies using the TMDb "/trending/all/week" endpoint and stores them in the "movies" state.
 *
 * The movies are then displayed in two sections:
 * - A horizontally scrollable gallery for "Now Playing" movies, complete with left and right scroll buttons.
 * - A grid layout for "Trending" movies over the past week.
 *
 * The scroll functionality in the "Now Playing" section is handled by the "handleScroll" function,
 * which uses smooth scrolling to move the container in the desired direction.
 *
 * @returns {JSX.Element} Rendered Home component with two distinct sections of movie listings and scroll controls.
 *
 * @requires axios
 * @requires react
 * @requires TrendingMovieCard
 * @requires MovieCard
 */
const Home = () => {
  // Store trending movies from "now_playing" endpoint
  const [trendingMovies, setTrendingMovies] = useState([]);
  // Store trending movies from "trending/all/week" endpoint
  const [movies, setMovies] = useState([]);

  // Fetch data once the component mounts
  useEffect(() => {
    const trendingMoviesUrl = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`;
    const moviesUrl = `https://api.themoviedb.org/3/trending/all/week?language=en-US`;

    // Fetch now playing movies
    const fetch = async () => {
      try {
        const response = await axios.get(trendingMoviesUrl, options);
        console.log(response.data.results);
        setTrendingMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    // Fetch trending movies
    const fetchMovies = async () => {
      try {
        const response = await axios.get(moviesUrl, options);
        console.log(response.data.results);
        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    // Call both fetch functions
    fetchMovies();
    fetch();
  }, []);

  // Handle horizontal scroll for the trending movie container
  const handleScroll = (direction) => {
    const container = document.querySelector(".overflow-x-hidden");
    const scrollAmount = container.clientWidth;
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Render the component
  return (
    <div className="relative width-4/5 ml-[20%] mt-[5.5rem] overflow-hidden">
      {/* Container for trending now playing movies */}
      <div
        className="w-full overflow-x-hidden scroll-smooth mt-5 "
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div
          className="flex justify-around w-fit gap-20 drop-shadow-xl px-10"
          onWheel={(e) => e.preventDefault()}
          onScroll={(e) => e.preventDefault()}
          onTouchMove={(e) => e.preventDefault()}
        >
          {/* Render each trending movie card */}
          {trendingMovies?.map((movie) => (
            <TrendingMovieCard key={movie.id} movie={movie} />
          ))}
          {/* Scroll buttons */}
          <div className="flex z-50 top-[25rem] left-[65rem] fixed items-center gap-3 *:bg-slate-950/80 *:border-white  *:rounded-full *:p-5  *:justify-between">
            <button onClick={() => handleScroll("left")}>
              <FaChevronLeft />
            </button>
            <button onClick={() => handleScroll("right")}>
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>

      {/* Section for trending (week) movies */}
      <div className="px-8 bg-[#212121] mt-8">
        <h2>Trending</h2>
        <div className="grid bg-[#212121] grid-cols-5 place-items-center py-8 gap-4">
          {/* Render each trending movie card */}
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
