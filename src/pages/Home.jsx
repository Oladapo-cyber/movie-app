import { useEffect, useState } from "react";
import TrendingMovieCard from "../components/TrendingMovieCard";
import { trendingMoviesData } from "../data/data";
import { fetchAllMovies, options } from "../services/omdbApi";
import MovieCard from "../components/MovieCard";
import axios from "axios";

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const trendingMoviesUrl = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`;
    const moviesUrl = `https://api.themoviedb.org/3/trending/all/week?language=en-US`;

    const fetch = async () => {
      try {
        const response = await axios.get(trendingMoviesUrl, options);
        console.log(response.data.results);
        setTrendingMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchMovies = async () => {
      try {
        const response = await axios.get(moviesUrl, options);
        console.log(response.data.results);
        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
    fetch(); // Call the fetch function to get the data
  }, []);

  const handleScroll = (direction) => {
    const container = document.querySelector(".overflow-x-hidden");
    const scrollAmount = container.clientWidth;

    if (direction === "left") {
      container.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    } else {
      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative width-4/5 ml-[20%] mt-28 overflow-hidden">
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
          {trendingMovies?.map((movie) => (
            <TrendingMovieCard
              key={movie.id}
              movie={movie}
              handleScroll={handleScroll}
            />
          ))}
        </div>
      </div>

      <div className="px-8 bg-[#212121] mt-8">
        <h2>Trending</h2>
        <div className="grid bg-[#212121] grid-cols-5 place-items-center py-8 gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
