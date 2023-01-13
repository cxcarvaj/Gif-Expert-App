import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    const onAddCategory = ( newCategory ) => {

        if ( categories.includes( newCategory )){

            return alert(`Category: ${newCategory} already exists!`)
        };
        setCategories( [newCategory, ...categories] );
        // setCategories( (categories) => [...categories, 'New Game'] );
    }

    return (
        <>
            {/* Title */}
            <h1>GifExpertApp</h1>
            {/* Input */}

            <AddCategory 
                // setCategories = { setCategories }
                onNewCategory = { onAddCategory }
            />

            {/* List of Gif */}
            {/* <button onClick = { onAddCategory }> Add new Category </button> */}
            <ol>
                { categories.map( (category) => {
                    return <li key = { category }> { category } </li>
                }) }
            </ol>
                {/* Gif Item */}

        </>
    );
};
