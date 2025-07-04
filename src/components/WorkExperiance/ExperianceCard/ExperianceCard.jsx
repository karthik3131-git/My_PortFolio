import React from 'react'
import './ExperianceCard.css'

const ExperianceCard = ({ details }) => {
    return (
        <div className='work-experiance-card'>
            <h6>{details.title}</h6>
            <div className='work-duration'>{details.date}</div>
            <ul>
                {details.responsibilities.map((item) =>
                    <li key={item}>{item}</li>
                )}
            </ul>

        </div>
    )
}

export default ExperianceCard
