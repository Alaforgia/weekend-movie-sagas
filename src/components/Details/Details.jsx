import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import MovieList from "../MovieList/MovieList";

function Details() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch({ type: "GET_DETAILS" });
  // }, []);

  const movieDetailList = useSelector((store) => store.genres);

  // {movieDetailList.map(({list}))}
  return (
    <>
      <h1>Movie Details</h1>
      <div>
        <img src={movieDetailList[0].poster} />
        <h2>{movieDetailList[0].title}</h2>
        <p>{movieDetailList[0].description}</p>
        {movieDetailList.map((movie) => {
          return <div>{movie.name}</div>;
        })}
        {/* {movieDetailList} */}
        {/* <button onClick={}>Back to Movies</button> */}
      </div>
    </>
  );
}

export default Details;
