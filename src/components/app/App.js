import React, { useState, useEffect } from 'react';
import AppFilter from '../app-filter/App-filter';
import AppInfo from '../app-info/App-info';
import MoviesAddForm from '../movies-add-form/Movies-add-form';
import MoviesList from '../movies-list/Movies-list';
import SearchPanel from '../search-panel/Search-panel';
import TextComponent from '../text-component/TextComponent';
import './App.css';
import { useContext } from 'react';
import { Context } from '../../Context/Context';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const { _, dispatch } = useContext(Context);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5')
    .then(response => response.json())
    .then(json => {
      const newArr = json.map(jsonObj => ({
        movieName: jsonObj.title, 
        movieViews: jsonObj.id * 11,
        favourite: false, 
        like: false,
        id: jsonObj.id
      }));
      dispatch({ type: 'GET_DATA', payload: newArr })
    })
    .catch(err => console.log(err))
    .finally(setIsLoading(false))
  }, []) 

  return (
    <div className='app font-monospace'>
      <div className='content'>
        <AppInfo />
        <div className='search-panel'>
          <SearchPanel />
          <AppFilter />
        </div>
        {isLoading && "Loading..."}
        <MoviesList />
        <MoviesAddForm />
        <TextComponent />
      </div>
    </div>
  );
}

export default App;