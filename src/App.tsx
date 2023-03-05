import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Task_1 } from './components/Tasks/Task_1/Task_1';
import { Task_2 } from './components/Tasks/Task_2/Task_2';
import { Navbar } from './components/Navbar/Navbar';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1 className='app_title'>Microtasks</h1>
      <div className='app_wrapper'>
        <Navbar />
        <div className='app_content'>
          <BrowserRouter>
            <Routes>
              <Route path='/task_1' element={<Task_1 />}/>
              <Route path='/task_2' element={<Task_2 />}/>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
