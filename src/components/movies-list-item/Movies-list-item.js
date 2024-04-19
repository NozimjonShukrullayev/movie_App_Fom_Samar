import React from 'react';
import { useContext } from 'react';
import { Context } from '../../Context/Context';
import './Movies-list-item.css';

function MoviesListItem(props) {
  const { movieName, movieViews, id, favourite, like } = props;
  const { _, dispatch } = useContext(Context);

  const onDelete = () => {
    dispatch({ type: "ON_DELETE", payload: id })
  }

  const toggleFavourite = (e) => {
    const payload = {
      id,
      dataAttribute: e.target.getAttribute("data-toggle")
    };
    dispatch({ type: "ON_TOGGLE_FAVOURITE", payload })
  }
  
  return (
    <li className={`list-group-item d-flex justify-content-between ${favourite && 'favourite'} ${like && 'like'}`}>
      <span onClick={toggleFavourite} className='list-group-item-label' data-toggle='like'>{movieName}</span>
      <input type='number' className='list-group-item-input' defaultValue={movieViews} />
      <div className='d-flex justify-content-center align-items-center'>
        <button type='button' className='btn-cookie btn-sm' data-toggle='favourite' onClick={toggleFavourite}>
          <i className='fas fa-cookie'></i>
        </button>
        <button type='button' className='btn-trash btn-sm' onClick={onDelete}>
          <i className='fas fa-trash'></i>
        </button>
        <i className='fas fa-star'></i>
      </div>
    </li>
  );
}

export default MoviesListItem;