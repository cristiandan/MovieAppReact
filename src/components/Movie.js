import React from 'react';
import { IMAGE_URL } from '../constants/endpoints';
import Image from 'grommet/components/Image';
import Box from 'grommet/components/Box';

const Movie = (item) => {
    return (<div>
            <Box direction="row"
                justify="center"
                align="center"
                wrap={true}
                pad="medium"
                margin="medium"
                colorIndex="neutral-2">
                    
                <Image onClick={() => item.onClickMovie(item.id)} src={IMAGE_URL + item.poster_path} />
                <h3 onClick={() => item.onClickMovie(item.id)}>{item.title}</h3>
                <p onClick={() => item.onClickMovie(item.id)}>{item.overview}</p> 
            </Box>
            <br/>
        </div>)
}

export default Movie;