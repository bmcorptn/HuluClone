import React, { useState, useEffect } from "react";
import "./Results.css";
import VideoCard from "./VideoCard";
import axios from "./axios";
import FlipMove from "react-flip-move";

function Results(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(props.selectedOption);
      setMovies(res.data.results);
      return res;
    }
    fetchData();
  }, [props.selectedOption]);
  return (
    <div className="results">
      <FlipMove>
        {movies?.map((movie) => (
          <VideoCard movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
}

export default Results;
