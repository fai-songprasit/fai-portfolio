import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='navbar'>
            <Link to='/home' className="nav">Home</Link>
            <Link to='/eda' className="nav">EDA-Foundations</Link>
            <Link to='/bootcamp' className="nav">EDA-Bootcamp</Link>
            <Link to='/solo' className="nav">Solo Projects</Link>
        </div>
    )
}

export default NavBar