/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
  FaPlay,
  FaPlus,
  FaThumbsDown,
  FaThumbsUp,
  FaVideo,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import { options } from "../services/omdbApi";
import axios from "axios";

const MovieDetailsCard = ({ movie, absolute }) => {
  const [cast, setCast] = useState([]);
  const [hover, setHover] = useState({ index: null, show: false });

  useEffect(() => {
    const fetchCast = async () => {
      const url = `https://api.themoviedb.org/3/movie/${movie?.id}/credits`;
      console.log(movie.id);
      try {
        const response = await axios.get(url, options);
        setCast(response.data.cast.slice(0, 5));
        console.log(response.data.cast.slice(0, 5));
      } catch (error) {
        console.error(error);
      }
    };
    fetchCast();
  }, [movie?.id]);
  return (
    <div
      className={`${
        absolute ? `absolute bg-white` : `bg-green-700`
      }   flex z-10  text-black h-[29rem] w-[90%]  mt-[37rem] rounded-2xl p-4 pt-6`}
    >
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
          <button className="flex items-center gap-1 font-medium text-base bg-[#1f2630] text-white px-2 rounded-sm">
            <FaThumbsDown /> Dislike
          </button>
        </div>
      </div>
      <div className="px-6">
        <div className="flex justify-between">
          <Link
            to={
              movie?.seasons
                ? `/watch-tv/${movie?.id}`
                : `/watch-movie/${movie?.id}`
            }
            className="flex items-center gap-1 font-base text-lg bg-[#efc121] px-3 py-1 rounded-3xl"
          >
            <FaPlay /> Watch now
          </Link>

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

        <div className="flex justify-between gap-10 pr-10">
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

            <li className="flex gap-1 relative">
              <span className="font-semibold font-oswald flex flex-wrap ">
                Casts:
              </span>{" "}
              <span>
                {cast?.map((actor, index) => (
                  <div key={actor.id} className="inline space-x-6 ">
                    <span
                      className="cursor-pointer hover:underline inline-flex mr-1 flex-nowrap"
                      onMouseEnter={() => setHover({ index, show: true })}
                      onMouseLeave={() =>
                        setHover({ index: null, show: false })
                      }
                    >
                      {actor.name}
                      {index !== cast.length - 1 ? ", " : ""}
                      {hover.index === index && hover.show && (
                        <span className="bg-blur p-2 flex flex-col w-fit items-center justify-center rounded-xl font-semibold absolute top-[-6.5rem]">
                          <img
                            className="h-20 w-20 object-cover rounded-full"
                            src={`https://image.tmdb.org/t/p/original/${actor?.profile_path}`}
                            alt=""
                          />
                          {actor.character}
                        </span>
                      )}
                    </span>
                  </div>
                ))}
              </span>
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
  );
};

export default MovieDetailsCard;
