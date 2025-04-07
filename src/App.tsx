import React from 'react';
import Banner from './components/Banner';
import UploadTool from './components/UploadTool';
import PhotoDisplay from './components/PhotoDisplay';
import VlogDisplay from './components/VlogDisplay';

export default function App() {
  return (
    <div className="App">
      <Banner />
      <UploadTool />
      <PhotoDisplay />
      <VlogDisplay />
    </div>
  );
} 