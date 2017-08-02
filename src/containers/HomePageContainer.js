import { connect } from 'react-redux';
import HomePage from '../components/HomePage';

const mapStateToProps = (state) => {
    return {
        movies: state.movies,
    };
};

const HomePageContainer = connect(
    mapStateToProps,    
)(HomePage);

export default HomePageContainer;