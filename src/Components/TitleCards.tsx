import React, { useEffect, useRef } from 'react';
import cards_data from '../../src/assets/cards/Cards_data.ts';
import styled from 'styled-components';

const TitleCardContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 30px;

  h2 {
    margin-bottom: 8px;
  }
`;

const CardList = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  &:hover {
    p {
      background-color: rgba(0, 0, 0, 0.5);
      height: fit-content;
      padding: 0 10px;
    }
  }

  img {
    width: 240px;
    border-radius: 4px;
    cursor: pointer;
  }

  .card {
    position: relative;
  }

  p {
    position: absolute;
    top: 10px;
    left: 10px;
    bottom: 10px;
  }
`;

type Card = {
  name: string;
  image: string;
};

function TitleCards({title, category}) {
  
  const CardRef = useRef<HTMLDivElement | null>(null);

 
  const handleWheel = (event: WheelEvent) => {
    event.preventDefault();
    if (CardRef.current) {
      CardRef.current.scrollLeft += event.deltaY;
    }
  };

  useEffect(() => {
    const refCurrent = CardRef.current;
    if (refCurrent) {
      refCurrent.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (refCurrent) {
        refCurrent.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <TitleCardContainer>
      <h2>{title? title : "Popular on Netflix"}</h2>
      <CardList className="card-list" ref={CardRef}>
        {cards_data.map((card: Card, index: number) => (
          <div className="card" key={index}>
            <img src={card.image} alt={card.name} />
            <p>{card.name}</p>
          </div>
        ))}
      </CardList>
    </TitleCardContainer>
  );
}

export default TitleCards;
