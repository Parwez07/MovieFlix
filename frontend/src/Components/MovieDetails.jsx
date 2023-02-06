import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate, useParams } from "react-router-dom";
import { api_key } from "../config";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlinePlayCircle,
} from "react-icons/ai";
import Loader from "./Loader";
import { useDispatch, useSelector } from "react-redux";
import { addremoveFav } from "../redux/action/action";

function MovieDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const [movie, setMovie] = useState({});
  const [liked, setLiked] = useState(false);
  const catagory = "movie";

  const { user } = useSelector((state) => state.user);

  const handleAddRemove = () => {
    if (user && movie.id && movie.poster_path && movie.title)
      dispatch(
        addremoveFav(movie.id, movie.poster_path, movie.title, catagory)
      );
    else navigate("/login");
  };

  useEffect(() => {
    const getMovie = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=${api_key}`
      );
      setMovie(data);
    };
    getMovie();

    if (user) {
      user.favorites.forEach((elem) => {
        if (elem.movieId == params.id) setLiked(true);
      });
    }
  }, [params.id, user, dispatch]);

  return movie && movie.poster_path ? (
    <div className="movies">
      <Button
        onClick={() => navigate(-1)}
        className="mx-4"
        variant="outline-success"
      >
        Go Back
      </Button>
      <div className="flex justify-content-center">
        <img
          className="poster"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="poster"
        />
      </div>
      <br />
      <Card
        style={{ background: "black" }}
        className="m-auto text-light mt-card"
      >
        <Card.Header as="h5">Movie Id : {movie.id}</Card.Header>
        <Card.Body>
          <Card.Title>Movie Name : {movie.title}</Card.Title>
          <Card.Text>Movie Overview : {movie.overview}</Card.Text>
          <Button
            onClick={() => navigate("/player")}
            style={{ marginRight: "20px" }}
            variant="outline-success"
          >
            <AiOutlinePlayCircle size={24} /> Play Now
          </Button>
          <Button
            onClick={handleAddRemove}
            variant={liked ? "success" : "outline-success"}
          >
            {liked ? (
              <span>
                <AiFillHeart size={24} /> Liked
              </span>
            ) : (
              <span>
                <AiOutlineHeart size={24} /> Like{" "}
              </span>
            )}
          </Button>
        </Card.Body>
      </Card>
    </div>
  ) : (
    <Loader />
  );
}

export default MovieDetails;
