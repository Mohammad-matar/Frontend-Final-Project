import imgbg from '../../Images/imgbg.jpg';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import './style.css'
import Footer from '../../Component/Footer'

export default function Category() {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate()

    useEffect(() => {
        getCategories();
    }, [])

    const getCategories = async () => {
        await axios.get('http://localhost:3000/api/categories')
            .then(res => {
                setCategories(res.data.response);
                setIsLoading(false);
                // setCategories(console.log(res));
            })
            .catch(err => { console.log(err) })
    }

    return (
        <>
            <div className='cat-background'>
                <div className='border-image'>
                    <img src={imgbg} alt='tech-bg' className='img-title' />
                </div>
                <h2 className='cat-title'> Categories</h2>
                <div className='card-flex'>

                    {isLoading ? <>is loading...</> : categories.map((category) => {
                        return (
                            <div className="card" key={category._id}>
                                <img src={`http://localhost:3000/uploads/${category.image}`} width="225px" height={"225px"} alt="Denim Jeans" />
                                <h1>{category.category_name}</h1>
                                <br />
                                <p>{category.description}</p>
                                <button onClick={() => navigate(`${category._id}`)}>View the Products</button>
                            </div>
                        )
                    })}
                </div>

            </div>
            <Footer />
        </>

    )
}
