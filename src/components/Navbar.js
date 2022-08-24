import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = () => {

    return (
        <nav className='nav-wrapper blue darken-3'>
            <div className="container">
                <a href="_" className="brand-logo">Obi-Wan-Kenobi Facts</a>
                <ul className="right">
                    <li><Link to='/Fact1'>Highground</Link></li>
                    <li><Link to='/Fact2'>Duels</Link></li>
                    <li><NavLink to='/Fact3'>Memes</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}           

export default withRouter (Navbar)