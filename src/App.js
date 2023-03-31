import NavBar from "./components/NavBar/NavBar";
import SearchPage from "./SearchPages/SearchPage";
import  './css/main.css'
import { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";




 function SearchResult(){
  const [results, setResults]= useState(null)
  const [SearchValue, setSearchValue] = useState('')
  
  const getMovies = async(SearchValue)=> {
  const response = await fetch(`http://www.omdbapi.com/?s=${SearchValue}&type=movie&apikey=faf55e9c`)
  const data = await response.json()
  setResults(data?.Search)
  console.log(data)
  }
  useEffect(()=>{
    if(!SearchValue) {
      getMovies('James+Bond')
    } else {
      getMovies(SearchValue)
    }
  }, [SearchValue])
  return(
    <>
    <input onChange={(event) => {setSearchValue(event.target.value)}} placeholder="Search..."/>
    <h1>movie app </h1>
    <section>
    {results?.map((result,index)=>(
      <MovieCard key={index} img={result?.Poster} year={result?.Year} title={result?.Title}></MovieCard>
    ))}
    </section>
    </>
  )
 }

function App() {
  return (
    <div className="app">
      <SearchResult/>
      <NavBar />
    </div>
  );
}

export default App;
