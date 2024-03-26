import React from 'react'
import andheri_img from '../assets/andheri_mainimg.jpg'
import bandra_img from '../assets/bandra_mainimg.jpg'
import csmt_img from '../assets/csmt_mainimg.webp'
const Home_3rd = (props) => {
  return (
    <>
        <section className='home_3rd_container space_giver mt' >
            <label className='main_text'>Cities we have</label>
            <div className='ogga'>
                <a href={`/andheri?city=${props.city}&id=${props.user_id}&user_name=${props.user_name}`} className='city_card' >
                    <img src={andheri_img} />
                    <lable>Andheri</lable>
                </a>

                <a href={`/bandra?city=${props.city}&id=${props.user_id}&user_name=${props.user_name}`} className='city_card' >
                    <img src={bandra_img} />
                    <lable>Bandra</lable>
                </a>

                <a href={`/csmt?city=${props.city}&id=${props.user_id}&user_name=${props.user_name}`} className='city_card' >
                    <img src={csmt_img} />
                    <lable>Csmt</lable>
                </a>
            </div>
        </section>
    </>
  )
}

export default Home_3rd