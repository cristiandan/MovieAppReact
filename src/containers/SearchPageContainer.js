import { connect } from 'react-redux';
import SearchPage from '../components/SearchPage';
import { searchMovies } from '../actions/actions';
const mapStateToProps = (state) => {
    return {
        searchResults: state.searchResults,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        searchMovies: (name) => {
            dispatch(searchMovies(name));
        },
    };
};

const SearchPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SearchPage);

export default SearchPageContainer;