import React from 'react'

import cards_data from '../../src/assets/cards/Cards_data.ts'

import styled from 'styled-components';

const TitleCardContainer = styled.div`
    
`


type Card = {
    name : string,
    image: string
}

function TitleCards() {
  return (
    <TitleCardContainer>
        <h2>Popular on Netflix</h2>
        <div className="card-list">
            {
                cards_data.map((card: Card, index: number) => {
                    return <div className='card' key={index}>
                        <img src={card.image} alt="" />
                        <p>{card.name}</p>
                    </div>
                })
            }
        </div>
    </TitleCardContainer>
  )
}

export default TitleCards
