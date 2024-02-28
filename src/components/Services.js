import React from 'react';
import './services.css';
import { Link } from 'react-router-dom';

function Services() {
  return (

    <div class="container">
       <h2>Our services</h2>
      <div class="row">
        <div class="col-sm-4">
     <div class="card">
  <img src="https://www.felixhospital.com/sites/default/files/2022-11/dr-dk-gupta.jpg" />
  <h1>John Doe</h1>
  <p class="title">CEO & Founder, Example</p>
  <p className='tax'>Harvard University</p>
  <br/>
  <Link to='/contact'><button className='pro'>contact</button></Link>
  </div>
  </div>
  
  <div class="col-sm-4">
  <div class="card">
  <img src="https://www.felixhospital.com/sites/default/files/2022-11/dr-dk-gupta.jpg" />
  <h1>John Doe</h1>
  <p class="title">CEO & Founder, Example</p>
  <p  className='tax'>Harvard University</p>
  <br/>
  <Link to='/contact'><button className='pro'>contact</button></Link>
  </div>
  </div>

  <div class="col-sm-4">
  <div class="card">
  <img src="https://www.felixhospital.com/sites/default/files/2022-11/dr-dk-gupta.jpg" />
  <h1>John Doe</h1>
  <p class="title">CEO & Founder, Example</p>
  <p className='tax'>Harvard University</p>
  <br/>
  <Link to='/contact'><button className='pro'>contact</button></Link>
  </div>
  </div>

  </div>

<br/>

 
<div class="row">
        <div class="col-sm-4">
     <div class="card">
  <img src="https://www.felixhospital.com/sites/default/files/2022-11/dr-dk-gupta.jpg" />
  <h1>John Doe</h1>
  <p class="title">CEO & Founder, Example</p>
  <p className='tax'>Harvard University</p>
  <br/>
  <Link to='/contact'><button className='pro'>contact</button></Link>
  </div>
  </div>
  
  <div class="col-sm-4">
  <div class="card">
  <img src="https://www.felixhospital.com/sites/default/files/2022-11/dr-dk-gupta.jpg" />
  <h1>John Doe</h1>
  <p class="title">CEO & Founder, Example</p>
  <p className='tax'>Harvard University</p>
  <br/>
  <Link to='/contact'><button className='pro'>contact</button></Link>
  </div>
  </div>

  <div class="col-sm-4">
  <div class="card">
  <img src="https://www.felixhospital.com/sites/default/files/2022-11/dr-dk-gupta.jpg" />
  <h1>John Doe</h1>
  <p class="title">CEO & Founder, Example</p>
  <p className='tax'>Harvard University</p>
  <br/>
  <Link to='/contact'><button className='pro'>contact</button></Link>
  </div>
  </div>

  </div>




  </div>


   
  )
}

export default Services
