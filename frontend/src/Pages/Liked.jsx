import React from "react";
import MoviesRow from "../Components/MoviesRow";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../redux/action/action";
import { useEffect } from "react";

const Liked = () => {
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      const movie = [];
      const show = [];
      user.favorites.forEach((item) => {
        if (item.catagory === "movie") {
          movie.push(item);
        } else {
          show.push(item);
        }
      });

      if (movie.length > 0) setMovies(movie);
      if (show.length > 0) setShows(show);
    }
  }, [user]);

  return (
    <div className="movies">
      {movies.length === 0 && shows.length === 0 ? (
        <div
          className="flex justify-content-center flex-column"
          style={{ height: "78vh", padding: "8px" }}
        >
          <h4 className="text-info text-center">Hey {user && user.name},</h4>
          <h3 className="text-light text-muted my-1 text-center">
            You've no Liked Shows or Movies yet !!
          </h3>
        </div>
      ) : null}
      {movies.length > 0 ? (
        <MoviesRow title={"Favorites Movies"} type="movie" movies={movies} />
      ) : null}
      {shows.length > 0 ? (
        <MoviesRow title={"Favorites Shows"} type="tv" movies={shows} />
      ) : null}
    </div>
  );
};

export default Liked;
