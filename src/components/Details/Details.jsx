import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Details() {
  const movieDetailList = useSelector((store) => store.genres);

  return (
    <>
      <h1>Movie Details</h1>
      <div>
        <img src={movieDetailList[0]?.poster} />
        <h2>{movieDetailList[0]?.title}</h2>
        <p>{movieDetailList[0]?.description}</p>
        {movieDetailList.map((movie, index) => {
          return <div key={index}>{movie?.name}</div>;
        })}
        <Link to="/">Back</Link>
      </div>
    </>
  );
}

export default Details;
