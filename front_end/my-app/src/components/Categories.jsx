import { mobile } from "../responsive";
import axios from 'axios';
import React, { Component } from 'react';
import styled from "styled-components";
const api = axios.create(
  {
    baseURL: "http://localhost:8080/api/items"
  }
)

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}

`;



const Container1 = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}

`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`;


class Categories extends Component {


    state = {
      items: []
    }
  
    constructor(){
      super();
      api.get('/').then(res=>{
        console.log(res.data)
        this.setState({items: res.data})
      }
      )
    }
  
    render() {
      return (
        <div>
                    {this.state.items.map(item => (
                    
                        <Image src={item.photo}>
                            <Container>
                            <Image/>
                            <Info>
                                <h1 key = {item.id == 1}>{item.title}</h1>
                            </Info>
                        </Container>
                        </Image>

                    ))}

        </div>
      )
    }
    
    
  }
  export default Categories;
