import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PhotoViewer } from './photoViewer/PhotoViewer'
import { Photo2,imageUrls } from './photoViewer/photo2'


function App() {
  const impimageurls=imageUrls;
  console.log(impimageurls)
  return (
      <div>
          <h1>React Photo Viewer</h1>
          <PhotoViewer src={impimageurls[0]}/>
          <Photo2 />
          
      </div>
  );
}

export default App
