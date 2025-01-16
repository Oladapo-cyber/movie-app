import { useEffect, useState } from "react";
import { fetchAllMovies } from "../services/omdbApi";
import TrendingMovieCard from "../components/TrendingMovieCard";
import { trendingMoviesData } from "../data/data";

function Home() {
  // State to store all movies fetched from the API
  const [movies, setMovies] = useState([]);
  // State to manage loading state during API calls
  const [loading, setLoading] = useState(true);
  // State to store first 3 movies as trending movies
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    // Async function to fetch movie data from the API
    const fetchData = async () => {
      // Fetch movies data from OMDB API
      const data = await fetchAllMovies();
      console.log(data.Search);
      // Update movies state with all fetched movies
      setMovies(data.Search);
    };

    // Call the fetch function
    fetchData();
    setTrendingMovies(trendingMoviesData);
    // Empty dependency array means this effect runs once on component mount
  }, []);

  return (
    <div>
      {/* Map through trending movies and render TrendingMovieCard component for each */}
      {/* Optional chaining (?.) prevents errors if trendingMovies is null/undefined */}
      {trendingMovies?.map((movie) => (
        <TrendingMovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}

export default Home;
