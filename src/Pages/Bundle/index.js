import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'
import Background from '../../Component/Background';


export default function Bundle() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate()


    useEffect(() => {
        getBundle();
    }, [])

    const getBundle = async () => {
        await axios.get(`http://localhost:3000/api/bundles`)
            .then(res => {
                setData(res.data.response);
                setIsLoading(false);
            })
    }

    const handleAddToCart = (item) => {
        if (!localStorage.getItem("cart")) {
            localStorage.setItem("cart", JSON.stringify([]));
            handleAddToCart(item)
        }
        else {
            var cart = JSON.parse(localStorage.getItem("cart"));
            const result = cart.filter(cartID => cartID._id === item._id)

            if (result.length > 0) {
                alert("already in the cart")
            }
            else {
                cart.push(item);
                localStorage.setItem("cart", JSON.stringify(cart));
                alert("added successfully to the cart")
            }
        }
    }

    return (<>
        <Background />
        <div className='bundle-cart'>
            {isLoading ? <>is loading...</> : data.map(bundle => {
                return (
                    <div className="card">
                        <img src={`http://localhost:3000/uploads/${bundle.image}`} alt="Bundles" className='product-img-card' />
                        <h1>{bundle.name}</h1> <br />
                        <h3 className='product-price'>Price :$ {bundle.price}</h3>

                        <button onClick={() => {
                            handleAddToCart(bundle)
                        }}>Add To Card</button>
                    </div>
                )
            })}

        </div>
    </>
    )
}
