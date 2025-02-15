import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/profile">Profile</Link>
                    <Link to="/userform">SignUp</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar