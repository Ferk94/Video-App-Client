import React from 'react';
import homeVideo from '../../media/homeVideo.mp4';
import './home.css';


const Home = () => {
  return (
    <div className='home-container'>
      <video className='home-video' src={homeVideo} autoPlay loop muted/>
    </div>
  )
}

export default Home;
