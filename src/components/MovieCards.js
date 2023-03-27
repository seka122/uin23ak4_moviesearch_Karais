import React from "react";
import "./MovieCard.scss";

export default function MovieCard(props) {
  return (
    <div
      onClick={() => {
        props.getMovieData(props.movie);
      }}
      className="result-item-poster"
    >
      <div
        className="image-info"
        style={{
          backgroundImage: `url(${props.movie.Poster})`,
        }}
      >
        {props.movie.Poster === "N/A" ? "No image" : ""}
      </div>

      <button
        onClick={() => {
          props.getMovieData(props.movie);
        }}
        className="btn_info"
      >
        Movie Info
      </button>
    </div>
  );
}
