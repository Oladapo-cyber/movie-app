import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { options } from "../services/omdbApi";

import Recommendations from "../components/Recommendations";
import MovieDetailsCard from "../components/MovieDetailsCard";

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { pathname } = useLocation();
  const tvPath = pathname.includes("tv");
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const url = `https://api.themoviedb.org/3/${
        tvPath ? "tv" : "movie"
      }/${id}?language=en-US`;

      try {
        const response = await axios.get(url, options);
        setMovie(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovieDetails();
  }, [id, tvPath]);

  return (
    <div className="relative flex text-zinc-400 w-4/5 ml-[20%] bg-[#212121] flex-col items-center mt-20">
      <img
        src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
        alt=""
        className=""
      />
      <MovieDetailsCard movie={movie} absolute={true} />
      <Recommendations id={id} tvPath={tvPath} />
    </div>
  );
};

export default MovieDetails;
