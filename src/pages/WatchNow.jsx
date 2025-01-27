import { useEffect, useState } from "react";
import MovieDetailsCard from "../components/MovieDetailsCard";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { options } from "../services/omdbApi";

const WatchNow = () => {
  const [movie, setMovie] = useState(null);
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const [loading, setLoading] = useState(true);

  const { pathname } = useLocation();
  const tvPath = pathname.includes("tv");
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const url = `https://api.themoviedb.org/3/${
        tvPath ? "tv" : "movie"
      }/${id}?language=en-US`;
      setLoading(true);
      try {
        const response = await axios.get(url, options);
        setMovie(response?.data);
        console.log(response?.data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    fetchMovieDetails();
    console.log(tvPath, id);
  }, []);

  return (
    <div className="h-screen w-screen ml-[20%] flex items-center justify-center bg-orange-500">
      WatchNow
      <iframe
        src={`https://vidsrc.to/embed/movie/${id}`}
        className="w-full h-full"
      />
      <MovieDetailsCard movie={movie} />
    </div>
  );
};

export default WatchNow;
