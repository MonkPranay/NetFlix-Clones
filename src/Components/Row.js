import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

export default function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setmovies] = useState([]);
  const imagePath = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      setmovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              className={`row_poster ${isLargeRow && "row_posters_large"}`}
              src={`${imagePath}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
    </div>
  );
}
