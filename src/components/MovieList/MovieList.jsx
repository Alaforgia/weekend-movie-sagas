import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MovieList.css";
import { Link, useHistory } from "react-router-dom";

function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);
  const handleDetail = (action) => {
    dispatch({ type: "GET_DETAILS", payload: action });
    history.push("/details");
  };

  return (
    <main class="h-screen bg-black">
      <h1 class=" text-4x1 py-6 font-bold underline ext-base leading-normal text-gray-500 dark:text-white mt-2 pt-5">Movie List</h1>
      <section className="movies" class=" bg-black items-center justify-center grid grid-cols-6 gap-2 px-16">
        {movies.map((movie) => {
          return (
            <div
              onClick={() => {
                handleDetail(movie.title);
              }}
              key={movie.id}
            >
              <h3 class="font-bold font-sans pt-5 ext-base leading-normal text-gray-500 dark:text-white">{movie.title}</h3>
              <img
                class=" flex-wrap pb-8 pl-9 cursor-pointer outline-black hover:translate-x-1 hover:-translate-y-1 delay-50 duration-100 "
                src={movie.poster}
                alt={movie.title}
              />
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default MovieList;
