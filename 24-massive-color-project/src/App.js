import React, { Component } from 'react';
import { Route, Routes, useParams, useLocation, useNavigate } from 'react-router-dom';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';

function PaletteWrapper({ palettes }) {
  const { id } = useParams();
  const palette = palettes.find(palette => palette.id === id);
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

function SingleColorPaletteWrapper({ palettes }) {
  const { paletteId, colorId } = useParams();

  const palette = palettes.find(palette => palette.id === paletteId);
  if (!palette) {
    return <h1>Palette not found</h1>;
  }

  const generatedPalette = generatePalette(palette);
  return <SingleColorPalette colorId={colorId} palette={generatedPalette} />;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      palettes: seedColors,
    }
    this.savePalette = this.savePalette.bind(this);
  }

  savePalette(newPalette) {
    this.setState({
      palettes: [...this.state.palettes, newPalette]
    })
  }

  render() {
    return (
      <div>
        <Routes>
          <Route
            path="/palette/new"
            element={<NewPaletteForm
              savePalette={this.savePalette}
              palettes={this.state.palettes}
            />}
          />
          <Route
            path="/"
            element={<PaletteListWrapper palettes={this.state.palettes}/>}
          />
          <Route 
            path="/palette/:id"
            element={<PaletteWrapper  palettes={this.state.palettes}/>}
          />
          <Route
           path="/palette/:paletteId/:colorId"
           element={<SingleColorPaletteWrapper  palettes={this.state.palettes}/>}
          />
        </Routes>
      </div>
    );
  }

}

export default App;
