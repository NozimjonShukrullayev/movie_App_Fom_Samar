import React from 'react';
import { useContext } from 'react';
import { Context } from '../../Context/Context';
import './App-filter.css';

function AppFilter() {
  const { state, dispatch } = useContext(Context);

  return (
    <div className='btn-group'>
      {btnsArr.map(btn => (
        <button key={btn.btnName} onClick={() => dispatch({ type: "CHANGE_FILTER_MOVIE_TYPE", payload: btn.btnName })} className={`btn ${state.filter === btn.btnName ? "btn-dark" : "btn-outline-dark"}`} type='button'>
          {btn.label}
        </button>
      ))}
    </div>
  )
}

const btnsArr = [
  {btnName: 'all', label: 'Barcha kinolar'},
  {btnName: 'legendaryMovies', label: 'Mashhur kinolar'},
  {btnName: 'mostViewsMovies', label: "Eng ko'p ko'rilgan kinolar"},
];

export default AppFilter;