import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function BundleDB() {

    const [bundledb, setBundledb] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getBundledb();

    }, [])

    const getBundledb = async () => {
        await axios.get(`http://localhost:3000/api/bundles`)
            .then(res => {
                setBundledb(res.data.response);
                setIsLoading(false);
            })
    }

    return (<>
        <h2> Bundle Table</h2>
        <div className='add-btn-btn'>
            <button className='add-dashboard-btn'> Add </button>
        </div>
        <table className="table">
            <thead>
                <tr className="table-head">
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {isLoading ? <>is loading...</> : bundledb.map(data => {
                    return (
                        <tr className="table-row" >
                            <td><img className='image_cart' src={`http://localhost:3000/uploads/${data.image}`} /></td>
                            <td>{data.name}</td>
                            <td>{data.price} $</td>
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
