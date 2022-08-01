import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';

import Banner from './components/Banner';
import Accueil from './pages/Accueil';
import PageNotFound from './pages/PageNotFound';
import About from './pages/About';
import Housing from './pages/Housing'
import Footer from './components/Footer'

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <Router>
      <Banner/>
      <Routes>
          <Route path="/" element={<Accueil/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/house/:id' element={<Housing/>}/> 
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
      <Footer/> 
  </Router>
);
reportWebVitals();
