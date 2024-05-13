import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function FoodSearch() {
    const [state, setState] = useState({
        query: ''
    });

    const history = useNavigate();


    const handleChange = (e) => {
        setState({ query: e.target.value });
    }

    const handleClick = () => {
        // do something
        alert("SABED YOUR FOOD TO DB");
        
        // redirect
        history(`/food/${state.query}`);
    }

    return (
        <div>
            <h1>Search for a food!</h1>
            <input 
                type='text'
                placeholder='search for food'
                value={state.query}
                onChange={handleChange}
            />
            {/* Just going to a new route */}
            <Link to={`/food/${state.query}`}>Go</Link>
            {/* Doing something, then redirect */}
            <button onClick={handleClick}>Save New Food!</button>
        </div>
    );
}

export default FoodSearch;