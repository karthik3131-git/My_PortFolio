import React, { useRef } from 'react'
import './WorkExperiance.css'
import { WORK_EXPERIENCE } from '../../utilis/data'
import ExperianceCard from './ExperianceCard/ExperianceCard'
import Slider from 'react-slick'

const WorkExperiance = () => {
    const slideRef = useRef();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const slideRight = () =>
    {
        slideRef.current.slickNext();
    }
    const slideLeft = () =>
    {
        slideRef.current.slickPrev();
    }

    return (
        <section className='work-experiance-container'>
            <h5>Work Experiance</h5>
            <div className='work-experiance-content'>
                <div className='arrow-right' onClick={slideRight}>
                    <span className='material-icons-outlined'>chevron_right</span>
                </div>
                <div className='arrow-left' onClick={slideLeft}>
                    <span className='material-icons-outlined'>chevron_left</span>
                </div>
                <Slider ref={slideRef} {...settings}>
                    {
                        WORK_EXPERIENCE.map((item) =>
                            <ExperianceCard key={item.title} details={item} />
                        )
                    }
                </Slider>
            </div>
        </section>
    )
}

export default WorkExperiance
