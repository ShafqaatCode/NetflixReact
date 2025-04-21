
import Logo from '../../src/assets/logo.png'
import SearchIcn from '../../src/assets/search_icon.svg'
import BellIcon from '../../src/assets/bell_icon.svg'
import ProfileIcon from '../../src/assets/profile_img.png'
import DropDownIcon from '../../src/assets/caret_icon.svg'
import styled from 'styled-components'


const NavbarContainer = styled.nav`
    width: 100%;
    padding: 20px 5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    font-size: 14px;
    background-image: linear-gradient(180deg, rgba(0,0,0,0.7) 10%, transparent);
    z-index: 1;


    
`


const NavbarLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
    img{
        width: 90px;
    }

    ul{
        display: flex;
        list-style: none;
        gap: 20px;
        
    }

    ul li{
        cursor: pointer;
    }
`

const NavbarRight = styled.div`
    display: flex;
    gap:20px;
    align-items: center;

    .Icons{
        width: 20px;
        cursor: pointer;
    }

    .Profile{
        border-radius: 4px;
        width: 30px;
    }

    .navbar-profile{
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
        position: relative;


        .dropdown{
            position: absolute;
            top: 100%;
            right: 0;
            width: max-content;
            background-color: #191919;
            padding:15px 20px;
            border-radius: 2px;
            text-decoration: underline;
            z-index: 1;
            display: none;
            /* background-color: red; */

            p{
                cursor: pointer;
                font-size: 13px;
            }

        }

        &:hover .dropdown{
            display: inline;
        }
    }
`



function Navbar() {
  return (
    <NavbarContainer>
      <NavbarLeft className="navbar-left">
            <img src={Logo} alt="Logo" />
            <ul>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
                <li>Browse Language</li>
            </ul>
      </NavbarLeft>
      <NavbarRight className="navbar-right">
            <img src={SearchIcn} alt="search" className='Icons'/>
            <p>Children</p>
            <img src={BellIcon} alt="bell icon" className='Icons'/>
            <div className="navbar-profile">
                <img src={ProfileIcon} alt="Profile icon" className='Profile' />
                <img src={DropDownIcon} alt="dropdown ^"  />
                
                <div className="dropdown">
                    <p>Sign Out</p>
                </div>
            </div>
      </NavbarRight>
    </NavbarContainer>
  )
}

export default Navbar
