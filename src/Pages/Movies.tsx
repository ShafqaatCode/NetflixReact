import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navbar from '../Components/Navbar';

const Container = styled.div`

padding: 80px 20px;
 `;
const SectionTitle = styled.h2` margin: 30px 0 15px; color: #fff; `;
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

const Movies = () => {
  const [movieData, setMovieData] = useState({
    popular: [],
    topRated: [],
    upcoming: []
  });

  const fetchMovies = async (category: string) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}&language=en-US&page=1`);
    const data = await res.json();
    return data.results || [];
  };

  useEffect(() => {
    const loadMovies = async () => {
      const [popular, topRated, upcoming] = await Promise.all([
        fetchMovies("popular"),
        fetchMovies("top_rated"),
        fetchMovies("upcoming")
      ]);
      setMovieData({ popular, topRated, upcoming });
    };
    loadMovies();
  }, []);

  const renderSection = (title: string, movies: any[]) => (
    <>
      <SectionTitle>{title}</SectionTitle>
      <ScrollList>
        {movies.map((movie) => (
          <div className="card" key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} />
            <p>{movie.title}</p>
          </div>
        ))}
      </ScrollList>
    </>
  );

  return (
    <div>
        <Navbar />
    
    <Container>
      {renderSection("Popular Movies", movieData.popular)}
      {renderSection("Top Rated Movies", movieData.topRated)}
      {renderSection("Upcoming Movies", movieData.upcoming)}
    </Container>
    </div>
  );
};

export default Movies;
