import React from 'react'
import icon from '../../Images/icon.png'
import { Link } from 'react-router-dom'
import './style.css'

export default function Navbar() {
    return (<>
        <div className='navbar'>
            <div className='app-icon'>
                <img src={icon} className="icon-img"></img>
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="category">Products</Link></li>
                <li><Link to="contact">Contact</Link></li>
                <li><Link to="about">About</Link></li>
            </ul>

        </div>
    </>
    )
}
