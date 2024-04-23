import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import { motion } from "framer-motion"

import Header from '../components/Header';
import Footer from '../components/Footer';




import '../styles/header.css'
import '../styles/home.css'
import main_img from '../assets/Toronto-bro.png'
import Home_2nd from '../components/Home_2nd';
import Home_3rd from '../components/Home_3rd';

export const Home = () => {

  const journey = () => {
    window.scrollTo({
      top: 1550,
      behavior: 'smooth'
  });
  }
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search);
  const user_name =  location.state ? location.state.name : queryParams.get('user_name')
  const user_id =  location.state ? location.state.id : queryParams.get('user_id')
  return (
    <>
    <div className='sep rel'>
      <Header user_name = {user_name} user_id={user_id} />
      <div className='h_container space_giver hidden'>
    <div className='gradint_container'>
      <motion.div className='aqua__gradient grd_1' initial= {{opacity:0}} animate={{opacity:1}} transition={{duration:1, delay:0.2}} />
      <div className='aqua__gradient grd_2'/>
      <div className='aqua__gradient grd_3'/>
    </div>
        <div className='h_left'>
          <motion.label className='main_text' 
          initial={{opacity:0, x:-100}}
           animate={{opacity:1, x:0}}
           transition={{duration:0.7, delay:0.2}}
            >City</motion.label>
          <motion.label
          initial={{opacity:0, x:-100}}
          animate={{opacity:1, x:0}}
          transition={{duration:0.7, delay:0.4}}
           className='main_text'>Explorer</motion.label>
          <motion.p className='main_para'
          initial={{opacity:0, y:100}}
          animate={{opacity:1, y:0}}
          transition={{duration:0.7, delay:0.6}}>Discover the beat of the city with City Explorer: Your guide to urban adventures and hidden gems.</motion.p>
          <motion.div className='main_btn'
          initial={{opacity:0, scale:0}}
          animate={{opacity:1, scale:1}}
          transition={{duration:0.7, delay:0.8}}>
            <label className='main_btn_text' onClick={journey}>Start Your Journey</label>
            <span class="material-symbols-outlined">
              arrow_right_alt
            </span>
          </motion.div>
        </div>
        <div className='h_right'>
          <motion.img src={main_img} alt='main_img'
          initial={{opacity:0, x:100,}}
          animate={{opacity:1, x:0}}
          transition={{duration:1.2, delay:0.2}}
           className='main_img' />
        </div>

      </div>
      <Home_2nd />
      <Home_3rd user_name = {user_name} user_id = {user_id} />
      <Footer/>
    </div>
    </>
  )
}

