import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import MovieList from "../MovieList/MovieList";

function Details() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  const movieDetailList = useSelector((store) => store.genre);

  // {movieDetailList.map(({list}))}
  return (
    <>
      <h1>Movie Details</h1>
      <div>
        {movieDetailList.map()}
        <MovieList />
        {/* <button onClick={}>Back to Movies</button> */}
      </div>
    </>
  );
}

export default Details;
