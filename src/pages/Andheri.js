import {motion, useAnimation, useInView, useScroll, useTransform} from 'framer-motion'
import { useEffect, useRef } from 'react'
import { useLocation , useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/city.css'
import city_andheri1 from '../assets/city_andheri1.jpg'
import CityDemographics from '../components/CityDemographics'
import CityHotelDestinations from '../components/CityHotelDestinations'
import CityBlogs from '../components/CityBlogs'

const Andheri = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  let user_name = queryParams.get('user_name')
  let user_id = queryParams.get('user_id')
  let city = 'andheri'

  function handleClick(link) {
    window.open(`${link}`, '_blank', 'noopener,noreferrer');
  }
  return (
    <div>
      <Header city = {city} user_name={user_name} user_id={user_id} />
      <div className='rel' >
      <section className='city_container space_giver hidden'>
      <div className='gradint_container'>
      <div className='aqua__gradient grd_4'/>
      <div className='aqua__gradient grd_5'/>
    </div>
        <section className='city_landing' >
          <div className='city_landing_top' >
            <div className='city_left' >
              <div className='city_design'><div className='grey'/><div className='blue' /> </div>
              <motion.label className='city_heading_primary' initial={{color:'#ffffff'}}
               animate={{
                color:['#ffffff','#ffffff','#000000'],
                letterSpacing:['10px','0px','0px'],
                opacity:[0,1,1],
              scale: [2,2,1],
              translateX:['550px','550px','0px']
            }}
            transition={{
              duration:3,
              ease:'easeInOut',
              // repeat: Infinity,
              // repeatDelay:1,
            }} >Andheri</motion.label>
              <motion.p className="city_paragraph" initial={{opacity:0, translateX:'-100px'}} animate={{opacity:1, translateX:'0px'}} transition={{duration:0.7, delay:3}} >Where Tradition Meets Modernity: Explore Andheri's Vibrant Blend of Heritage and Innovation.</motion.p>
              <motion.div className='city_button'
              initial={{opacity:0, translateX:'-100px'}} animate={{opacity:1, translateX:'0px'}} transition={{duration:0.7, delay:3.2}}
              onClick={() => handleClick('https://www.google.com/maps/place/Andheri,+Maharashtra+400053/@19.1136447,72.8697339,15z/data=!3m1!4b1!4m6!3m5!1s0x3be7c83c05b7fc89:0xbe87eb057f3aafda!8m2!3d19.113645!4d72.8697339!16zL20vMGIxc3Bs?entry=ttu')} >
                <span class="material-symbols-outlined">map</span>
                <label>View on maps</label>
              </motion.div>
            </div>
            <motion.div className='city_right'  animate={{
                opacity:[0,1],
              scale: [0,1],
              translateX:['550px','0px']
            }}
            transition={{
              delay:2.7,
              duration:1.4,
              ease:'easeInOut',
              // repeat: Infinity,
              // repeatDelay:1,
            }}>
              <motion.div className='andheri_right_img'  
              // animate={{
            //     opacity:[0,1],
            //   scaleX: [0,1],
            //   translateX:['-550px','0px']
            // }}
            // transition={{
            //   delay:2.7,
            //   duration:1.4,
            //   ease:'easeInOut',
            //   // repeat: Infinity,
            //   // repeatDelay:1,
            // }}
             />
            </motion.div>
          </div>
          <motion.div className='andheri_landing_bottom'  animate={{
                opacity:[0,1,1],
              scaleX: [0.7,0.7,1],
              translateY:['-370px','-370px','0px']
            }}
            transition={{
              duration:3,
              ease:'easeInOut',
              // repeat: Infinity,
              // repeatDelay:1,
            }} ></motion.div>
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15079.45389816588!2d72.85943414747656!3d19.11364436357623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c83c05b7fc89%3A0xbe87eb057f3aafda!2sAndheri%2C%20Maharashtra%20400053!5e0!3m2!1sen!2sin!4v1711293992583!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        </section>
        <CityDemographics info={[
    ['Area(2020):', '16.06 km²'],
    ['Population (2020):', '395292'],
    ['Population Density:', '24608 people per km²'],
    ['Male Population:', '205918'],
    ['Female Population:', '189374']
]} />
          <CityHotelDestinations user_id ={user_id} user_name = {user_name} city={city} />
          <CityBlogs />
      </section>
      </div>
      <Footer/>
    </div>
  )
}

export default Andheri