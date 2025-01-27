import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { options } from "../services/omdbApi";
import {
  FaPlay,
  FaPlus,
  FaThumbsDown,
  FaThumbsUp,
  FaVideo,
} from "react-icons/fa";
import Recommendations from "../components/Recommendations";

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
    <div className="relative flex text-zinc-400 w-4/5 ml-[20%] bg-[#212121] flex-col items-center mt-10">
      <img
        src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
        alt=""
        className=""
      />
      <div className="absolute flex z-10 bg-slate-200 text-black h-[27rem] w-[90%]  mt-[37rem] rounded-2xl p-4 pt-6">
        <div className="flex flex-col ">
          <img
            src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
            alt=""
            className="h-[15rem] object-cover h rounded-xl"
          />

          <p className="pt-2">
            <span className="text-xl text-[#1baf69] font-semibold">
              {movie?.vote_average}
            </span>
          </p>
          <div className="py-[1.5px] px-15 bg-[#1baf69] "></div>
          <div className="flex mt-2 gap-3">
            <button className="flex items-center gap-1 font-medium text-base text-white bg-[#1baf69] px-4 rounded-sm">
              <FaThumbsUp /> Like
            </button>
            <button className="flex items-center gap-1 font-medium text-base bg-[#444444] text-white px-2 rounded-sm">
              <FaThumbsDown /> Dislike
            </button>
          </div>
        </div>
        <div className="px-6">
          <div className="flex justify-between">
            <button className="flex items-center gap-1 font-base text-lg bg-[#efc121] px-3 py-1 rounded-3xl">
              <FaPlay /> Watch now
            </button>

            <button className="flex items-center gap-1 font-base text-lg bg-[#eeeeee] px-3 py-1 rounded-3xl">
              <FaPlus /> Add to favorites
            </button>
          </div>
          <p className=" text-4xl pt-3">{movie?.title}</p>
          <div className="flex gap-3 mt-2">
            <button className="flex items-center rounded-md justify-center border-2 border-gray-500 p-1 gap-2">
              <FaVideo /> Trailer
            </button>
            <button className="font-bold rounded-md border-2 border-gray-500 p-1 text-lg">
              HD
            </button>
          </div>
          <p className="pt-3">{movie?.overview}</p>

          <div className="flex justify-between pr-10">
            <ul className="mt-3">
              <li>
                <span className="text-base font-semibold">Released: </span>
                {movie?.release_date}
              </li>
              <li className="mt-1">
                <span className="text-base font-semibold">Genre: </span>
                {movie?.genres.map((genre) => (
                  <span key={genre.id}>{genre.name},</span>
                ))}
              </li>
            </ul>

            <ul className="mt-3 pr-32">
              <li>
                <span className="text-base font-semibold">Runtime: </span>
                {movie?.runtime} Mins
              </li>
              <li className="mt-1">
                <span className="text-base font-semibold">Country: </span>
                {movie?.production_countries.map((country) => (
                  <span key={country.id}>{country.name},</span>
                ))}
              </li>
              <li className="mt-1">
                <span className="text-base font-semibold">Production: </span>
                {movie?.production_companies.map((company) => (
                  <span key={company.id}>{company.name},</span>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Recommendations id={id} tvPath={tvPath} />
    </div>
  );
};

export default MovieDetails;
