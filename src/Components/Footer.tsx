
import styled from 'styled-components'
import youtube_icon from '../../src/assets/youtube_icon.png'
import twitter_icon from '../../src/assets/twitter_icon.png'
import instragram_icon from '../../src/assets/instagram_icon.png'
import facebook_icon from '../../src/assets/facebook_icon.png'



const FooterContainer = styled.div`
    padding: 30px 4%;
    max-width: 1000px;
    margin: 0 auto;

    p{
        color: gray;
        font-size: 14px;
    }

`

const FooterLinks = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin-bottom: 30px;
    list-style: none;
    cursor: pointer;


`

const FooterLi = styled.li`
    white-space: nowrap;
    width: fit-content;
    padding:0 15px;
    transition: background-color 0.5s;
    &:hover{
      background-color: rgba(66, 61, 61, 0.5);
      border-radius: 5px;
    }
`

const FooterIcons = styled.div`
    display: flex;
    gap: 20px;
    margin: 40px 0;
    /* border: 2px solid gray; */

    img{

        width: 30px;
        cursor: pointer;
    }
`

function Footer() {
  return (
    <FooterContainer>
      <FooterIcons className="footer-icons">
        <img src={facebook_icon} alt="" />
        <img src={instragram_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={youtube_icon} alt="" />
      </FooterIcons>

      <FooterLinks>
        <FooterLi>Help Center</FooterLi>
        <FooterLi>Gift Cards</FooterLi>
        <FooterLi>Media Center</FooterLi>
        <FooterLi>Investor Relations</FooterLi>
        <FooterLi>See Jobs</FooterLi>
        <FooterLi>Privacy Policy</FooterLi>
        <FooterLi>New Things</FooterLi>
        <FooterLi>Terms and Conditions</FooterLi>
        <FooterLi>Legal Notices</FooterLi>
        <FooterLi>Contact Us</FooterLi>
      </FooterLinks>

      <p>All CopyWrites are reserved by NetfFooterLix</p>
    </FooterContainer>
  )
}

export default Footer
