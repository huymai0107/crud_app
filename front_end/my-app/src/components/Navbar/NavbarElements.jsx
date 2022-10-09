import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
background: whitesmoke;
height: 80px;
/* margin-top: -80px; */
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;

@media screen and (max-width: 60px) {
    transition: 0.8 all ease;
    
}
    
`

export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer
    }
    color: #000000;

    `

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo= styled.a`
    justify-self: flex-start;   
    cursor: pointer;    
    font-size: 3.5rem;
    align-items: center;
    margin-left: 24px;
    display: flex;
    font-weight: bolder;
    text-decoration: none;
    color: #211F30;
    &:hover{
        color: #32384D;
    }
`;




export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const NavItem = styled.div`
    height: 80px;
    &:hover{
        transition: all 0.2 ease-in-out;
        background: #fff;
        color: #010606;
    }
`

export const NavLinks = styled.a`
    color: #000000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
            border-bottom: 3px solid #01bf71
    }
`
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
     display   : none ;
    }
`
export const NavBtnLink = styled.div`
    background: none;
    white-space: nowrap;
    padding: 22px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2 ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2 ease-in-out;
        background: #fff;
        color: #010606;
    }


`

export const SearchContainer = styled.div`
  border: none;
  display: flex;
  align-items: center;
  padding: 5px;
  @media screen and (max-width: 768px) {
     display   : none ;
    }
`;

export const Input = styled.input`
  border: none;
  border-radius: 30px;
    white-space: nowrap;
    padding: 20px 22px;
  font-size: 16px;
  width: 350px;
`;

export const SellBtn = styled.nav`
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
     display   : none ;
    }
`
export const SellBtnLink = styled.div`
    background: #E29930;
    white-space: nowrap;
    padding: 22px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2 ease-in-out;
    text-decoration: none;
    clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);    

    &:hover{
        transition: all 0.2 ease-in-out;
        background: #fff;
        color: #010606;
    }


`