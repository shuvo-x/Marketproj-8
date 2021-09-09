import React from 'react';
import './Home.css';

function Home() {
  return (
   <>
    <div className='home'>
      <div className='home-slider'>
       <div className='image-slider'>
          <div className='slider-content'>
            <h5>Markets & Resources</h5>
             <h1>Find The Best Doctor Near By You.</h1>
             <button id='c-btn-1'className='btn btn-primary mt-5'>FIND A DOCTOR</button>
             <button id='c-btn-2'className='btn btn-danger mt-5'>READ MORE</button>

          </div>
       </div>
       
      </div>
    </div>
   
   </>
  );
}

export default Home;