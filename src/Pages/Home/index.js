import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'react-multi-carousel/lib/styles.css';
import Slider from '../../Component/Slider';
import ImageSlider from '../../Component/Slider/ImageSlider';
import homeimage from '../../Images/homeimage.png'
import './style.css'
import Footer from '../../Component/Footer';




export default function Home() {
    const [bundles, setBundles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getBundles();
    }, [])


    const getBundles = async () => {
        await axios.get('http://localhost:3000/api/bundles')
            .then(res => {
                setBundles(res.data.response);
                setIsLoading(false)
            })
            .catch(err => { console.log(err) })
    }
    return (<>
        <div className='homeimage' >
            <img src={homeimage} />
            <div className='overlay'>
                <p> <h1>Description of our sells </h1>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>
        </div >
        <div className='special-items'>
            <h1 className='text'> <i>Special Items</i> </h1>
        </div>
        {isLoading ? <>is Loading ...</> : <ImageSlider slides={bundles} />}

        <Footer />  
    </>
    )
}
