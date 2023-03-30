import React from "react";
//import './Sass/MovieCards.scss';

export default function MovieCard({result, title, img, year}) {
  return (
    <article>
      <h3>{title}</h3>
      <img src={img} alt={title}/>
      <p>Utgivelse: <span>{year}</span></p>
    </article>
  );
}

