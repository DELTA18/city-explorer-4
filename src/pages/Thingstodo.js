import { useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hotelfilters from '../components/foodanddine/Hotelfilters'
import Hotelcontainer from '../components/foodanddine/Hotelcontainer'
import Searchoptions from '../components/foodanddine/Searchoptions'



import { useState , useEffect } from "react";
import axios from "axios";

import '../styles/foodanddine.css'

const Thingstodo = () => {
  return (
    <>
    <Header />
    <div className='hotel-wrapper'>
    <div className='hotel-80'>
    <h1 className='hotel-title'>Food and dine</h1>
      <div className='top-bar'>
        <div className='your_favourites' 
        // onClick={handleFavouriteHotels}
        >
      <img className='like'
                        width="18" 
                        height="18" 
                        src='https://img.icons8.com/fluency/48/like.png' 
                        alt="like"
                        style={{ cursor: 'pointer' }}
                    />
          <label>Your Favourites</label>
        </div>
        <label>Search:</label>
        <section>
        <input type='text' name='search' id='search' className='hotel-searchbar' 
        // onChange={handlesearch}
         placeholder='enter hotel name'/>
        <div className='search-results'>
          {/* {
            searchQueries.map((hotel) => {
              return(
                <Searchoptions hotel = {hotel} />
              )
            })
          } */}
        </div>
        </section>
      </div>
    <div className='foodwrapper'>
    {/* <Hotelfilters type = {type}
     selectedType = {selectedType}
      city = {city}
      cityname = {cityname}
      selectedCity = {selectedCity}
     handlefilters={handlefilters}/> */}
     {/* {
      hotels.length === 0 ? <div className='nohotel'>no hotels found :(</div> : <Hotelcontainer hotels = {hotels}/>
     } */}
    </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Thingstodo