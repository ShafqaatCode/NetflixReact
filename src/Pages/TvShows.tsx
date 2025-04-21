import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navbar from '../Components/Navbar';

const Container = styled.div` 
padding: 80px 20px; 
/* margin-top:40px; */


`;
const SectionTitle = styled.h2` 
margin: 30px 0 15px; color: #fff; `;
const ScrollList = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  img {
    width: 300px;
    border-radius: 6px;
    cursor: pointer;
  }

  .card {
    position: relative;

    p {
      position: absolute;
      top: 10px;
      left: 10px;
      color: white;
      font-weight: bold;
    }

    p:hover{
        background-color: rgba(0,0,0,0.5);
        padding: 7px;
    }
  }
`;

const API_KEY = "2835f4128d35529d11d4677c5be4f16b";

const TvShows = () => {
    const [tvData, setTvData] = useState({
        popular: [],
        topRated: [],
        airingToday: []
    });

    const fetchShows = async (category: string) => {
        const res = await fetch(`https://api.themoviedb.org/3/tv/${category}?api_key=${API_KEY}&language=en-US&page=1`);
        const data = await res.json();
        return data.results || [];
    };

    useEffect(() => {
        const loadData = async () => {
            const [popular, topRated, airingToday] = await Promise.all([
                fetchShows("popular"),
                fetchShows("top_rated"),
                fetchShows("airing_today")
            ]);
            setTvData({ popular, topRated, airingToday });
        };
        loadData();
    }, []);

    const renderSection = (title: string, shows: any[]) => (
        <>
            <SectionTitle>{title}</SectionTitle>
            <ScrollList>
                {shows.map((show) => (
                    <div className="card" key={show.id}>
                        <img src={`https://image.tmdb.org/t/p/w500${show.backdrop_path}`} alt={show.name} />
                        <p>{show.name}</p>
                    </div>
                ))}
            </ScrollList>
        </>
    );

    return (
        <>
            <Navbar />
            <Container>

                {renderSection("Popular TV Shows", tvData.popular)}
                {renderSection("Top Rated TV Shows", tvData.topRated)}
                {renderSection("Airing Today", tvData.airingToday)}
            </Container>
        </>
    );
};

export default TvShows;
