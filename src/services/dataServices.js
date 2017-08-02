import fetch from 'isomorphic-fetch';
import withQuery from 'with-query';
import { API_KEY } from '../constants/auth';
import { DISCOVER_MOVIE_URL, MOVIE_DETAILS, SEARCH_MOVIE } from '../constants/endpoints';

export function fetchDiscoverMovies(params) {
    return fetch(withQuery(DISCOVER_MOVIE_URL, {
        api_key: API_KEY,
        ...params,
    }))
    .then(response => response.json());
}

export function fetchPopularDiscoverMovies() {
    return fetchDiscoverMovies({
        sort_by: 'popularity.desc',
    });
}

export function fetchMovieDetailsRequest(movieId) {
    const movieUrl = MOVIE_DETAILS + "/" + movieId;
    return fetch(withQuery(movieUrl, {
        api_key: API_KEY,
        append_to_response: 'videos',
    }))
    .then(response => response.json());
}

export function searchMoviesRequest(name) {
    return fetch(withQuery(SEARCH_MOVIE, {
        api_key: API_KEY,
        query: name,
    }))
    .then(response => response.json());
}