import { FETCH_MOVIES_SEARCH_SUCCESS } from '../actions/actions';
import initialState from './initialState';

export default function movieSearchReducer(state = initialState.searchResults, action) {
    switch (action.type) {
        case FETCH_MOVIES_SEARCH_SUCCESS:
            return {
                ...state,
                results: action.data.results,
                loading: false,
            };
        default:
            return state;
    }
}
