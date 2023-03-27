import React from 'react';
import MovieCard from './components/MovieCards/MovieCards';
import './SearchResults.scss';


export default function SearchResult(props) {
    // Movie list
    const renderMovieList = () => {
      if (!props.searchData || props.searchData.Response === "False") return;
  
      return props.searchData.Search.map((movie, index) => {
        return (
          <MovieCard
            key={faf55e9c}
            movie={movie}
            getMovieData={props.getMovieData}
          />
        );
      });
    };

    return (
        <section id="search_result">
          <h1>Search Result</h1>
    
          {props.searchData.Response === "False" ? (
            <p>{props.searchData.Error}</p>
          ) : (
            ""
          )}
    
    
          <div className="result_list_container">{renderMovieList()}</div>
        </section>
      );
    }
    