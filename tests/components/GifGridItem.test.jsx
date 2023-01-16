import { GifGridItem } from '../../src/components';
import { render, screen } from '@testing-library/react';

describe("Tests in <GifGrid />", () => {

    const title = 'The Office';
    const url = 'https://media.giphy.com/media/3o7TKsQ8UQY1NlC5aU/giphy.gif';

    test('should match with the snapshot', () => {


        const { container } = render( <GifGridItem
                                        title = { title }
                                        url = { url }
                                    />);

        expect( container ).toMatchSnapshot();

    });
    

    test('should show the image with the URL and the ALT text provided', () => {


        const { container } = render( <GifGridItem
                                        title = { title }
                                        url = { url }
                                    />);
        // screen.debug();
        const { src, alt } = screen.getByRole('img');

        expect( src ).toBe( url );
        expect( alt ).toBe( title );

    });

    test('should show the title in the component', () => {

        

        const { container } = render( <GifGridItem
                                        title = { title }
                                        url = { url }
                                    />);

    
        const screenTitle = screen.getByText( title );

        expect( screenTitle ).toBeTruthy();

    });
});