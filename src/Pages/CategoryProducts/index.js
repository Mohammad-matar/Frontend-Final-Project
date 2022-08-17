import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import laptop from '../../Images/laptop.png'
import Background from '../../Component/Background'
import './style.css'
import axios from 'axios'

const CategoryProducts = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState({});
    // useparams to get the data from the url
    const params = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        getData();
    }, [])



    const getData = async () => {
        await axios.get(`http://localhost:3000/api/categories/products/${params.categoryID}`)
            .then(res => {
                setData(res.data.response[0]);
                setIsLoading(false)
            })
            .catch(err => console.log(err))
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
        <section className='category-product-section'>
            <Background />
            {isLoading ? <>is loading ...</> : <>
                <h3 className='heading'>{data.category_name}</h3>
                <div className='product-container'>
                    {data?.products?.map(product => {
                        return (
                            <div className="card" key={product._id}>
                                <img src={`http://localhost:3000/uploads/${product.image}`} alt={`${product.name}`} className='product-img-card' />
                                <h1>{product.name}</h1> <br />
                                <p>{product.description}</p> <br />
                                <h3 className='product-price'>Price : {product.price} $</h3>

                                <button onClick={() => handleAddToCart(product)}>Add To Card</button>
                            </div>
                        )
                    })}
                </div></>}

        </section>
    )
}

export default CategoryProducts