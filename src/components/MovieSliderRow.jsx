import React, { useEffect, useState } from "react";
import axios from "axios";
import { endPoints } from "../services/endpoints";
import { baseURLw500 } from "../utils";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const MovieSliderRow = ({ fetchTitle, fetchURL }) => {
  const [movies, setMovies] = useState([]);

  const fetch = async () => {
    try {
      const res = await axios.get(`${fetchURL}`);
      setMovies(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <h1 className="text-white text-2xl font-bold ml-5 ">{fetchTitle}</h1>
      <div className=" flex justify-center items-center flex-wrap">
        {movies?.map((movie) => {
          return (
            <div className="h-auto w-[300px] m-1 cursor-pointer inline-block relative">
              <img
                className="w-full h-full rounded-sm block"
                src={`${baseURLw500}${movie?.backdrop_path}`}
                alt={movie?.title}
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/50 opacity-0 hover:opacity-100 text-white">
                <p className=" flex  justify-center items-center h-full text-center">
                  {movie?.title}
                </p>
                <div>
                <FaRegHeart className="  absolute top-4 left-4 text-gray-300" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MovieSliderRow;
