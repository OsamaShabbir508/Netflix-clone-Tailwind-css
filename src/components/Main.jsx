import React, { useState, useEffect } from "react";
import { baseURL } from "../utils";
import axios from "axios";
import { endPoints } from "../services/endpoints";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  const fetchPopular = async () => {
    try {
      const responce = await axios.get(`${endPoints.requestPopular}`);
      setMovies(responce.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  const truncateStr=(str,num)=>{
    return str?.length? `${str.slice(0,num)} .....`:'';
  }
  useEffect(() => {
    fetchPopular();
  }, []);

  return (
    <div>
      <div className="w-full h-[550px]">
        <div className="h-full w-full">
          <img
            className="w-full h-full object-cover"
            src={`${baseURL}${movie?.backdrop_path}`}
          />
        </div>
        <div className="absolute w-full top-[25%] ml-5">
            <h1 className=" text-3xl text-white font-bold mb-3">{movie?.title}</h1>
            <div>
            <button className="px-5 py-2 cursor-pointer bg-gray-200 border-gray-400 border-[1px] font-bold">Play</button>
            <button className="mx-2 px-4 py-2 cursor-pointer bg-black border-gray-400 border-[1px]  text-white">Watch Later</button>
            </div>
            <p className="text-gray-300">Release Date: {movie?.release_date}</p>
            <p className="text-gray-50 my-3 pr-4 w-full  md:w-1/2 xl:w-1/3 ">{truncateStr(movie?.overview,150)}</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
