import { fetchPopularDiscoverMovies, fetchMovieDetailsRequest, searchMoviesRequest } from '../services/dataServices';

/*
 * action types
 */

export const FETCH_DISCOVER_MOVIES = 'FETCH_DISCOVER_MOVIES';
export const FETCH_DISCOVER_MOVIES_REQUEST = 'FETCH_DISCOVER_MOVIES_REQUEST';
export const FETCH_DISCOVER_MOVIES_SUCCESS = 'FETCH_DISCOVER_MOVIES_SUCCESS';
export const FETCH_DISCOVER_MOVIES_ERROR = 'FETCH_DISCOVER_MOVIES_ERROR';
export const FETCH_DISCOVER_MOVIE_DETAILS = 'FETCH_DISCOVER_MOVIE_DETAILS';
export const FETCH_DISCOVER_MOVIE_DETAILS_SUCCESS = 'FETCH_DISCOVER_MOVIE_DETAILS_SUCCESS';
export const FETCH_DISCOVER_MOVIE_DETAILS_REQUEST = 'FETCH_DISCOVER_MOVIE_DETAILS_REQUEST';
export const FETCH_MOVIES_SEARCH_REQUEST = 'FETCH_MOVIES_SEARCH_REQUEST';
export const FETCH_MOVIES_SEARCH_SUCCESS = 'FETCH_MOVIES_SEARCH_SUCCESS';

/*
 * action creators
 */

export function fetchDiscoverMovies() {
  return function(dispatch) {
    dispatch(fetchDiscoverMoviesRequest());

    return fetchPopularDiscoverMovies()
      .then(data =>
        dispatch(fetchDiscoverMoviesSuccess(data))
      );
    //   .error(error => 
    //     dispatch(fetchDiscoverMoviesError(error))
    //   );
  };
}

export function fetchDiscoverMoviesRequest() {
    return {
        type: FETCH_DISCOVER_MOVIES_REQUEST
    };
}

export function fetchDiscoverMoviesSuccess(data) {
    return {
        type: FETCH_DISCOVER_MOVIES_SUCCESS,
        data,
    };
}

export function fetchDiscoverMoviesError(error) {
    return {
        type: FETCH_DISCOVER_MOVIES_ERROR,
        error,
    };
}

export function fetchMovieDetails(movieId) {
    return function (dispatch) {
        dispatch(fetchMovieDetailsStartRequest());

        return fetchMovieDetailsRequest(movieId)
            .then(data =>
                dispatch(fetchMovieDetailsSuccess(data))
            );
    };
}

export function fetchMovieDetailsSuccess(data) {
    return {
        type: FETCH_DISCOVER_MOVIE_DETAILS_SUCCESS,
        data,
    };
}

export function fetchMovieDetailsStartRequest(data) {
    return {
        type: FETCH_DISCOVER_MOVIE_DETAILS_REQUEST,
        data,
    };
}

export function searchMovies(name) {
    return function (dispatch) {
        dispatch(fetchMoviesSearchRequest());

        return searchMoviesRequest(name)
            .then(data =>
                dispatch(fetchMoviesSearchSuccess(data))
            );
    };
}

export function fetchMoviesSearchRequest() {
    return {
        type: FETCH_MOVIES_SEARCH_REQUEST,
    };
}

export function fetchMoviesSearchSuccess(data) {
    return {
        type: FETCH_MOVIES_SEARCH_SUCCESS,
        data,
    };
}