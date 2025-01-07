import React from 'react'
import HomeSlideCard from './HomeSlideCard'
const SlideCards = ()=>{
    const slideCardsData = [
        {
            image: './images/1.webp',
            imgAltText: 'Person 1',
            personName: 'Muddassir',
            designation: 'CTO',
            badges: ['Product' , 'Illustrator']
        }
    ]
    
    return (
    <div style={{display: 'flex' , gap: '10px', margin: '10px'}}>
        {
            slideCardsData.map((cardData, index) =>(
                <HomeSlideCard 
                key={index}
                image={cardData.image}
                imgAltText={cardData.imgAltText}
                personName={cardData.personName}
                designation={cardData.designation}
                badges={cardData.badges}
                />
            ))
        }

    </div>
)

}
export default SlideCards;