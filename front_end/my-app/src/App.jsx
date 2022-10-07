import './App.css';
import Home from './pages/Home';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Item from './components/Item';


const App = () => {
  return(
    <Router>
     <Home/>
     <Item></Item>
    </Router>

  )
}



export default App;
