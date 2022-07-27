import React, { useState } from 'react'
import { SliderData } from './SliderData'
import arrow2 from '../../Images/arrow2.png'
import arrow1 from '../../Images/arrow1.png'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

export default function ImageSlider({ slides }) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    console.log(current)


    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }
    return (
        <section className='slider'>
            <img src={arrow2} className='right-arrow' onClick={nextSlide} />
            <img src={arrow1} className='left-arrow' onClick={prevSlide} />
            {SliderData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'}
                        key={index} >
                        {index === current && (
                            <img src={slide.image} alt='travel image' className='image' />

                        )}
                    </div>
                )
            })}
        </section>
    )
}