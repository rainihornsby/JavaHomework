import React from 'react';
import {Link} from 'react-router-dom'

function Nav(props) {
    return (
        <div>
            <nav>
                <ul>
                    <Link to="/">
                    <li>Home</li>
                    </Link>

                    <Link to="/dashboard">
                    <li>Dashboard</li>
                    </Link>

                    <Link to="/about">
                    <li>About</li>
                    </Link>
                    
                    <Link to="/breakout">
                    <li>Breakout</li>
                    </Link>

                    <Link to="/tetris">
                    <li>Tetris</li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;