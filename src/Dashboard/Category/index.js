import React, { useEffect, useState } from 'react'
import './style.css'
import axios from 'axios';


export default function DashboardCat() {

    const [category, setCategory] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getCategories();
    }, [])

    const getCategories = async () => {
        await axios.get('http://localhost:3000/api/categories')
            .then(res => {
                setCategory(res.data.response);
                setIsLoading(false);
            })
            .catch(err => { console.log(err) })
    }
    return (
        <>

            <h2> Category Table</h2>

            <div className='add-btn-btn'>
                <button className='add-dashboard-btn'> Add </button>
            </div>
            <table className="table">
                <thead>
                    <tr className="table-head">
                        <th>Image</th>
                        <th>Category name</th>
                        <th>description</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {isLoading ? <>is loading...</> : category.map((data) => {
                        return (
                            <tr className="table-row" >
                                <td><img className='image_cart' src={`http://localhost:3000/uploads/${data.image}`} /></td>
                                <td>{data.category_name}</td>
                                <td>{data.description} $</td>
                                <td>
                                    <div className='dashboard-btn'>
                                        <button className='edit-btn'> Edit</button>
                                        <button className='delete-btn'> Delete</button>
                                    </div>

                                </td>
                            </tr>
                        )
                    })}



                </tbody>



            </table>
        </>)
}
