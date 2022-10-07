import React from 'react'
import { Nav, NavbarContainer, NavLogo, NavMenu, NavLinks, MobileIcon, NavItem, NavBtnLink, NavBtn, SearchContainer, Input, SellBtn, SellBtnLink } from './NavbarElements'
import {FaBars} from 'react-icons/fa'
import { Search, ShoppingCartOutlined } from "@mui/icons-material";


const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          
          <NavLogo onclick="window.location='google.com">
            Khmer
          </NavLogo>
          

          <NavMenu>
          <Search style={{ color: "gray", fontSize: 40 }} />
          <SearchContainer>
            <Input placeholder=" Search"></Input>
          </SearchContainer>
          <SellBtn>
              <SellBtnLink>
                Sell
              </SellBtnLink >
            </SellBtn>
          </NavMenu>


          <MobileIcon>
            <FaBars></FaBars>
          </MobileIcon>

          <NavMenu>
            <NavItem>
            <NavLinks > 
              <ShoppingCartOutlined style={{ color: "gray", fontSize: 40 }} />
            </NavLinks>
            </NavItem>
            <NavItem>
            <NavLinks>
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