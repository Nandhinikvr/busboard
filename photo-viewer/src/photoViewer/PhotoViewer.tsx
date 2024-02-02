import React from "react"; // import React (to provide access to TSX)
import './photoViewer.css' // importing css file

export function PhotoViewer(props: { src: string }) {    // declare and export new function called 'PhotoViewer'
    
    return (                
        <div>    
            <img src={props.src}  alt="Default image"></img> 

              


        </div>
    );
}

   