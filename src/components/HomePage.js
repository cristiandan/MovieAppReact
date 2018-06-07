import React from 'react';
// import {Link} from 'react-router';
// import { withRouter } from 'react-router-dom';
import Movie from './Movie';

const HomePage = (props) => {
  const { movies, history } = props;
  const onClickMovie = (id) => {
      history.push('/movie/' + id);
  };
  let moviesList = movies.moviesList.map(item => (<Movie 
      key={item.id}
      id={item.id}
      poster_path={item.poster_path}
      title={item.title}
      overview={item.overview}
      onClickMovie={onClickMovie}/>
  ));

  return (
    <div>
      <h1>Home</h1>

      <h2>Popular Movies Now</h2>
      <div>
        {moviesList}
      </div>
    </div>
  );
};

export default HomePage;
