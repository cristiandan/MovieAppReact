import { FETCH_DISCOVER_MOVIE_DETAILS_SUCCESS } from '../actions/actions';
import initialState from './initialState';

export default function moviesReducer(state = initialState.currentMovie, action) {
    switch (action.type) {
        case FETCH_DISCOVER_MOVIE_DETAILS_SUCCESS:
            return {
                ...state,
                movieDetails: action.data,
            };
        default:
            return state;
    }
}
