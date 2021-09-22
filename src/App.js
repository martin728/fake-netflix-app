import React, { useEffect, useState } from 'react';
import Movie from './components/Movie';

const SHOW_API = 'https://api.tvmaze.com/shows';

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(SHOW_API)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setMovies(data);
      })
  }, [])
  return (
    <div className="movie-container">
      <div className="logo">
        <img src="https://static.wixstatic.com/media/2cd43b_721ed550d5a3413093d098e223acad2a~mv2.png/v1/fill/w_320,h_156,q_90/2cd43b_721ed550d5a3413093d098e223acad2a~mv2.png" alt="logo" />
      </div>
      {movies.length > 0 && movies.map(movie => (
        <Movie key={movie.id} {...movie} />
      ))}
    </div>
  );
}

export default App;
