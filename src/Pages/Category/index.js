import imgbg from '../../Images/imgbg.jpg';
import smartwatch2 from '../../Images/smartwatch2.png'
import React from 'react';
import './style.css'

export default function Category() {
    return (<>
        <div className='cat-background'>
            <div className='border-image'>
                <img src={imgbg} className='img-title' />
            </div>
            <h2 className='cat-title'> Categories</h2>
            <div className='card-flex'>
                <div class="card">
                    <img src={smartwatch2} alt="Denim Jeans" />
                    <h1>Tailored Jeans</h1>
                    <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
                    <button>View the Products</button>
                </div>
                <div class="card">
                    <img src={smartwatch2} alt="Denim Jeans" />
                    <h1>Tailored Jeans</h1>
                    <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
                    <button>View the Products</button>
                </div>
                <div class="card">
                    <img src={smartwatch2} alt="Denim Jeans" />
                    <h1>Tailored Jeans</h1>
                    <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
                    <button>View the Products</button>
                </div>
                <div class="card">
                    <img src={smartwatch2} alt="Denim Jeans" />
                    <h1>Tailored Jeans</h1>
                    <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
                    <button>View the Products</button>
                </div>

            </div>
        </div>
    </>

    )
}
