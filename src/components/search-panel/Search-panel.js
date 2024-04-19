import React from 'react'; 
import { useContext } from 'react';
import { Context } from '../../Context/Context';
import './Search-panel.css'

function SearchPanel() {
  const { state, dispatch } = useContext(Context);

  const searchGetValue = (e) => {
    dispatch({ type: "SEARCH_GET_VALUE", payload: e.target.value })
  }
  return (
    <input onChange={searchGetValue} value={state.term} type='text' className='form-control search-input' placeholder='kinolarni qidirish' />
  );
}

export default SearchPanel;