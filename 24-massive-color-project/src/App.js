import React, { Component } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import Palette from './Palette';
import PaletteList from './PaletteList';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';

function PaletteWrapper() {
  const { id } = useParams();
  const palette = seedColors.find(palette => palette.id === id);
  if (!palette) {
    return <h1>Palette not found</h1>;
  }

  const generatedPalette = generatePalette(palette);
  return <Palette palette={generatedPalette} />;

}

class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route
            path="/"
            element={<PaletteList palettes={seedColors}/>}
          />
          <Route 
            path="/palette/:id"
            element={<PaletteWrapper/>}
          />
        </Routes>
      </div>
    );
  }

}

export default App;
