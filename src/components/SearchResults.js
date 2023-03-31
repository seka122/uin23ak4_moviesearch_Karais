import React from 'react';


export default function SearchResults(props) {
  return (
    <>
      <input onChange={(event) => {props.setSearchValue(event.target.value)}} placeholder="Search..."/>
    </>
  );
};    