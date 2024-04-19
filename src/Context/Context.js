import { useReducer } from "react";
import { createContext } from "react";
import { v4 as uuidv4 } from 'uuid';

const initialValue = {
  data: [],
  term: '',
  filter: 'all',
}

export const Context = createContext();

const reducer = ( state = initialValue, action ) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_DATA": 
      return { ...state, data: payload }
    case "ON_DELETE":
      const deleteArr = state.data.filter(movieObj => movieObj.id !== payload);
      return { ...state, data: deleteArr }
    case "ON_TOGGLE_FAVOURITE":
      const { id, dataAttribute } = payload;
      const toggleArr = state.data.map(dataObj => {
        if(id === dataObj.id) {
          return { ...dataObj, [dataAttribute]: !dataObj[dataAttribute] };
        }
        return dataObj
      });
      return { ...state, data: toggleArr }
    case "MOVIE_ADD_FORM":
      const { movieName, movieViews } = payload;
      const newItem = { movieName, movieViews, id: uuidv4(), favourite: false, like: false };
      const newArray = [ ...state.data, newItem ];
      return { ...state, data: newArray }
    case "CHANGE_FILTER_MOVIE_TYPE": 
      return { ...state, filter: payload }
    case "SEARCH_GET_VALUE": 
      return { ...state, term: payload }
    default:
      return { state }
  }
}

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue)

  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
}

export default Provider;