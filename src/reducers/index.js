// Set up your root reducer here...
 import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import moviesReducer from "./moviesReducer";
import movieDetailsReducer from './movieDetailsReducer';
import movieSearchReducer from './movieSearchReducer';

 export default combineReducers({
     routing: routerReducer,
     movies: moviesReducer,
     movieDetails: movieDetailsReducer,
     searchResults: movieSearchReducer,
 });