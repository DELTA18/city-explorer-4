import {motion, useAnimation, useInView, useScroll, useTransform} from 'framer-motion'
import { useEffect, useRef } from 'react'
import andheri_img from '../assets/andheri_mainimg.jpg'
import bandra_img from '../assets/bandra_mainimg.jpg'
import csmt_img from '../assets/csmt_mainimg.jpg'
const Home_3rd = (props) => {
    const containerref = useRef(null)
    const {scrollYProgress: completionProgress } = useScroll()
    const {scrollYProgress } = useScroll({
        target:containerref,
        offset: ["start end", "end center"]
      })

    const scale = useTransform(
        scrollYProgress,
        [0,1],
        [0.5,10]
      )

      const op = useTransform(
        scrollYProgress,
        [0,1],
        [0,1]
      )

      const translate = useTransform(
        scrollYProgress,
        [0,1],
        ['0%','100%']
      )

      const borr = useTransform(
        scrollYProgress,
        [0,1],
        ['30%','10%']
      )
  return (
    <>
        <motion.section className='home_3rd_container space_giver mt' ref={containerref} >
            <motion.div className='scrolldiv' style={{scale:scale, opacity:op, translateY:translate, borderRadius:borr}}></motion.div>
            <motion.label className='main_text'>Cities we have</motion.label>
            <div className='ogga'>
                <a href={`/andheri?city=${props.city}&user_id=${props.user_id}&user_name=${props.user_name}`} className='city_card' >
                    <img src={andheri_img} />
                    <div className='overlay'>
                    <lable>Andheri</lable>
                    </div>
                </a>

                <a href={`/bandra?city=${props.city}&user_id=${props.user_id}&user_name=${props.user_name}`} className='city_card' >
                    <img src={bandra_img} />
                    <div className='overlay'>
                    <lable>Bandra</lable>
                    </div>
                </a>

                <a href={`/csmt?city=${props.city}&user_id=${props.user_id}&user_name=${props.user_name}`} className='city_card' >
                    <img src={csmt_img} />
                    <div className='overlay'>
                    <lable>Csmt</lable>
                    </div>
                </a>
            </div>
        </motion.section>
    </>
  )
}

export default Home_3rd