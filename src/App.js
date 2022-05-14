import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Team from './Components/Team';
import React from 'react'
import ReactDOM from 'react-dom'
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import Contact from './Components/Contact';
import Home from './Components/Home';
import About from './Components/About';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    {/* <Team /> */}
    {/* <Signin /> */}
    {/* <Signup /> */}
    {/* <Contact /> */}
    {/* <Navbar /> */}
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/team' element={<Team />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/signin' element={<Signin />} />

        </Routes>
        <Footer />
      </BrowserRouter> 
    </>
  );
}

export default App;
