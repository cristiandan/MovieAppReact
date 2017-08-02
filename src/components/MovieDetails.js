import React from 'react';
import Image from 'grommet/components/Image';
import { IMAGE_URL, YOUTUBE_VIDEO_URL } from '../constants/endpoints';
import { Link } from 'react-router';

class MovieDetails extends React.Component {
    componentWillMount() {
        this.props.loadDetails(this.props.routeParams.id);
    }
    render() {
        console.log('pp', this.props);
        let content;
        if (this.props.movieDetails
            && this.props.movieDetails.movieDetails
            && this.props.movieDetails.movieDetails.id === parseInt(this.props.routeParams.id)) {
            const details = this.props.movieDetails.movieDetails;
            
            let video = "";

            if (this.props.movieDetails.movieDetails.videos &&
                this.props.movieDetails.movieDetails.videos.results &&
                this.props.movieDetails.movieDetails.videos.results.length > 0) {
                    const url = YOUTUBE_VIDEO_URL + this.props.movieDetails.movieDetails.videos.results[0].key;
                    video = (
                        <iframe width="420" height="315" src={url}>
                        </iframe>
                    )
                }

            content = (<div>
                <h2>
                    {details.title}
                </h2>
                <div>
                    Rating: {details.vote_average}
                </div> <br/>
                <div>
                    Overview: {details.overview}
                </div> <br/>
                <div>
                    Link: <a href={details.homepage}>{details.title}</a>
                </div> <br/>
                <Image src={IMAGE_URL + details.poster_path} /> <br/>
                {video} <br/>
            </div>
            );
        } else {
            content = (<div>
                Loading
                </div>);
        }
        return (<div>
            {content}
            <Link to="/"> Go back to homepage </Link>
        </div>);
    }
}

export default MovieDetails;