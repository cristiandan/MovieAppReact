import { FETCH_DISCOVER_MOVIES_SUCCESS } from '../actions/actions';
import initialState from './initialState';

export default function moviesReducer(state = initialState.movies, action) {
    switch (action.type) {
        case FETCH_DISCOVER_MOVIES_SUCCESS:
            return {
                ...state,
                moviesList: action.data.results,
            };
        default:
            return state;
    }
}
