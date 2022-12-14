import { Component } from "react";
import styled from "styled-components";
import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
  } from '@mui/icons-material';
import { fetchItem } from "../api/ItemAPI";

  
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const ContainerForEachItems = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info}{
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

class Item extends Component {
    state = {
        items: []
      }
    
      constructor(){
        super();
        fetchItem().then(res => {
          console.log(res);
          this.setState({items: res.data})
        })


        // api.get('/api/items').then(res=>{
        //   console.log(res.data)
        //   this.setState({items: res.data})
        // }
        // )
      }
    render(){
        return (

            <Container>
              {this.state.items.map((item) => (
                
                    <ContainerForEachItems >
                    <Circle />
                    <Image src={item.photo} />
                    <Info>                     
                      <Icon>
                        <ShoppingCartOutlined />
                      </Icon>
                      <Icon>
                        <SearchOutlined />
                      </Icon>
                      <Icon>
                        <FavoriteBorderOutlined />
                      </Icon>
                    </Info>
                  </ContainerForEachItems>
                

                  
              ))}
            </Container>

          );
    }

    }



export default Item;