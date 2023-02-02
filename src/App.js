import React from 'react';
import './App.css';
import Home from './Pages/Home';
import CompanyHome from './Pages/CompanyHome';
import StudentHome from './Pages/StudentHome';
import Base from './Base';

import {Route, Link, Routes} from 'react-router-dom';
import {render} from "react-dom";


function App() {
  return (
    <div className="App">
      
     
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/companyhome" element={<CompanyHome/>}/>
        <Route exact path="/studenthome" element={<StudentHome/>}/>
        <Route exact path="/base" element={<Base/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
