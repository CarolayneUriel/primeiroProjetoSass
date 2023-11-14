import React from 'react';
import Movies from "./Components/Movies";
import Documentary from './Components/Documentary';
import Series from './Components/Series';
import Footer from './Components/Footer';
import Logo from "./Assets/logo-marca.webp";
import "./Styles/StyleApp.scss"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"



function App() {
  

  return (
    <>
      <BrowserRouter>
        <nav>
          <figure>
            <img src={Logo} alt="logomarca" />
          </figure>
          <ul>
            <li>
              <Link to='/' className='link'>Movies</Link>
              </li>
            <li>
              <Link to='/documentary' className='link'>Documentário</Link>
            </li>
            <li>
              <Link to='/series' className='link'>Séries</Link>
            </li>
          </ul>
        </nav>

          <Routes>
            <Route path='/' element={<Movies />}/>
            <Route path='/documentary' element= {<Documentary />} />
            <Route path='/series' element= {<Series />} />
          </Routes>
      </BrowserRouter>
      <Footer/>
     
    </>
  )
}

export default App
