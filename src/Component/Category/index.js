import React from 'react';
import categoryimg from '../../Images/categoryimg.jpg';
import './style.css'

export default function Category() {
    return (
        <div className='border-image'>
            <img src={categoryimg} className='img-title' />
        </div>
    )
}
