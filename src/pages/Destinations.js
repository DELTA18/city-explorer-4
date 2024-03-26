import { useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hotelfilters from '../components/foodanddine/Hotelfilters'
import Hotelcontainer from '../components/foodanddine/Hotelcontainer'
import Searchoptions from '../components/foodanddine/Searchoptions'



import { useState , useEffect } from "react";
import axios from "axios";

import '../styles/foodanddine.css'

  const localIPAddress = window.location.hostname;  

const Thingstodo = () => {
  const [user_name, setUser_name] = useState('')
  const [user_id, setUser_id] = useState('')
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  let a = queryParams.get('city');
  

  const [destinations, setDestinations] = useState([])
  useEffect(() => {
    // setCityName(a)
    const fetchDestinations = async () => {
      try {
        console.log('hoo')
        const responsee = await axios.get(`http://${localIPAddress}:8000/destinations?city=${a}&id=${user_id}`); 
        console.log(responsee.data , 'this')
        // alpha = temp;
        setDestinations(responsee.data)
        // setHotels(responsee.data);
      } catch (error) {
        console.error('Error fetching destinations:', error);
      }
    }

    setUser_name(queryParams.get('user_name'))
    setUser_id(queryParams.get('user_id'))
    
    fetchDestinations()
  }, []);

  return (
    <>
    <Header user_name={user_name} user_id={user_id} />
    <div className='hotel-wrapper'>
    <div className='hotel-80'>
    <h1 className='hotel-title'>Destinations</h1>
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
     {
      destinations.length === 0 ? <div className='nohotel'>no hotels found :(</div> : <Hotelcontainer hotels = {destinations}/>
     }
    </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Thingstodo