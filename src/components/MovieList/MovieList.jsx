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
    <main class="bg-blue-300">
      <h1 class="text-4x1 py-6 font-bold underline bg-blue-300 pt-5">Movie List</h1>
      <section className="movies">
        {movies.map((movie) => {
          return (
            <div
              onClick={() => {
                handleDetail(movie.title);
              }}
              key={movie.id}
            >
              <h3 class="font-bold font-sans pt-5 ">{movie.title}</h3>
              <img class="flex-wrap py-4 pl-20 cursor-pointer outline-black " src={movie.poster} alt={movie.title} />
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default MovieList;
