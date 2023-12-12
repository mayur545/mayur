import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Header from './components/header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';

function App() {
  return (
    <div>
       
       <Router>
      <Header />
      <Routes>
        
        <Route path='/' exact Component={Home} />
        <Route path='/About' exact Component={About} />
        <Route path='/Contact' exact Component={Contact}/>
        <Route path='/services' exact Component={Services}/>
        
      </Routes>
      </Router>

      

    </div>
  )
}

export default App