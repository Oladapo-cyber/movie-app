/* eslint-disable react/prop-types */

const MovieCard = ({ movie }) => {
  console.log(movie);
  return (
    <div className="flex flex-col gap-4 hover:cursor-pointer bg-slate-100/10 p-5 rounded-lg">
      <img src={``} className="h-64 rounded-xl" alt="" />
      <div className="flex flex-col text-sm">
        <h2 className=" font-bold">{movie.title}</h2>
        <span className="text-xs text-slate-200">
          rating | {movie.release_date}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
