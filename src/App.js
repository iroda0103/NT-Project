import './App.css';
import Main from './layout/main';
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header>
        Header
      </header>
      <div className='container main-container'>
        <div className='sidebar'>Sidebar</div>
        <main>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main></Main>}></Route>
            </Routes></BrowserRouter>
        </main>
      </div>


    </div>
  );
}

export default App;
