import React from "react";
import "./Nav.css";
import requests from "./requests";

function Nav(props) {
  return (
    <div className="nav">
      <h2 onClick={() => props.setSelectedOption(requests.fetchTrending)}>
        Trending
      </h2>
      <h2 onClick={() => props.setSelectedOption(requests.fetchTopRated)}>
        Top Rated
      </h2>
      <h2 onClick={() => props.setSelectedOption(requests.fetchActionMovies)}>
        Action
      </h2>
      <h2 onClick={() => props.setSelectedOption(requests.fetchComedyMovies)}>
        Comedy
      </h2>
      <h2 onClick={() => props.setSelectedOption(requests.fetchRomanceMovies)}>
        Romance
      </h2>
      <h2 onClick={() => props.setSelectedOption(requests.fetchHorrorMovies)}>
        Horror
      </h2>
      <h2
        onClick={() => props.setSelectedOption(requests.fetchAnimationMovies)}
      >
        Animation
      </h2>
      <h2 onClick={() => props.setSelectedOption(requests.fetchSciFi)}>
        Sci-fi
      </h2>
      <h2 onClick={() => props.setSelectedOption(requests.fetchWestern)}>
        Western
      </h2>
      <h2 onClick={() => props.setSelectedOption(requests.fetchMystery)}>
        Mystery
      </h2>
    </div>
  );
}
export default Nav;
