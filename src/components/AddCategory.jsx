import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ categories, onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');

    const onSubmit = ( event ) => {
        event.preventDefault();

        const newInputValue = inputValue.trim();

        if ( newInputValue.length <= 1 ) return;

        // setCategories( (categories) => [inputValue, ...categories] );
        onNewCategory( newInputValue );
        setInputValue('');
    }

    const handleInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    return (
        <form onSubmit={ onSubmit } aria-label = "form">
            <input
                type = 'text'
                placeholder = 'Search a Gif'
                value = { inputValue }
                onChange = { handleInputChange }
            />
        </form>
    )

};

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
};