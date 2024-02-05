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
    test('verify broken image is not present in the Url', () => {
        const {getByAltText}=(render(<App />))
        expect(getByAltText).not.toContainEqual("https://picsum.photos/id/601/1600/900.jpg")
        expect(getByAltText).not.toContainEqual("https://picsum.photos/id/624/1600/900.jpg")
        expect(getByAltText).not.toContainEqual("https://picsum.photos/id/632/1600/900.jpg")
        expect(getByAltText).not.toContainEqual("https://picsum.photos/id/636/1600/900.jpg")
        expect(getByAltText).not.toContainEqual("https://picsum.photos/id/644/1600/900.jpg")   
        expect(getByAltText).not.toContainEqual("https://picsum.photos/id/647/1600/900.jpg")
   })
})