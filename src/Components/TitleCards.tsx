import React, { useEffect, useRef, useState } from 'react';
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
    color: white;
    font-weight: bold;
  }
`;


type Movie = {
  id: number;
  backdrop_path: string;
  original_title: string;
  name?: string; 
};


interface TitleCardsProps {
  title?: string;
  category?: string;
}

const TitleCards: React.FC<TitleCardsProps> = ({ title = "Popular on Netflix", category }) => {
  const [apiData, setApiData] = useState<Movie[]>([]);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleWheel = (event: WheelEvent) => {
    event.preventDefault();
    if (cardRef.current) {
      cardRef.current.scrollLeft += event.deltaY;
    }
  };

  useEffect(() => {
    const refCurrent = cardRef.current;
  
    const fetchData = async () => {
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?api_key=2835f4128d35529d11d4677c5be4f16b&language=en-US&page=1`
          );
          const data = await response.json();
          setApiData(data.results || []);
        } catch (error) {
          console.error("Fetch error:", error);
        }
      };
      
  
    fetchData();
  
    if (refCurrent) {
      refCurrent.addEventListener('wheel', handleWheel, { passive: false });
    }
  
    return () => {
      if (refCurrent) {
        refCurrent.removeEventListener('wheel', handleWheel);
      }
    };
  }, [category]); 
  

  return (
    <TitleCardContainer>
      <h2>{title}</h2>
      <CardList ref={cardRef}>
        {apiData.map((card) => (
          <div className="card" key={card.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
              alt={card.original_title || card.name}
            />
            <p>{card.original_title || card.name}</p>
          </div>
        ))}
      </CardList>
    </TitleCardContainer>
  );
};

export default TitleCards;
