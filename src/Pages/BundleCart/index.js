import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Footer from '../../Component/Footer';
import { IoMdClose } from 'react-icons/io'
import './style.css'

export default function BundleCart() {

    const [order, setOrder] = useState({
        full_name: "",
        email: "",
        phone_number: "",
        location: ""
    });
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

    useEffect(() => {
    }, [])

    const handleDeleteFromCart = (id) => {
        var cart = JSON.parse(localStorage.getItem("cart"));
        const result = cart.filter(cartID => cartID._id !== id);
        localStorage.setItem("cart", JSON.stringify(result));
        setCart(result)
        alert("successfully removed from the cart")
    }

    const handleChange = (e) => {
        setOrder({ ...order, [e.target.name]: e.target.value });
        console.log(order)
    };

    const addanOrder = async () => {

        // get the products from the cart in local storage and add them to array 
        // from [{"_id":"62f4baaffee6e082795b71e5","name":"SmartWatch T99","description":"T99s-Women","image":"1660205743096-Bluetooth-Calls-Smartwatch-T99s-Women-Men-Smart-Watch-for-Android-IOS-Custom-Wallpaper-High-Sound-Quality.webp","price":40,"category_id":{"_id":"62f37bad33aca80e96f16389","category_name":"Samsung","description":"Samsung Models 2015-2022 ","image":"1660124077192-02_Showroom_kv_asset_product.webp","createdAt":"2022-08-10T09:34:37.203Z","updatedAt":"2022-08-10T12:16:59.932Z","__v":0},"createdAt":"2022-08-11T08:15:43.123Z","updatedAt":"2022-08-11T08:15:43.123Z","__v":0},{"_id":"62f4bcc2fee6e082795b7249","name":"SmartWatch T99","description":"T99s-Women","image":"1660206274677-best-smart-watches.webp","price":40,"category_id":{"_id":"62f37c9e33aca80e96f1638b","category_name":"iPhone","description":"iPhone Models 2018-2022 ","image":"1660124318726-csm_4_to_3_Teaser_Apple_iPhone_13_Pro_bde30ec4f8.jpg","createdAt":"2022-08-10T09:38:38.736Z","updatedAt":"2022-08-10T12:17:26.159Z","__v":0},"createdAt":"2022-08-11T08:24:34.684Z","updatedAt":"2022-08-11T08:24:34.684Z","__v":0}] to [ "62f4baaffee6e082795b71e5", "62f4bcc2fee6e082795b7249" ]
        let products = cart.map(cartelt => cartelt._id);

        // add array of id to the order body
        let data = { ...order, product_id: products }

        // send axios request
        await axios
            .post(`http://localhost:3000/api/orders`, data)
            .then((res) => {
                alert("order sent successfully");
                localStorage.setItem("cart", JSON.stringify([]));
                setCart([])
                setOrder({
                    full_name: "",
                    email: "",
                    phone_number: "",
                    location: ""
                })
            })
            .catch((err) => console.log(err));
    };

    const getTotal = () => {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            total = total + Number(cart[i].price);
        }
        return total
    }


    return (
        <>
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
                    {cart.map(cartElt => {
                        return (
                            <tr className="table-row" key={cartElt._id} >
                                <td><img className='image_cart' src={`http://localhost:3000/uploads/${cartElt.image}`} /></td>
                                <td>{cartElt.name}</td>
                                <td>{cartElt.price} $</td>
                                <td>
                                    <div className='close'>
                                        <IoMdClose onClick={() => handleDeleteFromCart(cartElt._id)} />
                                    </div>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>



            </table>

            <div className='cash-on-delivery'>
                <h4>
                    total: {getTotal()} $
                </h4>
            </div>

            <div className='checkout-info'>
                <h2>
                    Checkout Info
                </h2>
            </div>

            <div className='cart-inputs'>
                <div className='cart-inputs-flexing'>
                    <label>Full Name
                        <input type='text' placeholder='enter your full name' value={order.full_name} name='full_name' onChange={handleChange} />
                    </label>
                </div>
                <div className='cart-inputs-flexing'>
                    <label>Email
                        <input type='email' placeholder='enter your email' value={order.email} name='email' onChange={handleChange} />
                    </label>
                </div>
                <div className='cart-inputs-flexing'>
                    <label>Phone Number
                        <input type='tel' placeholder='enter your phone number' value={order.phone_number} name='phone_number' onChange={handleChange} />
                    </label>
                </div>
                <div className='cart-inputs-flexing'>
                    <label>Address
                        <input type='text' placeholder='enter your location' value={order.location} name='location' onChange={handleChange} />
                    </label>
                </div>
            </div>

            <div className='cart-btn-placeorder'>
                <button className='place-order-btn' onClick={addanOrder}>
                    Send Order
                </button>
            </div>
            <Footer />
        </>
    )
}
