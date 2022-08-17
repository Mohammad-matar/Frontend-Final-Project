import './style.css'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Order() {
    const [order, setOrder] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        getOrder();
    }, [])

    const getOrder = async () => {
        await axios.get(`http://localhost:3000/api/orders`)
            .then(res => {
                setOrder(res.data.response);
                setIsLoading(false);
            })
            .catch(err => console.log(err))
    }

    return (<>
        <h2> Orders </h2>
        <div className='add-btn-btn'>
            <button className='add-dashboard-btn'> Add </button>
        </div>
        <table className="table">
            <thead>
                <tr className="table-head">
                    <th>Image</th>
                    <th>Name</th>
                    <th>email</th>
                    <th>Location</th>
                    <th>phone_number</th>
                </tr>
            </thead>
            <tbody>

                {isLoading ? <>is loading...</> : order.map(data => {
                    return (
                        <tr className="table-row" >
                            <td><img className='image_cart' src={`http://localhost:3000/uploads/${data.image}`} /></td>
                            <td>{data.full_name}</td>
                            <td>{data.email}</td>
                            <td>{data.location} $</td>
                            <td>{data.phone_number}</td>
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
