import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Details() {
  const movieDetailList = useSelector((store) => store.genres);

  return (
    <>
      <h1 class="bg-black font-semibold text-2xl text-indigo-500 font-serif antialiased pb-8 pt-4">Movie Details</h1>
      <div class="bg-black">
        <img class="mx-auto container px-4 w-96 flex justify-center items-center" src={movieDetailList[0]?.poster} />
        <h2 class="inline-flex pt-14 font-extrabold text-2xl antialiased ext-base leading-normal text-gray-500 dark:text-white mt-2">
          {movieDetailList[0]?.title}
        </h2>
        <p class="pt-12 pb-6 font-semibold ext-base leading-normal text-gray-500 dark:text-white mt-2 flex items-center justify-center">
          {movieDetailList[0]?.description}
        </p>
        {movieDetailList.map((movie, index) => {
          return (
            <div class="pb-4 ext-base leading-normal text-gray-500 dark:text-white mt-2" key={index}>
              Genre: {movie?.name}
            </div>
          );
        })}
        <a href="/">
          <button class=" bg-purple-600 text-white px-4 py-2 mb-8 rounded-md text-1xl font-medium hover:bg-purple-800 transition duration-300">
            Back
          </button>
        </a>
      </div>
    </>
  );
}

export default Details;
