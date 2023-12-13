import './about.css'
import TvIcon from '@mui/icons-material/Tv';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DiamondIcon from '@mui/icons-material/Diamond';
import SettingsIcon from '@mui/icons-material/Settings';

function about() {
  return (
    <div className='back'>

    <div>
   <section class="about-us">
    <div class="about">
      <img src="https://blog.ambra.education/wp-content/uploads/2016/05/Depositphotos_109737200_m-2015.jpg.jpeg" class="pic" /> 
      <div class="text">
        <h2>About Us</h2>
        <h5>Front-end Developer & <span>Designer</span></h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita natus ad sed harum itaque ullam enim quas, veniam accusantium, quia animi id eos adipisci iusto molestias asperiores explicabo cum vero atque amet corporis! Soluta illum facere consequuntur magni. Ullam dolorem repudiandae cumque voluptate consequatur consectetur, eos provident necessitatibus reiciendis corrupti!</p>
        <div class="data">
        <a href="#" class="hire">Hire Me</a>
        </div>
      </div>
    </div>
    </section>
    </div>

  
  <h3><center>ABOUT THE COMPANY</center></h3>
  <p><center>Key features of our company</center></p>
  <div class="container">
    <div class="row">
    <div class="col-sm-3">
      <i><center><TvIcon /></center></i>
      <p><center><b>Responsive</b></center></p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
    </div>
    <div class="col-sm-3">
      <i><center><FavoriteIcon /></center></i>
      <p><center><b>Passion</b></center></p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
    </div>
    <div class="col-sm-3">
      <i><center><DiamondIcon /></center></i>
      <p><center><b>Design</b></center></p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
    </div>
    <div class="col-sm-3">
      <i><center><SettingsIcon/></center></i>
      <p><center><b>Support</b></center></p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
    </div>
  
</div>

</div>
  
    </div>


  )
}

export default about