import { useEffect, useState } from "react";
import { fetchAllMovies } from "../services/omdbApi";
import TrendingMovieCard from "../components/TrendingMovieCard";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAllMovies();
      console.log(data.Search);
      setMovies(data.Search); //Set the movies state with the data from the API
      setTrendingMovies(data.Search.slice(0, 3));
      console.log(trendingMovies);
    };
    fetchData();
    //Dependenies array is empty, so this effect will only run once after the initial render
  }, []);
  return (
    <div>
      {trendingMovies?.map((movie) => (
        <TrendingMovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}

export default Home;

//rfce is the shortcut to add a basic syntax to the react component as it shouldn't be left empty
