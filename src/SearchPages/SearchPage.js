import React, { useEffect, useState } from 'react';
import SearchResult from './components/SearchResults/SearchResults';
import './SearchPages.scss';
import Fetch from 'Fetch';


export default function SearchPages() {
    const [searchData, setSearchData] = useState("");

    useEffect(() => {
      callApiInitialMovie();
      }, []);
}

const callApiInitialMovie = () => {
  const promise = Fetch({
    method: "GET",
    url: "https://www.omdbapi.com/?apikey=f7402ede&s=James+Bond&type=movie",
  });


promise
.then((res) => {
  setSearchData(res.data);
})
.catch((error) => {
  console.log("Search error", error);
});
;


const closeModal = () => {
  setIsShowPopup((prevState) => !prevState);
};

return (
  <main id="search">
    <SearchForm getSearchKeyWord={getSearchKeyWord} />
    <SearchResult searchData={searchData} getMovieData={getMovieData} />
    <MovieDetailPopup
      isShowPopup={isShowPopup}
      movieDetail={movieDetail}
      closeModal={closeModal}
    />
  </main>
);
}
