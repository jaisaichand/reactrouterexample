import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className="App">
            <ul className="linkparent">
                <Link to="/">
                    <li className="linkitem">Home</li>
                </Link>
                <Link to="/shop">
                    <li className="linkitem">Shop</li>
                </Link>
                <Link to="/about">
                    <li className="linkitem">About</li>
                </Link>


            </ul>
        </div>
    );
}

export default Nav;
