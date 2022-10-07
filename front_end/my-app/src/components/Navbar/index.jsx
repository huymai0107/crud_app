import React from 'react'
import { Nav, NavbarContainer, NavLogo, NavMenu, NavLinks, MobileIcon, NavItem, NavBtnLink, NavBtn, SearchContainer, Input, SellBtn, SellBtnLink } from './NavbarElements'
import {FaBars} from 'react-icons/fa'
import { Search, ShoppingCartOutlined } from "@mui/icons-material";


const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          
          <NavLogo href='/'>
            Khmer
          </NavLogo>
          

          <NavMenu>
          <SearchContainer>
            <Input placeholder=" Search" />
            <Search style={{ color: "gray", fontSize: 40 }} />
          </SearchContainer>
          <SellBtn>
              <SellBtnLink to='sell'>
                Sell
              </SellBtnLink >
            </SellBtn>
          </NavMenu>


          <MobileIcon>
            <FaBars></FaBars>
          </MobileIcon>

          <NavMenu>
            <NavItem>
            <NavLinks to='#about'> 
              <ShoppingCartOutlined style={{ color: "gray", fontSize: 40 }} />
            </NavLinks>
            </NavItem>
            <NavItem>
            <NavLinks to='signin'>
              Sign In
            </NavLinks>
          </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    
    
    
    
    </>
  )
}

export default Navbar