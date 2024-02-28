import React from 'react';
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import './Contact.css';


function Contact() {
  return (
    <div className='back'>
    

      <div className="container">
      <h3><center><b>CONTACT</b></center></h3>
  <p><center><b>Lets get in touch. Send us a message:</b></center></p>
  <br/>

        <div class="row">
          <div class="col-sm-6" >
  
  <div className='south'>
    <p><i><PlaceIcon /></i> Chicago, US</p>
    <p><i>< CallIcon/></i> Phone: +00 151515</p>
    <p><i><EmailIcon/></i> Email: mail@mail.com</p>
    </div>
    </div>

   
   <div class="col-sm-6">
    <form >
      <input type="text" placeholder="Name" required name="Name" className='west'/>
      <input type="text" placeholder="Email" required name="Email"  className='north'/>
      </form><br/>
      <form >
  
    <input type="text" placeholder="Message" required name="Message" className='east' />
    </form>
      <br/>
        <center><button className='moon'><i><EmailIcon/></i>SEND MESSAGE</button></center>
       

      </div>
      </div>
      </div>

      <br/><br/>
 
      <>
  {/* Team Section */}
  <div className="container" >
    <h3><center><b>THE TEAM</b></center></h3>
    <p><center>The ones who runs this company</center></p>
    <div className="row">
      <div className="col-sm-3">
        <div className="card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxnoJ4-M8z2EkGS2EO376Y_SbyeKzRDk-ex1VL_PkTyHbGrUJC2sbHHu8VB3Ez06S1fiA&usqp=CAU" className='from' alt=''/>
          <div className="container">
          <h4><b>John Doe</b></h4>
            <h6><b>CEO &amp; Founder</b></h6>
            <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendiss sodales pellentesque elementum. </p>
          </div>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="card">
          <img src="https://i.pinimg.com/1200x/d1/0b/8e/d10b8e5d1f0d0dbf64449960c5797d85.jpg"  className='from' alt=''/>
          <div className="container">
            <h4><b>John Doe</b></h4>
            <h6><b>CEO &amp; Founder</b></h6>
            <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendiss sodales pellentesque elementum. </p>
          </div>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="card">
          <img src="https://thumbs.dreamstime.com/b/mascot-animal-domestic-cat-scientist-cute-creative-kawaii-cartoon-logo-252583029.jpg" className='from' alt=''/>
          <div className="container">
            <h4><b>John Doe</b></h4>
            <h6><b>CEO &amp; Founder</b></h6>
            <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendiss sodales pellentesque elementum. </p>
          </div>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOiBa7TbZw_w6-foE0Wgap31lzI2uC7fI3mw&usqp=CAU" className='from' alt=''/>
          <div className="container">
            <h4><b>John Doe</b></h4>
            <h6><b>CEO &amp; Founder</b></h6>
            <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendiss sodales pellentesque elementum. </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

     
 




 </div>

  )
}

export default Contact
