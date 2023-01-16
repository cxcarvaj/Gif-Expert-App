import { AddCategory } from "../../src/components/AddCategory";
import { render, screen, fireEvent } from "@testing-library/react";

describe('Tests in <AddCategory />', () => {

    test('should change the value of the text field', () => {

        render( <AddCategory onNewCategory={ ()=>{} }/> );

        const targetInput = screen.getByRole('textbox');

        fireEvent.input( targetInput, { target: { value: 'The Office' } } );

        expect( targetInput.value ).toBe( 'The Office' );


    });

    test('should invoke the onNewCategory if the input has a value', () => {

        const inputValue = 'The Office';
        const onNewCategory = jest.fn();
        
        render( <AddCategory onNewCategory={ onNewCategory }/> );

        const targetInput = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( targetInput, { target: { value: inputValue } } );
        fireEvent.submit( form );

        expect( targetInput.value ).toBe( '' );

        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );

    });
    test('should not invoke the onNewCategory if the input is empty', () => {

        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory }/> );

        const form = screen.getByRole('form');

        fireEvent.submit( form );

        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();

    });
});