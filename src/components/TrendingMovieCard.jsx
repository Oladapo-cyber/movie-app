/* eslint-disable react/prop-types */

import { FaAngleLeft, FaAngleRight, FaPlay, FaYoutube } from "react-icons/fa";

// TrendingMovieCard component displays trending movie information in a card format
function TrendingMovieCard({ movie, handleScroll }) {
  return (
    <div className="relative w-[73rem] flex items-center text-[#e2e2e2] rounded-xl">
      <button className="absolute top-4 left-5 px-4 py-1 rounded-2xl bg-slate-200/20">
        Now Trending 🔥
      </button>
      {/* Movie poster image */}
      <img
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        className="w-full object-cover rounded-3xl h-[30rem]"
        alt=""
      />
      <div className="absolute bottom-0 w-full p-4 flex items-end justify-between">
        <div>
          <div className="gap-2 flex items-center">
            {/* {movie.genres.map((genre, index) => (
              <span
                key={index}
                className="text-xs bg-slate-200/20 px-2 py-1 rounded-2xl"
              >
                {genre}
              </span>
            ))} */}
          </div>
          <div className="mt-2 flex flex-col items-start gap-3">
            <h2 className="text-3xl font-bold mt-2">{movie.title}</h2>
            <p className="text-sm w-[50%] pb-5">{movie.overview}</p>
          </div>
          {/* The "*" selector is used to target everything that falls under the container where the
           styling is applied, example below where more than one button need certain similar styling. */}
          <div className="mt4 flex gap-4 items-center *:rounded-2xl *:py-1 *:px-3">
            <button className="bg-white text-black flex items-center gap-2">
              <FaPlay />
              Watch Now
            </button>
            <button className="flex items-center gap-2 bg-gray-500/50 border border-white">
              <FaYoutube />
              Trailer
            </button>
          </div>
        </div>

        <div className="flex items-center *:bg-slate-300/40 gap-3 *:rounded-full *:p-4 *:justify-between ">
          <button onClick={() => handleScroll("left")}>
            <FaAngleLeft />
          </button>
          <button onClick={() => handleScroll("right")}>
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TrendingMovieCard;
