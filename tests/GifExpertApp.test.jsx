import { render, screen, fireEvent } from '@testing-library/react';

import { GifExpertApp } from "../src/GifExpertApp";

describe('Tests on <GifExpertApp />', () => {

    const defaultCategory = 'The Office';
    
    jest.spyOn(window, 'alert').mockImplementation(() => {});

    test('should allow new categories', () => {
        
        const newCategory = 'Spider-Man'

        render( <GifExpertApp /> );

        const targetInput = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        
        fireEvent.input(targetInput, { target: { value: newCategory } });
        fireEvent.submit( form );
        
        
        expect( window.alert ).not.toHaveBeenCalled();
        
        const categories = screen.getAllByRole('heading', { level: 3 });

        expect( categories.length ).toBe(2);

    });

    test('should avoid duplicated categories', () => {

        render( <GifExpertApp /> );

        const targetInput = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(targetInput, { target: { value: defaultCategory } });
        fireEvent.submit( form );

        expect( window.alert ).toHaveBeenCalledTimes(1);
        
        expect( window.alert ).toHaveBeenCalledWith(`Category: ${defaultCategory} already exists!`);
        
        const categories = screen.getAllByRole('heading', { level: 3 });

        expect( categories.length ).toBe(1);

    });


});