import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';


class App extends Component {
  render() {
    return (

      <Routes>

          <Route path='/test' element={<Home/>} />

      </Routes>


    );
  }
}

export default App;