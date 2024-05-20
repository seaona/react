import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar(props) {
    const dogLinks = props.dogs.map(dog => (
        <li className='nav-item' key={dog.name}>
            <NavLink to={`/dogs/${dog.name}`} className='nav-link'>
                {dog.name}
            </NavLink>
        </li>
    ));
    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <NavLink className='navbar-brand' to='/dogs' >
                    Dog App
                </NavLink>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                <span className='navbar-toggler-icon' />
                </button>
                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav mr-auto'>
                        <li className='nav-item'>
                            <NavLink to='/dogs' end className='nav-link'>Home</NavLink>
                        </li>
                        {dogLinks}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;