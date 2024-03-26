import React from 'react'

import Demographics_img from '../assets/Business Plan-bro.png'
 const Demographics = ({lable, info}) => {
   return (
    <div className='demographics' >
    <lable className='demo_lable' > {lable} </lable>
    <lable className='demo_info' > {info} </lable>
    </div>
   )
 }
 

const CityDemographics = () => {
  return (
    <div className='city_landing abc'>
        <div className='city_left' >
        <div className='city_design'><div className='grey'/><div className='blue' /> </div>
            <lable className='city_heading_primary' >Demographics</lable>
            <Demographics lable={'Area(2020):'} info={'16.06 km²'} />
            <Demographics lable={'Population (2020):'} info={'395292'} />
            <Demographics lable={'Population Density:'} info={'24608 people per km²'} />
            <Demographics lable={'Male Population:'} info={'205918'} />
            <Demographics lable={'Female Population:'} info={'189374'} />
        </div>
        <div className='demo_right' >
            <img src={Demographics_img} alt='demo' />
        </div>
    </div>
  )
}

export default CityDemographics