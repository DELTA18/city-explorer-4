import {motion, useAnimation, useInView, useScroll, useTransform} from 'framer-motion'
import { useEffect, useRef } from 'react'



const Home_2nd = () => {
  const {scrollYProgress: completionProgress } = useScroll()
  const containerref = useRef(null)
  const isInView = useInView(containerref)
  const mainControls = useAnimation()

  const {scrollYProgress } = useScroll({
    target:containerref,
    offset: ["start end", "end end"]
  })

  useEffect(() => {
    if(isInView){
      mainControls.start('visible')
    }else{
      mainControls.start('hidden')
    }
  })
  return (
    <motion.section className='h_container space_giver mt' ref={containerref}>
        <div className='h_left' >
          <motion.label className='secondary_text' animate={mainControls} initial='hidden' variants={{
            hidden:{opacity:0, y:75},
            visible:{opacity:1, y:0}
          }} transition={{delay:0.6, duration:0.4}} >Explore Every</motion.label>
          <motion.label className='secondary_text' animate={mainControls} initial='hidden' variants={{
            hidden:{opacity:0, y:75},
            visible:{opacity:1, y:0}
          }} transition={{delay:0.8, duration:0.4}} >Facet of the City</motion.label>
          <motion.p className='main_para' animate={mainControls} initial='hidden' variants={{
            hidden:{opacity:0, y:75},
            visible:{opacity:1, y:0}
          }} transition={{delay:1, duration:0.4}} >City Explorer is your go-to for all things urban: find top destinations, fun activities, and mouthwatering dining spots. Whether you're a tourist or local, dive into the heart of the city and uncover its vibrant essence with ease."</motion.p>
        </div>
        <div className='h_right'
        initial='hidden'
        animate='show'>
          <motion.div  className='what_we_offer 1' animate={mainControls} initial='hidden' variants={{
            hidden:{opacity:0, x:75},
            visible:{opacity:1, x:0}
          }} transition={{delay:0.6, duration:0.4}} >
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

          <motion.div className='what_we_offer 2' animate={mainControls} initial='hidden' variants={{
            hidden:{opacity:0, x:75},
            visible:{opacity:1, x:0}
          }} transition={{delay:0.8, duration:0.4}} >
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

          <motion.div className='what_we_offer 3' animate={mainControls} initial='hidden' variants={{
            hidden:{opacity:0, x:75},
            visible:{opacity:1, x:0}
          }} transition={{delay:1, duration:0.4}} >
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
        </div>
      </motion.section>
      
  )
}

export default Home_2nd