import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';


describe('Tests on the useFetchGifs hook', () => {

    const category = 'Harry Potter';

    test('should return the initial state', () => {

        const { result } = renderHook( () => useFetchGifs( category ) );

        
        const { images, isLoading } = result.current;

        expect( images ).toEqual([]);
        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();

    });

    test('should return a list of images and isLoading in false', async () => {

        const { result } = renderHook( () => useFetchGifs( category ) );

        await waitFor(
            () => {
                const { isLoading } = result.current;
                expect( isLoading ).toBeFalsy();
            }
        );


        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();

    })

});