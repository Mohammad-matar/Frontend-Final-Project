import React from 'react'
import 'react-multi-carousel/lib/styles.css';
import Slider from '../../Component/Slider';
import { SliderData } from '../../Component/Slider/SliderData';
import ImageSlider from '../../Component/Slider/ImageSlider';
import homeimage from '../../Images/homeimage.png'
import './style.css'




export default function Home() {
    return (<>
        <div class='homeimage' >
            <img src={homeimage} />
            <div className='overlay'>
                <p> <h1>Description of our sells </h1> <br />
                    Lorem Ipsum is simply dummy text of the printing and <br />
                    typesetting industry. Lorem Ipsum has been the industry's<br /> standard dummy text ever since the 1500s,
                    when an unknown <br />printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>
        </div >
        <div className='special-items'>
            <h1 className='text'> <i>Special Items</i> </h1>
        </div>
        <ImageSlider slides={SliderData} />
    </>
    )
}
