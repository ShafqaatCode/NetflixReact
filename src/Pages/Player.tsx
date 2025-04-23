// import React from 'react'
import { useEffect, useState } from 'react';
import back_arrow_icon from '../../src/assets/back_arrow_icon.png'
import styled from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom';


const PlayerContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      position: absolute;
      top: 20px;
      left:20px;
      width: 50px;
      cursor: pointer;
    }

    iframe{
      border-radius: 10px;
      width: 70%;
      height: 70%;
    }


    @media (max-width: 786px ){
      iframe{
        margin-top: 60px;
        width: 90%;
        height: 90%;
      }
    }
`

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  margin: 10px 0;

  @media (max-width: 786px )
  {
    flex-direction: column;
    align-items: start;
    width: 90%;
    p{
      margin: 2px 0;
    }
  }
`

function Player() {

  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData, setApiDate] = useState({
    name : "",
    key: "",
    published_at: "",
    typeof: ""
  })


  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODM1ZjQxMjhkMzU1MjlkMTFkNDY3N2M1YmU0ZjE2YiIsIm5iZiI6MTc0NTI0ODc0Mi4yODgsInN1YiI6IjY4MDY2MWU2YjY1OTgyMjgxMmVlNjAyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FqeZHMkh99XVU2utxRGfkMcSQA641v4lFdJplilQPkE'
    }
  };

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiDate(res.results[0]))
    .catch(err => console.error(err));
  }, [])

  

  return (
    <div>
      <PlayerContainer>
        <img src={back_arrow_icon} onClick={()=> {navigate(-2)}} alt="" />
        <iframe title='trailer' allowFullScreen src={`https://www.youtube.com/embed/${apiData.key}`}  ></iframe>
        <Info>
          <p>{apiData.published_at.slice(0, 10)}</p>
          <p>{apiData.name}</p>
          <p>Trailer</p>
        </Info>

      </PlayerContainer>

    </div>
  )
}

export default Player
