import React from 'react';
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
  return (
   <div>
      <div class="container">
  <h3><center>CONTACT</center></h3>
  <p><center>Lets get in touch. Send us a message:</center></p>
  <div>
    <p><i><PlaceIcon /></i> Chicago, US</p>
    <p><i>< CallIcon/></i> Phone: +00 151515</p>
    <p><i><EmailIcon/></i> Email: mail@mail.com</p>
    <br />
   
   <div>
    <form>
      <input type="text" placeholder="Name" required name="Name" /><br/><br/>
      <input type="text" placeholder="Email" required name="Email" /><br/><br/>
    <input type="text" placeholder="Subject" required name="Subject" /><br/><br/>
    <input type="text" placeholder="Message" required name="Message" /><br/><br/>
    </form>
      
        <button class="w3-button w3-black" type="submit">
          <i class="fa fa-paper-plane"></i> SEND MESSAGE
        </button>

      </div>
      </div>
    <br/>
    
    <div class="container">
    <div class="row">
      <div class="col-sm-6">
      <div class="card1">
      <img src="img_avatar.png"/>
      <h4><b>John Doe</b></h4> 
     <p>Architect & Engineer</p>
     <p><center><button>contact</button></center></p>
     </div>
     </div>

     <div class="col-sm-6">
      <div class="card1">
      <img src="img_avatar.png"/>
      <h4><b>John Doe</b></h4> 
     <p>Architect & Engineer</p>
     <p><center><button>contact</button></center></p>
     </div>
     </div>
     
  </div>
  </div>






 </div>
  </div>
  )
}

export default Contact
