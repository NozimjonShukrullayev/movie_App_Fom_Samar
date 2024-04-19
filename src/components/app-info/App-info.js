import React from 'react';
import { useContext } from 'react';
import { Context } from '../../Context/Context';
import './App-info.css';

function AppInfo() {
  const { state } = useContext(Context);

  return (
    <div className='app-info'>
      <p className='fs-3 text-uppercase'>barcha kinolar soni: {state.data.length}</p>
      <p className='fs-4 text-uppercase'>sevimli kinolar soni: {state.data.filter(movieObj => movieObj.favourite).length}</p>
    </div>
  )
}

export default AppInfo;