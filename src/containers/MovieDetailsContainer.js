import { connect } from 'react-redux';
import MovieDetails from '../components/MovieDetails';
import { fetchMovieDetails } from '../actions/actions';

const mapStateToProps = (state) => {
    return {
        movieDetails: state.movieDetails,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadDetails: (id) => {
            dispatch(fetchMovieDetails(id));
        },
    };
};

const MovieDetailsContainer = connect(
    mapStateToProps,  
    mapDispatchToProps,  
)(MovieDetails);

export default MovieDetailsContainer;