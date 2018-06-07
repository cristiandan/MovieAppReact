import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (
      <div>
        <Link id="homelink" to="/">Home</Link>
        {' | '}
        <Link id="searchlink" to="/search">Search</Link>
        {' | '}
        <Link id="aboutlink" to="/about">About</Link>
        <br/>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;