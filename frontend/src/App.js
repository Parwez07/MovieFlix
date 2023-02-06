import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MovieDetails from "./Components/MovieDetails";
import TVDetails from "./Components/TVDetails";
import Account from "./Pages/Account";
import Home from "./Pages/Home";
import Liked from "./Pages/Liked";
import Login from "./Pages/Login";
import Movies from "./Pages/Movies";
import Player from "./Pages/Player";
import Register from "./Pages/Register";
import Tvshows from "./Pages/Tvshows";
import { getUser } from "./redux/action/action";

function App() {
  const dispatch = useDispatch();
  const { authenticated } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tv" element={<Tvshows />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/tv/:id" element={<TVDetails />} />
        <Route path="/liked" element={authenticated ? <Liked /> : <Login />} />
        <Route
          path="/account"
          element={authenticated ? <Account /> : <Login />}
        />
        <Route path="/player" element={<Player />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
