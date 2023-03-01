import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

import "./MoviesGrid.css";

const moviesURl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [page,setPage]=useState(1)
 

  const getTopMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopMovies(data.results);
  };


  useEffect(() => {
    const topRateUrl = `${moviesURl}top_rated?${apiKey}&page=${page}`;
    getTopMovies(topRateUrl);
  }, [page]);
  return (
    <div className="container">
      <h2 className="title">Melhores Filmes:</h2>
      <div className="movies-container">
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
      <div id="verMais"> <button onClick={()=>{ setPage(page+1)}} >Ver mais</button></div>
    </div>
  );
};

export default Home;
