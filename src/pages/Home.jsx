import React from "react";
import Main from "../components/Main";
import MovieSliderRow from "../components/MovieSliderRow";
import { endPoints } from "../services/endpoints";

const Home = () => {
  return (
    <div>
      <Main />
      <div></div>
      <MovieSliderRow
        fetchTitle={"Top Trending"}
        fetchURL={endPoints.requestTrending}
      />
      <MovieSliderRow
        fetchTitle={"Popular"}
        fetchURL={endPoints.requestPopular}
      />
      <MovieSliderRow
        fetchTitle={"Top Rated"}
        fetchURL={endPoints.requestTopRated}
      />
      <MovieSliderRow
        fetchTitle={"Upcoming"}
        fetchURL={endPoints.requestUpcoming}
      />
      <MovieSliderRow
        fetchTitle={"Horror"}
        fetchURL={endPoints.requestHorror}
      />
    </div>
  );
};

export default Home;
