import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const history = useNavigate();

    const handleLogin = () => {
        alert("LOGGED IN");
        history(`/food/salmon`);
    }

    const handleBack = () => {
        window.history.back();
    }

    return (
        <div>
            <button onClick={handleLogin}>Log In</button>
            <button onClick={handleBack}>Go back</button>
        </div>
    )
}

export default Navbar;