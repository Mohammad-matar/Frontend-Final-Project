import React, { useState } from 'react'
import arrow2 from '../../Images/arrow2.png'
import arrow1 from '../../Images/arrow1.png'
import { useNavigate } from 'react-router-dom';

export default function ImageSlider({ slides }) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const navigate = useNavigate();

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
            <img src={arrow1} className='left-arrow' onClick={prevSlide} />
            <img src={arrow2} className='right-arrow' onClick={nextSlide} />
            {slides.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'}
                        key={index} >
                        {index === current && (
                            <>
                                <div className='description-slider'>
                                    <div>
                                        <img src={`http://localhost:3000/uploads/${slide.image}`} alt='travel image' className='image' onClick={() => navigate(`/bundles`)} />
                                    </div>
                                    <div className='desc-price-name'>
                                        <p className='slide-name'> {slide.name} </p>
                                        <p className='slide-name'>$ {slide.price}</p>
                                    </div>

                                </div>
                            </>
                        )}
                    </div>
                )
            })}
        </section>
    )
}
