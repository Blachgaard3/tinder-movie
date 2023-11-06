import React, { useState, useEffect } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';

function SwipePage() {
  const [movies, setMovies] = useState([]);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const genreParam = ''; // Tilføj eventuelt genreparameter her
        const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTMxMTIzYjhkNzYyODdiYjYzOGYyMDYxYzZjOWIyZSIsInN1YiI6IjY1MzRlZjM4NDJkODM3MDEwYmE5MDc5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nQxMi8CDd0PrswV2ukwd9QoO4faupkSrnIs0hHpi9no'; // Erstat med din TMDB API-nøgle
    
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc${genreParam}&api_key=${apiKey}`
        );
    
        const data = await response.json();
    
        console.log('API Response:', data); // Log API-svaret
    
        const fetchedMovies = data.results;
    
        console.log('Fetched movies:', fetchedMovies); // Log de hentede film
    
        setMovies(fetchedMovies);
      } catch (error) {
        console.error('Fejl ved hentning af film:', error);
      }
    };

    fetchMovies();
  }, []); // Tom dependency array betyder, at denne useEffect kun køres ved opstart

  console.log('Movies:', movies);

  const handleYesClick = () => {
    setOpenModal(true);
  };

  const handleNoClick = () => {
    setCurrentMovieIndex(prevIndex => prevIndex + 1);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <div className="app">
      <div className='tinder-header'>
        <IconButton className='header-icons' fontSize='large'>
          <ArrowBackIcon fontSize='large' />
        </IconButton>
      </div>

      <div className='card-container'>
        <div className='gradiant'></div>
        {movies.length > 0 ? (
          movies.map(movie => (
            <div className="swipe" key={movie.id}>
              <div style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w300${movie.poster_path})` }} className='card'>
                <h2>{movie.title}</h2>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <div className='bottomButtons'>
        <IconButton className='no' onClick={handleNoClick}>
          <ThumbDownIcon fontSize='large' />
        </IconButton>

        <IconButton className='yes' onClick={handleYesClick}>
          <ThumbUpIcon fontSize='large' />
        </IconButton>

        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby='matchModal'
        >
          <div className='modalBox'>
            <div className='modalBanner'>
              <h2 className='modalTitel'>MATCH</h2>
              <button className='matchKnap' onClick={handleCloseModal}>Se Match</button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default SwipePage;