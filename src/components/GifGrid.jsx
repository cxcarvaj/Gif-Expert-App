import { useState, useEffect } from 'react';


import { GifGridItem } from './GifGridItem';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
    }

    useEffect( () => {
        
        getImages();
           
    }, []);

    return (
        <>
            <h3> { category } </h3>
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