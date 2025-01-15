/* eslint-disable react/prop-types */
function TrendingMovieCard({ movie }) {
  return (
    <div className="bg-red-600 w-[65rem] text-[#e2e2e2] rounded-xl p-5">
      <img
        src={movie.Poster}
        className="w-full object-cover h-[30rem]"
        alt=""
      />
      {movie?.Title}
    </div>
  );
}

export default TrendingMovieCard;
