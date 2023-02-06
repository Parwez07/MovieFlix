import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { api_key } from "../config";
import MoviesRow from "../Components/MoviesRow";
import Loader from "../Components/Loader";

const Tvshows = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const {
        data: { results },
      } = await axios.get(
        `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}`
      );
      setMovies(results);
    };
    getMovies();
  }, []);

  return movies && movies.length > 0 ? (
    <div className="movies">
      <MoviesRow
        title={"Popular Shows"}
        type="tv"
        movies={movies.slice(0, 9)}
      />
      <MoviesRow
        title={"Trending Shows"}
        type="tv"
        movies={movies.slice(9, 18)}
      />
    </div>
  ) : (
    <Loader />
  );
};

export default Tvshows;
