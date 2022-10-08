import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import SignIn from './pages/SignIn';


class App extends Component {
  render() {
    return (
<>
      <Navbar></Navbar>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/signin' element={<SignIn/>}/>
      </Routes>
</>



    );
  }
}

export default App;