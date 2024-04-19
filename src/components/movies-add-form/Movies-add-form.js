import React, { useContext, useState } from 'react';
import { Context } from '../../Context/Context';
import './Movies-add-form.css';

function MoviesAddForm() {
  const [movieState, setMovieState] = useState({
    movieName: '',
    movieViews: '',
  });

  const { _, dispatch } = useContext(Context);
  
  const addInputValState = (e) => {
    setMovieState(prevState => ({...prevState, [e.target.name]: e.target.value}))
  }
  
  const movieAddForm = (e) => {
    e.preventDefault()
    if(movieState.movieName === '' || movieState.movieViews === '') return

    const { movieName, movieViews } = movieState;
    const payload = { movieName, movieViews };
    dispatch({ type: "MOVIE_ADD_FORM", payload })

    setMovieState({
      movieName: '',
      movieViews: '',
    })
  }
  
  const { movieName, movieViews } = movieState;
  return (
    <div className='movies-add-form'>
      <h3>Yangi kino qo'shish</h3>
      <form className='add-form d-flex' onSubmit={movieAddForm}>
        <input value={movieName} onChange={addInputValState} name='movieName' type='text' className='form-control new-post-label' placeholder='Qanday kino?' />
        <input value={movieViews} onChange={addInputValState} name='movieViews' type='number' className='form-control new-post-label' placeholder="Necha marotaba ko'rilgan?" />
        <button type='submit' className='btn btn-outline-dark'>Qo'shish</button>
      </form>
    </div>
  );
}

export default MoviesAddForm;