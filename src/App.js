import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import SignUp from "./pages/SignUp";
import SignIn from "./pages/Sign-in";
function App() {
  return (
    <div className="home">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />
      </Routes>
    </div>
  )
}

export default App;
