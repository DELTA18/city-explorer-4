import React , {useRef, useEffect} from 'react'
import {motion, useAnimation, useInView, useScroll, useTransform} from 'framer-motion'

import Demographics_img from '../assets/Business Plan-bro.png'
 const Demographics = ({lable, info}) => {
   return (
    <div className='demographics' >
    <lable className='demo_lable' > {lable} </lable>
    <lable className='demo_info' > {info} </lable>
    </div>
   )
 }
 

const CityDemographics = (props) => {
  let demo_info = props.info
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
    <motion.div className='city_landing abc' ref={containerref}>
        <div className='city_left' >
        <div className='city_design'><div className='grey'/><div className='blue' /> </div>
            <lable className='city_heading_primary' >Demographics</lable>

            {
              demo_info.map((info)=> {
                return (
                  <Demographics  lable={info[0]} info={info[1]}  />
                )
              })
            }
        </div>
        <div className='demo_right' >
            <img src={Demographics_img} alt='demo' />
        </div>
    </motion.div>
  )
}

export default CityDemographics