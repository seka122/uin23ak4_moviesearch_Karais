import React from 'react';
//import './sass/SearchResults.scss';

export default function SearchResults(props) {
  return (
    <>
      <input onChange={(event) => {props.setSearchValue(event.target.value)}} placeholder="Search..."/>
    </>
  );
};    