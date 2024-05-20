import React from 'react';
import { Route, Routes, useParams, Navigate } from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';

function CustomRoutes(props) {
    const GetDog = ({ dogs }) => {
        const { name } = useParams();
        const currentDog = dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase());
        return <DogDetails dog={currentDog} />
    }

    return (
        <Routes>
            <Route
            path='/dogs'
            element={<DogList dogs={props.dogs}/>}
            />
            <Route
            path='/dogs/:name'
            element={<GetDog dogs={props.dogs} />}
            />
            <Route path='*' element={<Navigate to='/dogs' />} />
      </Routes>
    )
}

export default CustomRoutes;