import Container from "react-bootstrap/Container";
import MovieCard from "./MovieCard";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

function MoviesRow({ title, movies, type }) {
  return (
    <Container className="p-2 my-2">
      <h2 style={{ marginLeft: "4rem" }} className="text-light mb-3">
        {title}
      </h2>
      <Swiper
        style={{ padding: "12px 0" }}
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          250: {
            slidesPerView: 1,
          },
          550: {
            slidesPerView: 2,
          },
          750: {
            slidesPerView: 3,
          },
        }}
      >
        {movies &&
          movies.map((item) => (
            <SwiperSlide key={item.id ? item.id : item.movieId}>
              <MovieCard
                key={item.id ? item.id : item.movieId}
                id={item.id ? item.id : item.movieId}
                type={type}
                name={
                  item.name
                    ? item.name
                    : item.original_title
                    ? item.original_title
                    : item.title
                }
                image={
                  item.image
                    ? item.image
                    : item.poster_path
                    ? item.poster_path
                    : item.poster
                }
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </Container>
  );
}

export default MoviesRow;
