import React, { Component } from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, useParams } from 'react-router-dom';
import Navbar from "./Navbar";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import whiskey from "./images/whiskey.jpg";
import tubby from "./images/tubby.jpg";
import hazel from "./images/hazel.jpg";
import "./App.css";

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  };
  render() {
    const GetDog = ({ dogs }) => {
      const { name } = useParams();
      const currentDog = dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase());
      return <DogDetails dog={currentDog} />
    }

    return (
      <div>
        <Routes>
          <Route
            path='/dogs'
            element={<DogList dogs={this.props.dogs}/>}
          />
          <Route
            path='/dogs/:name'
            element={<GetDog dogs={this.props.dogs} />}
          />
        </Routes>
      </div>
    );
  }
}

export default App;