/* eslint-disable react/prop-types */

import axios from "axios";
import { useEffect, useState } from "react";
import { options } from "../services/omdbApi";
import MovieCard from "./MovieCard";

const Recommendations = ({ id, tvPath }) => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRecommendations = async () => {
      setLoading(true); //Sets loading value to true before making the request to the API
      try {
        const url = `https://api.themoviedb.org/3/${
          tvPath ? "tv" : "movie"
        }/${id}/recommendations?language=en-US`;
        const response = await axios.get(url, options);
        console.log(response.data.results);
        setRecommendations(response.data.results.slice(0, 15));
      } catch (error) {
        console.error(error);
      }
      setLoading(false); //Sets loading to false after the request has been completed.
    };
    fetchRecommendations();
  }, [tvPath, id]);

  return (
    <div className="bg-slate-800/60 pt-[23rem] p-10 w-full ">
      <h2 className="text-2xl font-semibold">Recommended Watches</h2>

      <div className="grid grid-cols-5 mt-10 gap-4">
        {recommendations?.map((recommendation) => (
          <MovieCard
            key={recommendation.id}
            movie={recommendation}
            loading={loading}
          />
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
