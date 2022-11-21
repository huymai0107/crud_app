import React from 'react'
import { Nav, NavbarContainer, NavLogo, NavMenu, NavLinks, MobileIcon, NavItem, NavBtnLink, NavBtn, SearchContainer, Input, SellBtn, SellBtnLink } from './NavbarElements'
import {FaBars} from 'react-icons/fa'
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          
          <NavLogo href='/'>
            Khmer
          </NavLogo>
          

          <NavMenu>
          <Search style={{ color: "#211F30", fontSize: 40 }} />
          <SearchContainer>
            <Input placeholder=" Search"></Input>
          </SearchContainer>
          <SellBtn>
              <SellBtnLink>
                Go
              </SellBtnLink >
            </SellBtn>
          </NavMenu>


          <MobileIcon>
            <FaBars></FaBars>
          </MobileIcon>

          <NavMenu>
            <NavItem>
            <NavLinks href='/cart'> 
              <ShoppingCartOutlined style={{ color: "#211F30", fontSize: 40 }} />
            </NavLinks>
            </NavItem>
            <NavItem>
            <NavLinks href='/signin'>
              <AccountBoxIcon style={{ color: "#211F30", fontSize: 40 }} ></AccountBoxIcon>  
            </NavLinks>
          </NavItem>
          </NavMenu>
        </NavbarContainer>
        
      </Nav>
    
    
    
    
    </>
  )
}

export default Navbar