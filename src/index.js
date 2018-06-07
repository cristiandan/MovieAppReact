import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './components/Root';

import configureStore from './store/configureStore';
require('./favicon.ico');
import './styles/styles.scss';
import { fetchDiscoverMovies } from './actions/actions';

const store = configureStore();

// Create an enhanced history that syncs navigation events with the store


render(
  <AppContainer>
    <Root store={store} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default;
    render(
      <AppContainer>
        <NewRoot store={store} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}

store.dispatch(fetchDiscoverMovies());
