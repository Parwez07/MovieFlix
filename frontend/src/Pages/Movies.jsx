import axios from "axios";
import Form from "react-bootstrap/Form";
import React, { useEffect, useState } from "react";
import MoviesRow from "../Components/MoviesRow";
import { api_key } from "../config";
import Loader from "../Components/Loader";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [moviesData, setMoviesData] = useState([]);
  const [genres, setGenres] = useState([]);
  const [genre, setGenre] = useState(28);

  useEffect(() => {
    const getMovies = async () => {
      const {
        data: { results },
      } = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&page=all`
      );
      setMovies(results);
    };
    getMovies();
  }, []);

  //for custome
  useEffect(() => {
    //fetch genres
    const fetchGenres = async () => {
      const {
        data: { genres: res },
      } = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`
      );

      setGenres(res);
    };

    fetchGenres();
    // movies by genres
    const fetchMoviesbyGenre = async () => {
      const {
        data: { results },
      } = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${genre}`
      );
      setMoviesData(results);
    };

    fetchMoviesbyGenre();
  }, [genre]);

  return movies && movies.length > 0 ? (

    <div className="movies">
      <div>
        <br />
        <Form.Select
          className="m-auto custom"
          aria-label="Default select example"
          onChange={(e) => setGenre(e.target.value)}
        >
          {genres &&
            genres.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
        </Form.Select>
        <MoviesRow title={"Custom Results"} type="movie" movies={moviesData} />
      </div>
      <MoviesRow
        title={"Popular Movies"}
        type="movie"
        movies={movies.slice(0, 9)}
      />
      <MoviesRow
        title={"Top in Action"}
        type="movie"
        movies={movies.slice(9, 15)}
      />
      <MoviesRow
        title={"Top in Romance"}
        type="movie"
        movies={movies.slice(15, 18)}
      />

      
    </div>
  ) : (
    <Loader />
  );
};

export default Movies;
