
import {useState,useEffect}from "react";
import MovieCard from "./MovieCard";
import './App.css';
import SearchIcon from './search.svg';
// f66a79d5:api key
const API_URL ='http://www.omdbapi.com?apikey=f66a79d5';
// const movie1 ={
//   "Title": "Spiderman the Verse",
//   "Year": "2019–",
//   "imdbID": "tt12122034",
//   "Type": "series",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BNjA2NmZhOGEtZTQ5OS00MDI0LTg4N2UtYTRmOTllM2I2NDlhXkEyXkFqcGdeQXVyNTU4OTE5Nzc@._V1_SX300.jpg"
// }
  

const App = () =>{
  const [movies,setMovies]=useState([]);
  const [searchterm ,setsearchterm]=useState('');
  const searchmovies = async(title)=>{
    const response= await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }
  useEffect(()=>{
searchmovies('spiderman');
  },[]);
    return(
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
         placeholder="search movies"  
         value={searchterm}
          // 
          onChange={(e) => setsearchterm(e.target.value)}/>
         <img src={SearchIcon} alt="search"
          // onClick ={() =>{}}
          onClick={() => searchmovies(searchterm)}/>
        
      </div>
      {
        movies?.length >0 
        ?( <div className="container">
        {movies.map((movie) => (<MovieCard movie={movie}/>
        ))}
        </div>):(
          <div className="empty">
            <h2>no movies found</h2>
          </div>
        )
      }
     
        {/* <div className="movie">
          <div>
            <p>{movie1.Year}</p>
          </div>
          <div>
            <img src={movie1.poster !=='N/A' ? movie1.poster:'https://via.placeholder.com/400'} alt="movie1.Title"/>
          </div>
          <div>
            <span>{movie1.Type}</span>
            <h3>{movie1.Title}</h3>
          </div>
        </div> */}
      
    </div>
    );
}
export default App;
