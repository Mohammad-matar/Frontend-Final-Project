import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Background from '../../Component/Background'
import './style.css'

export default function Cart() {
    const [cart, setCart] = useState({});
    const [order, setOrder] = useState({ quantity: 1 });
    const [isLoading, setIsLoading] = useState(true);
    const [isSent, setIsSent] = useState(false);
    const params = useParams();
    const navigate = useNavigate()



    useEffect(() => {
        getCart();
    }, [])

    const getCart = async () => {
        await axios.get(`http://localhost:3000/api/products/${params.cartID}`)  
            .then(res => {
                setCart(res.data.response);
                setIsLoading(false);
                console.log(res)
            })
            .catch(err => console.log(err))
    }

    const addanOrder = () => {
        let data = { ...order, product_id: params.cartID }
        axios
            .post(`http://localhost:3000/api/orders`, data)
            .then((res) => {
                setOrder({});
                console.log(res);
                setIsSent(true)
            })
            .catch((err) => console.log(err));
    };

    const handleChange = (e) => {
        setOrder({ ...order, [e.target.name]: e.target.value });
        console.log(order)
    };

    return (<>
        <Background />
        {isSent ? <div className='sent_message'><p>The order has been sent successfully</p>
            <button className='place-order-btn' onClick={() => navigate(`/products`)} >
                Go to Product</button></div> : <><div className='cart-form'>

                    <div className='cart-inputs'>
                        <div className='cart-inputs-flexing'>
                            <label>Full Name
                                <input type='text' placeholder='enter your full name' name='full_name' onChange={handleChange} />
                            </label>
                        </div>
                        <div className='cart-inputs-flexing'>
                            <label>Email
                                <input type='email' placeholder='enter your email' name='email' onChange={handleChange} />
                            </label>
                        </div>
                        <div className='cart-inputs-flexing'>
                            <label>Phone Number
                                <input type='tel' placeholder='enter your phone number' name='phone_number' onChange={handleChange} />
                            </label>
                        </div>
                        <div className='cart-inputs-flexing'>
                            <label>Address
                                <input type='text' placeholder='enter your location' name='location' onChange={handleChange} />
                            </label>
                        </div>
                    </div>

                    {isLoading ? <>is loading...</> : <div className='cart-buying-item'>

                        <div className='cart-desc'>
                            <h1 className='cart-name'>{cart.name}</h1>
                            <h2 > {cart.category_id.category_name}</h2>
                            <h3 > {cart.description} </h3>
                            <h2 > Price : $ {cart.price * order.quantity}</h2>
                            <h3 className='set-quatity-price'>Quantity :
                                <input type='number' field='quantity' min={1} defaultValue={1} name="quantity" onChange={handleChange} />
                            </h3>

                        </div>
                        <div className='cart-buying-img'>
                            <img src={`http://localhost:3000/uploads/${cart.image}`} />
                        </div>

                    </div>}

                </div>
            <div className='cash-on-delivery'>
                <h2>
                    Cash On Delivery
                </h2>
            </div>
            <div className='cart-btn-placeorder'>
                <button className='place-order-btn' onClick={addanOrder} >
                    Place Oder
                </button>
            </div></>}

    </>
    )
}
