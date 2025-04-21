
import hero_banner from '../../src/assets/hero_banner.jpg'
import hero_title_img from '../../src/assets/hero_title.png'
import play_icon from '../../src/assets/play_icon.png'
import info_icon from '../../src/assets/info_icon.png'
import styled from 'styled-components'
import TitleCards from './TitleCards'

const HeroContainer = styled.div`
    position: relative;
`

const HeroImg = styled.img`
    width: 100%;
    
    mask-image: linear-gradient(to right, transparent, black 65%);
    -weblet-mask-image: linear-gradient(to right, transparent, black 75%);
`
const HeroCaption = styled.div`
    position: absolute;
    width: 100%;
    /* background-color: red; */
    bottom: 0;
    padding-left: 6%;

    img.banner-img{
        width: 90%;
        max-width: 450px;
        margin-bottom: 30px;
    }

    p{
        max-width: 700px;
        font-size: 17px;
        margin-bottom: 20px;
    }


`

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 50px;

    .btn img{
        width: 25px;
        
        /* text-align: center; */

    }

    button{
        /* border: 2px solid red; */
        border: none;
        outline: none;
        padding: 8px 20px;
        display: inline-flex;
        align-items: center;
        /* text-align: center; */
        gap: 10px;
        font-size: 15px;
        font-weight: 600;
        background:white;
        border-radius: 4px;
        cursor: pointer;
    }
    button.dark-btn{
    color: #fff;
    background: #6d6d6eb3;

        &:hover{
            background-color: #ffffffbf;
        }
    }

    

`

function Hero() {
    return (
        <>
            <HeroContainer className='hero'>
                <HeroImg src={hero_banner} alt="" className='banner-img' />
                <HeroCaption className='hero-caption'>
                    <img src={hero_title_img} alt="" className='banner-img' />
                    <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immoral enemy.</p>
                    <ButtonContainer className="hero-btns">
                        <button className='btn'><img src={play_icon} alt="Play Button" /> Play</button>
                        <button className='dark-btn btn'><img src={info_icon} alt="Info Button" />More Info</button>
                    </ButtonContainer>
                    <TitleCards />
                </HeroCaption>

            </HeroContainer>
           
        </>
    )
}

export default Hero
