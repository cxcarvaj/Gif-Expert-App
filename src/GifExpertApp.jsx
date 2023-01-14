import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['The Office']);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) {

            return alert(`Category: ${newCategory} already exists!`)
        };
        setCategories([newCategory, ...categories]);
        // setCategories( (categories) => [...categories, 'New Game'] );
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                onNewCategory={onAddCategory}
            />

            {
                categories.map((category) => (
                    <GifGrid 
                        key={category}
                        category={category}
                    />
                ))
            }

        </>
    );
};
