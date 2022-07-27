import React from 'react'
import Group2 from '../../Images/Group2.png'
import { Link } from 'react-router-dom'
import './style.css'

export default function Navbar() {
    return (<>
        <div className='navbar'>
            <div className='app-icon'>
                <img src={Group2}></img>
                <h1> Matarov</h1>
            </div>
                <ul>
                    <li><Link to="home">Home</Link></li>
                    <li><Link to="products">Products</Link></li>
                    <li><Link to="contact">Contact</Link></li>
                    <li><Link to="about">About</Link></li>
                </ul>

        </div>
    </>
    )
}
