import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import axios from 'axios';
import React, { Component } from 'react';

const api = axios.create(
  {
    baseURL: "http://localhost:8080/api/items"
  }
)



class App extends Component {


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
        <Home/>
        {/* {this.state.items.map(item => <h2 key = {item.id}>{item.title}</h2>)} */}
      </div>
    )
  }
  
  
}

export default App;
