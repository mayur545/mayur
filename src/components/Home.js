import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

function UncontrolledExample() {
  return (
    <div>
    <div className='topnav'>
    <Carousel>
      <Carousel.Item>
        <img src='https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=' />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=' />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=' />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>

    <br/>

     <div class="container">
    <div class="row">
      <div class='col-sm-4'>
      <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5RxIIIn7Od_ov6SivkReanM7yo3nlddIBgQ&usqp=CAU'  className='middle'/>
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1> 
      <p>Architect & Engineer</p> 
      <p>We love that guy</p>
    </div>
  </div>
</div>
      </div>

      <div class='col-sm-4'>
      <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5RxIIIn7Od_ov6SivkReanM7yo3nlddIBgQ&usqp=CAU'  className='middle'/>
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1> 
      <p>Architect & Engineer</p> 
      <p>We love that guy</p>
    </div>
  </div>
</div>
      </div>

      <div class='col-sm-4'>
      <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5RxIIIn7Od_ov6SivkReanM7yo3nlddIBgQ&usqp=CAU'  className='middle'/>
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1> 
      <p>Architect & Engineer</p> 
      <p>We love that guy</p>
    </div>
  </div>
</div>
      </div>

    </div>
    </div>
   

    <section class="">
 
  <div class="text-center text-white"  background-color= {blue} >
 
    <div class="container p-4 pb-0">
   
      <section class="">
        <p class="d-flex justify-content-center align-items-center">
          <span class="me-3">Register for free</span>
          <button data-mdb-ripple-init type="button" class="btn btn-outline-light btn-rounded">
            Sign up!
          </button>
        </p>
      </section>
   
    </div>



    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © 2020 Copyright:
      <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
    </div>


</div>
</section>
</div>

  
  );
}

export default UncontrolledExample;