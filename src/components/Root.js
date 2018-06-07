import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import HomePage from '../containers/HomePageContainer';
import NotFoundPage from '../components/NotFoundPage';
import SearchPage from '../containers/SearchPageContainer';
import MovieDetails from '../containers/MovieDetailsContainer';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div>
          <BrowserRouter>
            <div>
              <App />
              <Switch>
                  <Route exact path="/" component={HomePage}/>
                  <Route exact path="/search" component={SearchPage}/>
                  <Route exact path="/movie/:id" component={MovieDetails} />
                  <Route component={NotFoundPage}/>
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
};