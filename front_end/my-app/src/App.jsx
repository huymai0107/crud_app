import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import SignIn from './pages/SignIn/';
import ItemList from './pages/ItemList'
import Cart from './pages/Cart'



class App extends Component {
  render() {
    return (
<>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/shop' element={<ItemList/>} />
          <Route path='/cart' element={<Cart/>} />



      </Routes>
</>



    );
  }
}

export default App;