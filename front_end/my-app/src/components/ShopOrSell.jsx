
import styled from "styled-components";
import { mobile } from "../responsive";


const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  margin-bottom: 10px;
  ${mobile({ display: "none" })}
  font-weight: bolder;
  text-decoration: none;
  font-size: 3.5rem;

  
`;





const ChildContainerLeft = styled.a`
background-image: url("https://www.ikea.com/om/en/images/products/stefan-chair-brown-black__0727320_pe735593_s5.jpg?f=s");
  opacity: 0.99;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  margin-right: 10px;
  align-items: center;
  justify-content: center;  
  position: relative;
  text-decoration: none;
  color: black;

  &::before {
    background: white;
    opacity: 0.5;

  content: "";
  inset: 0;
  position: absolute;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.5s ease-in-out;
  z-index: -1;
  }
  &:hover::before {
  transform: scaleX(1);
  transform-origin: left;
  opacity: 0.5;

}
`;

const ChildContainerRight = styled.div`
  background-image: url('https://dictionary.cambridge.org/vi/images/thumb/chair_noun_001_02485.jpg?version=5.0.274');
  opacity: 0.99;
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  margin-right: 10px;
  align-items: center;
  justify-content: center;  
  position: relative;
  text-decoration: none;
  color: black;
  
  


  &::before {
    background: white;
    opacity: 0.5;
  content: "";
  inset: 0;
  position: absolute;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.5s ease-in-out;
  z-index: -1;
  }
  &:hover::before {
  transform: scaleX(1);
  transform-origin: left;

}

`;












const ShopOrSell = () => {


  return (
    <>
    <Container>
            <ChildContainerLeft href='/shop'>
                shop
            </ChildContainerLeft> 

            <ChildContainerRight>
                sell
            </ChildContainerRight>
    </Container>
    

    </>

  );
};

export default ShopOrSell;