import React from 'react';
import { useContext } from 'react';
import { Context } from '../../Context/Context';
import { filterHandler, searchMovie } from '../../Utilities/Utility';
import MoviesListItem from '../movies-list-item/Movies-list-item';
import './Movies-list.css';

function MoviesList() {
  const { state } = useContext(Context);
  const data = filterHandler(searchMovie(state.data, state.term), state.filter);
  return (
    <ul className='movies-list'>
      {data.map(anyObj => (
        <MoviesListItem key={anyObj.id} { ...anyObj } />
      ))}
    </ul>
  )
}

export default MoviesList;