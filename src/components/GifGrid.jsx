import PropTypes from 'prop-types';

import { GifGridItem } from './index';

import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3> { category } </h3>

            { isLoading && <p>Loading...</p> }

            <div className='card-grid'>

                { 
                    images.map( ( image ) => (
                        <GifGridItem 
                            key = {image.id} 
                            // title = {title} 
                            // url = {url}
                            { ... image }
                        />
                    ))
                }

            </div>
        </>
    )

};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}