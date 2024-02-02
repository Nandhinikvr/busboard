import React from "react"; // import React (to provide access to TSX)
import './photoViewer.css' // importing css file

export function Photo2() {    // declare and export new function called 'PhotoViewer'
    
    return (                
        <div>    
            <p className="paraText2"> Sample Test</p>             
        </div>
    );
}

const brokenImages = [
    1, 24, 32, 36, 44, 47
];

function getImageUrls() {
    const urls = [];

    for (let i = 0; i < 50; i++) {
        if (!brokenImages.includes(i)) {
            const imageNumberString = i.toString().padStart(2, '0');
            urls.push(`https://picsum.photos/id/6${imageNumberString}/1600/900.jpg`)
        }
    }

    return urls;
}

export const imageUrls = getImageUrls();
