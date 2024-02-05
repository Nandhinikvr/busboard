// import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe("My Component", () => {
    test('renders React Photo Viewer text', () => {
        const { getByText } = render(<App />);
        const textElement = getByText(/React Photo Viewer/);
        expect(textElement).toBeInTheDocument();
    })
    test('renders Select Image', () => {
        const { getByText } = render(<App />);
        const textElement = getByText(/Select Image/);

        expect(textElement).toBeInTheDocument();
    })
    test('if generates correct image URL', () => {
        console.log(render(<App />))
        // const urls = getImageUrls();
        // expect(urls[0]).toEqual('https://picsum.photos/id/601/200/300');
        // // const { getByAltText }=render(<App />);
        //        expect(getByAltText).

        
        
    })


})