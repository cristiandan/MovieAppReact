import React from 'react';
import Search from 'grommet/components/Search';
import { Link } from 'react-router-dom';
import debounce from '../utils/debounce';
import Movie from './Movie';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.searchInputChange = debounce((input) => { props.searchMovies(input.target.value); }, 500);
    this.onClickMovie = this.onClickMovie.bind(this);
  }
  onClickMovie(id) {
      this.props.router.push('/movie/' + id);
  }
  render() {
    let moviesList;
    if (this.props.searchResults && this.props.searchResults.results) {
      moviesList = this.props.searchResults.results.map(item => (<Movie 
          key={item.id}
          id={item.id}
          poster_path={item.poster_path}
          title={item.title}
          overview={item.overview}
          onClickMovie={this.onClickMovie}/>
      ));
    } else {
      moviesList = "";
    }
    return (
      <div>
        <Search placeHolder='Search'
          inline={true}
          size='large'
          onDOMChange={this.searchInputChange} />
          {moviesList}
        <Link to="/"> Go back to homepage </Link>
      </div>
    );
  }
}

export default SearchPage;