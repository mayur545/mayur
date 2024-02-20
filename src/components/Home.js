import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

function UncontrolledExample() {
  return (
    <div>
    <div className='topnav'>
    <Carousel>
      <Carousel.Item>
        <img src='https://images.unsplash.com/photo-1586773860383-dab5f3bc1bcc?q=80&w=1427&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=' />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=' />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=' />
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
      <img src='https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'  className='middle'/>
    </div>
    <div class="flip-card-back">
      <h1>DR.John Doe</h1> 
      <p>Heart</p> 
      <p>A hospital is a healthcare institution providing patient treatment with specialized health science and auxiliary healthcare staff and medical equipment.[1] The best-known type of hospital is the general hospital, which typically has an emergency department to treat</p>
    </div>
  </div>
</div>
      </div>

      <div class='col-sm-4'>
      <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src='https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'  className='middle'/>
    </div>
    <div class="flip-card-back">
      <h1>DR.John Doe</h1> 
      <p>Brain</p> 
      <p>A hospital is a healthcare institution providing patient treatment with specialized health science and auxiliary healthcare staff and medical equipment.[1] The best-known type of hospital is the general hospital, which typically has an emergency department to treat</p>
    </div>
  </div>
</div>
      </div>

      <div class='col-sm-4'>
      <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src='https://images.unsplash.com/photo-1555708982-8645ec9ce3cc?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'  className='middle'/>
    </div>
    <div class="flip-card-back">
      <h1>DR.John Doe</h1> 
      <p>Lungs</p> 
      <p>A hospital is a healthcare institution providing patient treatment with specialized health science and auxiliary healthcare staff and medical equipment.[1] The best-known type of hospital is the general hospital, which typically has an emergency department to treat</p>
    </div>
  </div>
</div>
      </div>

    </div>
    </div>

    

    </div>
    
  );
}

export default UncontrolledExample;