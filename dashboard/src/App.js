
import './App.scss';
import people from '../src/assests/images/people.jpg';
import cap1 from'../src/assests/images/cap1.jpg';
import cap2 from '../src/assests/images/cap2.png';
import brightness from '../src/assests/images/brightness.png';
import poweroff from '../src/assests/images/poweroff.png';
import user from '../src/assests/images/user.png'


function App() {
  return (
  <div className="container">
    <div className='navbar'> 
      <div className='navbar1'>Welcome To Your Profile </div>
      <div className='navbar2'> 12:15 PM 27th June 2022</div>
      <img src={poweroff} className="poweroffimg"></img>
      <img src={user} className="userimg"></img>
      <div className='username'>Username</div>
      <div className='admin'>Admin</div>
      
      
      </div>
   <div className="subcontainer">
    
    COURSE

    <img src={brightness} className="brightnessimg"></img>
    
    <div className="wrapper">

      <div className="wrapper1">
        <div className="wrapper1a">
        <p className='para1'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
        <button className='button1'>Connect Now</button>
        </div>
        <div className="wrapper1b">
          <img src={people} className="peopleimg"></img>
        </div>
      </div>
      <div className="wrapper2">
      <img src={cap1} className="cap1img"></img>
        <div className="wrapper2a">
  
          <p>Advance Course</p>
          <button className='button2'> Download PDF</button>
          <p className='para2'>Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.</p>
          
          
        </div>
        <img src={cap2} className="cap2img"></img>
        <div className="wrapper2b">
          
          <p>Essential Course</p>
          <button className='button3'>Download PDF</button>
          <p className='para3'>Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.</p>
        </div>
    </div>
    </div>
   

   </div>
   </div>
  );
}

export default App;
