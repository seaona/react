import React from 'react';

function Navbar(props) {
    const { dogs } = props;
    return (
        <div>
            {dogs.map(dog => (
                <button>{dog.name}</button>
            ))}
        </div>
    )
}

export default Navbar;