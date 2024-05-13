import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Food from "./Food";
import Meal from "./Meal";
import FoodSearch from "./FoodSearch";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes >
        <Route
          path="/food/:name"
          element={<Food/>}
        />
        <Route
          path="/food/:foodName/drink/:drinkName"
          element={<Meal/>}
        />
        <Route
          path="/"
          element={<FoodSearch/>}
        />
        {/* Catch-all route */}
        <Route path="*" element={<h1>ERROR NOT FOUND</h1>} />
      </Routes>
    </div>
  );
}

export default App;
