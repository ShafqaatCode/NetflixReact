import { useEffect, useState } from 'react'
import Logo from '../../src/assets/logo.png'
import SearchIcn from '../../src/assets/search_icon.svg'
import BellIcon from '../../src/assets/bell_icon.svg'
import ProfileIcon from '../../src/assets/profile_img.png'
import DropDownIcon from '../../src/assets/caret_icon.svg'
import styled from 'styled-components'
import { logout } from '../firebase'
import { Link } from 'react-router-dom'
// import TvShows from '../Pages/TvShows'

const NavbarContainer = styled.nav`
  width: 100%;
  padding: 20px 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  font-size: 14px;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 10%, transparent);
  z-index: 10;
  /* margin-bottom:100px; */
`

const NavbarLeft = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 50px;

  img {
    width: 90px;
  }

  ul {
    display: flex;
    list-style: none;
    gap: 20px;

    @media (max-width: 768px) {
      position: absolute;
      top: 70px;
      left: 0;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.95);
      flex-direction: column;
      padding: 20px;
      display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
      gap: 15px;
    }
  }

  ul li {
    cursor: pointer;
    a {
        text-decoration: none;
        color: white;

        &:hover{
            color: gray;
        }
    }
  }
`

const NavbarRight = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  .Icons {
    width: 20px;
    cursor: pointer;
  }

  .Profile {
    border-radius: 4px;
    width: 30px;
  }

  .navbar-profile {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    position: relative;

    .dropdown {
      position: absolute;
      top: 100%;
      right: 0;
      background-color: #191919;
      padding: 15px 20px;
      border-radius: 2px;
      text-decoration: underline;
      z-index: 1;
      display: none;

      p {
        cursor: pointer;
        font-size: 13px;
        white-space: nowrap;
        border-radius: 4px;
      }
    }

    &:hover .dropdown {
      display: inline;
    }
  }

  .menu-icon {
    display: none;
    cursor: pointer;

    @media (max-width: 768px) {
      display: block;
    }
  }

  p {
    @media (max-width: 768px) {
      display: none;
    }
  }
`

const HamburgerIcon = styled.div`
  font-size: 30px;
  color: white;
`

const CloseIcon = styled.div`
  font-size: 30px;
  color: white;
`

import { getAuth, onAuthStateChanged, User } from 'firebase/auth'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const [user , setUser] = useState<User | null> (null);


  useEffect(()=>{
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
        setUser(firebaseUser);
    });

    return () => unsubscribe();
  },[]);

  return (
    <NavbarContainer>
      <NavbarLeft isOpen={menuOpen}>
        <img src={Logo} alt="Logo" />
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/tvshows">TV Shows</Link></li>
          <li><Link to="/movies">Movies</Link></li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse Language</li>
        </ul>
      </NavbarLeft>

      <NavbarRight>
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <CloseIcon>&#10005;</CloseIcon> : <HamburgerIcon>&#9776;</HamburgerIcon>}
        </div>
        <img src={SearchIcn} alt="search" className="Icons" />
        <p>Children</p>
        <img src={BellIcon} alt="bell icon" className="Icons" />
        <div className="navbar-profile">
          <img src={ProfileIcon} alt="Profile icon" className="Profile" />
          <img src={DropDownIcon} alt="dropdown ^" />

          <div className="dropdown">
            {user ?  <span>{user.displayName || user.email}</span> :  <span>Guest</span>}
            <p onClick={()=>{logout()}}>Sign Out</p>
          </div>
        </div>
      </NavbarRight>
    </NavbarContainer>
  )
}

export default Navbar
