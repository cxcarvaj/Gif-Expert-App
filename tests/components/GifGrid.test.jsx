import { GifGrid } from "../../src/components";
import { render, screen } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Tests in <GifGrid />", () => {

    const category = 'The Flash';

    test('should show the loading message', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        
        render( <GifGrid category = { category }/>);

        const loadingMessage = screen.getByText('Loading...');

        
        expect( loadingMessage ).toBeTruthy();
        expect( category ).toBeTruthy();

    });

    test('should show the items/images loaded by useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                url: 'https://localhost/any/thing.jpg',
                title: 'Any title'
            },
            {
                id: '123',
                url: 'https://localhost/any/thing_2.jpg',
                title: 'Any title 2'
            }, 
            {
                id: 'XYZ',
                url: 'https://localhost/any/thing_3.jpg',
                title: 'Any title 3'
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        
        render( <GifGrid category = { category }/>);
        
        const images = screen.getAllByRole('img');

        expect( images.length ).toBeGreaterThan(0);
        expect( images.length ).toBe(3);

    });
});