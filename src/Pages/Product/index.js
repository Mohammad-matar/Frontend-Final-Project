import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Background from '../../Component/Background'
import './style.css'

export default function Products() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getProduct();
    }, [])

    const getProduct = async () => {
        await axios.get('http://localhost:3000/api/products')
            .then(res => {
                setProducts(res.data.response);
                setIsLoading(false);
            })
            .catch(err => { console.log(err) })
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

    return (
        <>
            <Background />
            <div className='product-container'>
                {isLoading ? <> is loading...</> : products.map((product) => {
                    return (
                        <div className="card" key={product._id}>
                            <img src={`http://localhost:3000/uploads/${product.image}`} alt="Products" className='product-img-card' />
                            <h1>{product.name}</h1> <br />
                            <p>{product.description}</p> <br />
                            <h3 className='product-price'>Price :${product.price}</h3>
                            <button onClick={() => handleAddToCart(product)} > Add To Card</button>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
