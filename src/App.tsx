import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Task } from './components/Task/Task';
import { Navbar } from './components/Navbar/Navbar';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Microtasks</h1>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/task_map' element={<Task inf='map'/>}/>
          <Route path='/task_123' element={<Task inf='123'/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
