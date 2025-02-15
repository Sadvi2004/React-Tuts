import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Profile() {
    return (
        <div>
            <Link to="/profile/myaccount">account</Link>
            <Link to="/profile/mysettings">settings</Link>
            <Outlet />
        </div>
    )
}

export default Profile