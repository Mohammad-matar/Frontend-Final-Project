import React from 'react'
import homeimage from '../../Images/homeimage.png'
import './style.css'
export default function Home() {
    return (
        <div class='homeimage'>
            <img src={homeimage} />
            <div className='overlay'>
                <h1>Hello Matarov</h1>
            </div>
        </div>

    )
}
