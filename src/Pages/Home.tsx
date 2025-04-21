import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import TitleCards from '../Components/TitleCards'
import styled from 'styled-components'
import Footer from '../Components/Footer'

const CardsContainer = styled.div`
    padding-left: 5%;
`


function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <TitleCards /> */}

      <CardsContainer className="more-cards">
        <TitleCards title={"Only on Netflix"} />
        <TitleCards title={"Top Picks For You"}/>
        <TitleCards title={"Upcomming Thrills"}/>
        <TitleCards title={"Only on Netflix"}/>
      </CardsContainer>

      <Footer />
      


    </div>
  )
}

export default Home
