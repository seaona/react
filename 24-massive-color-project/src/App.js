import React, { Component } from 'react';
import { Route, Routes, useParams, useLocation, useNavigate } from 'react-router-dom';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
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

function PaletteListWrapper(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();

  return (
    <PaletteList
      {...props}
      location={location}
      navigate={navigate}
      params={params}
    />
  );
}

function SingleColorPaletteWrapper() {
  const { paletteId, colorId } = useParams();

  const palette = seedColors.find(palette => palette.id === paletteId);
  if (!palette) {
    return <h1>Palette not found</h1>;
  }

  const generatedPalette = generatePalette(palette);
  return <SingleColorPalette colorId={colorId} palette={generatedPalette} />;
}

class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route
            path="/palette/new"
            element={<NewPaletteForm/>}
          />
          <Route
            path="/"
            element={<PaletteListWrapper palettes={seedColors}/>}
          />
          <Route 
            path="/palette/:id"
            element={<PaletteWrapper/>}
          />
          <Route
           path="/palette/:paletteId/:colorId"
           element={<SingleColorPaletteWrapper />}
          />
        </Routes>
      </div>
    );
  }

}

export default App;
