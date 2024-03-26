import {motion, useAnimation, useInView, useScroll, useTransform} from 'framer-motion'
import { useEffect, useRef } from 'react'

const gridd = {
    hidden: {opacity:0},
    show:{
              opacity:1,
              transition:{
                duration:1,
                staggerChildren:0.5
              }
         }
  }

  const gridcontent = {
    hidden:{opacity:0, x:100},
    show:{opacity:1, x:0},
    transition:{duration:1}
  }

const Home_2nd = () => {
  return (
    <section className='h_container space_giver mt'>
        <div className='h_left' >
          <label className='secondary_text' >Explore Every</label>
          <label className='secondary_text' >Facet of the City</label>
          <p className='main_para' >City Explorer is your go-to for all things urban: find top destinations, fun activities, and mouthwatering dining spots. Whether you're a tourist or local, dive into the heart of the city and uncover its vibrant essence with ease."</p>
        </div>
        <motion.div className='h_right' variants={ gridd }
        initial='hidden'
        animate='show'>
          <motion.div variants={gridcontent} className='what_we_offer 1' >
            <div className='offer_icon_container' >
            <div className='offer_icon'><span class="material-symbols-outlined icon__">
              travel_explore
              </span>
            </div>
            </div>
            <div className='offer_info'>
              <label className='offer_name' >City Information</label>
              <p className='offer_desc' >Access comprehensive details about the city's history, culture, and essential services.</p>
            </div>
          </motion.div>

          <motion.div variants={gridcontent} className='what_we_offer 2' >
            <div className='offer_icon_container' >
            <div className='offer_icon'><span class="material-symbols-outlined icon__">
              distance
              </span>
            </div>
            </div>
            <div className='offer_info'>
              <label className='offer_name' >Destinations and Attractions</label>
              <p className='offer_desc' >Discover must-visit landmarks, hidden gems, and iconic sites.</p>
            </div>
          </motion.div>

          <motion.div variants={gridcontent} className='what_we_offer 3' >
            <div className='offer_icon_container' >
            <div className='offer_icon'><span class="material-symbols-outlined icon__">
              restaurant
              </span>
            </div>
            </div>
            <div className='offer_info'>
              <label className='offer_name' >Dining and Cuisine</label>
              <p className='offer_desc' >Explore array of dining options, ranging from local eateries to fine dining establishments.</p>
            </div>
          </motion.div>
        </motion.div>
      </section>
      
  )
}

export default Home_2nd