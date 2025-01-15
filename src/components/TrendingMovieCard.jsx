/* eslint-disable react/prop-types */
// TrendingMovieCard component displays trending movie information in a card format
function TrendingMovieCard({ movie }) {
  return (
    // Main card container with red background and rounded corners
    <div className="bg-red-600 w-[65rem] text-[#e2e2e2] rounded-xl p-5">
      {/* Movie poster image */}
      <img
        src={movie.Poster}
        className="w-full object-cover h-[30rem]"
        alt=""
      />
      {/* Display movie title, with optional chaining in case title is undefined */}
      {movie?.Title}
    </div>
  );
}

export default TrendingMovieCard;
