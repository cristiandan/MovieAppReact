import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './containers/HomePageContainer';
import NotFoundPage from './components/NotFoundPage';
import SearchPage from './containers/SearchPageContainer';
import MovieDetails from './containers/MovieDetailsContainer';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="search" component={SearchPage}/>
    <Route path="movie/:id" component={MovieDetails} />
    <Route path="*" component={NotFoundPage}/>
  </Route>
);