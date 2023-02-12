import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import SignUp from "./SignUp";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App;
