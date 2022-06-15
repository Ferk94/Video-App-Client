import React from 'react';
import homeVideo from '../../media/homeVideo.mp4';
import NavBar from '../../layouts/navBar';
import './home.css';


const Home = () => {
  return (
    <div className='home-container'>
      <div className='navBar-space'>
        <NavBar home='home'/>
      </div>
      <video className='home-video' src={homeVideo} autoPlay loop muted/>
    </div>
  )
}

export default Home;
