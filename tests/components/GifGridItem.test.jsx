import { GifGridItem } from "../../src/components/GifGridItem";
import { render } from "@testing-library/react";

describe("Tests in <GifGridItem />", () => {
    test('should match with the snapshot', () => {


        const { container } = render(<GifGridItem title = { 'The Office' } />);


        expect( container ).toMatchSnapshot();

    });
});