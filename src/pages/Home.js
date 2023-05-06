import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';
import Search from './Search';




function Home() {
  
  return (
    <div className='home'>
      
      <div className="home__header">
        <div className="home__left">
          <Link to='/about'>About</Link>
          <Link to='/store'>Store</Link>


        </div>
        <div className="home__right">
        <Link to='/gmail'>Gmail</Link>
        <Link to='images'>Images</Link>
        <i className="fa fa-th fa-lg mx-3"></i>
        <i className="fa fa-user-circle fa-2x"></i>
       
        
        

        </div>

      </div>
      <div className="home__body">
        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="" />
         <div className="home__inputContainer">
          <Search />
         </div>
      </div>
    </div>
  )
}

export default Home
