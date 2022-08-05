import React from 'react'
import Background from '../../Component/Background'
import laptop from '../../Images/laptop.png'
import './style.css'

export default function Cart() {
    return (<>
        <Background />
        <div className='cart-form'>
            <div className='cart-inputs'>
                <div className='cart-inputs-flexing'>
                    <label>First Name
                        <input type='text' placeholder='enter your first name' />
                    </label>
                </div>
                <div className='cart-inputs-flexing'>
                    <label>Last Name
                        <input type='text' placeholder='enter your last name' />
                    </label>
                </div>
                <div className='cart-inputs-flexing'>
                    <label>Phone Number
                        <input type='tel' placeholder='enter your phone number' />
                    </label>
                </div>
                <div className='cart-inputs-flexing'>
                    <label>Address
                        <input type='text' placeholder='enter your address' />
                    </label>
                </div>
            </div>

            <div className='cart-buying-item'>
                <div className='cart-desc'>
                    <h1 className='cart-name'> Mohammad Matar </h1>
                    <h2 > 71-728-733 </h2>
                    <h2 > Tripoli El Mina </h2>
                    <h2 > Price : $ 100</h2>
                    <h3 className='set-quatity-price'>Quantity :
                        <input type='number' value='+' field='quantity' />
                    </h3>

                </div>
                <div className='cart-buying-img'>
                    <img src={laptop} />
                </div>
                <div>

                </div>
            </div>
        </div>
        <div className='cash-on-delivery'>
            <h2>
                Cash On Delivery
            </h2>
        </div>
        <div className='cart-btn-placeorder'>
            <button className='place-order-btn'>
                Place Oder
            </button>
        </div>
    </>
    )
}
