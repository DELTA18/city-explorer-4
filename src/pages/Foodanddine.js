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

const type = ['breakfast', 'lunch', 'dinner']
const city = ['andheri', 'bandra', 'CSMT']

const Foodanddine = (props) => {
  const [hotels, setHotels] = useState([]);
  // const [selectedHotels, setSelectedHotels] = useState([])
  const [selectedType, setSelectedType] = useState([])
  const [selectedCity, setSelectedCity] = useState([])
  const [selectedPrice, setSelectedPrice] = useState([10000])
  const [sortPrice, setSortPrice] = useState(0)
  const [vej, setVej] = useState(0)

  const [user_name, setUser_name] = useState('')
  const [user_id, setUser_id] = useState('')
  const [cityname, setCityName] = useState('')
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  let a = queryParams.get('city');

  const [searchQueries, setSearchQueries] = useState([])
  const [allhotels, setallhotels] = useState([])
  const [favouriteHotels, setFavouriteHotels] = useState([])
  let alpha;
  useEffect(() => {
    setCityName(a)
    const fetchHotels = async () => {
      try {
        const responsee = await axios.get(`http://${localIPAddress}:8000/foodanddine?city=${a}&id=${user_id}`); 
        let temp = responsee.data
        alpha = temp;
        setallhotels(responsee.data)
        setHotels(responsee.data);
      } catch (error) {
        console.error('Error fetching hotels:', error);
      }
    }
    setUser_name(queryParams.get('user_name'))
    setUser_id(queryParams.get('user_id'))
    
    fetchHotels()
  }, []);
  let [caller, setCaller] = useState(false)
  useEffect(() => {
    let fetchUserInfo = async () => {
      //now fetching user info for favourite hotels
      await axios.get(`http://${localIPAddress}:8000/userinfo?user_id=${user_id}`)
      .then(response => {
                  let b = alpha || allhotels
               const likedHotels = response.data.favourite_hotels;
               let q = b.filter((hotel) => likedHotels.includes(hotel.id))
               setFavouriteHotels(q)
               setHotels(q)
           })
           .catch(error => {
             console.error('Error fetching user information:', error);
             console.log('where are you')
         });
        }
        fetchUserInfo()
  },[caller])

  const handlefilters =  (category,id)  => {
    // console.log(category)
    if(id === 'type'){
    if(selectedType.includes(category))
            {
                let type = selectedType.filter((e) => e !== category);
                setSelectedType(type);
            }
            else
            {
                setSelectedType([...selectedType, category])
              }
              // console.log(selectedType)
            }
    if(id === 'city'){
    if(selectedCity.includes(category))
            {
                let type = selectedCity.filter((e) => e !== category);
                setSelectedCity(type);
            }
            else
            {
                setSelectedCity([...selectedCity, category])
            }
              // console.log(selectedCity)
    }
    if(id === 'price')
    {
      // console.log(category)
      setSelectedPrice(category);
    }
    if(id === 'sortprice')
    {
      setSortPrice(category);
    }
    if(id === 'vej')
    {
      setVej(category)
    }
    // console.log(vej)
}
useEffect( () => {
  filteringitems()
}, [selectedType,selectedCity,selectedPrice,sortPrice,vej] )
const filteringitems = () => {
  // console.log(selectedPrice)
  let filtered = allhotels;
  let tempitems = allhotels; // Start with all hotels
  tempitems = tempitems.filter( (hotel) => hotel.pricing <= selectedPrice) //price range filter
  if(selectedType.length > 0 || selectedCity.length > 0 || selectedPrice !== 10000 || sortPrice !== 0 || vej !== 0) 
  {
        if (selectedType.length > 0) { //type filter
          tempitems = selectedType.reduce((filteredHotels, selectedCategory) => {
            filtered = tempitems.filter((hotel) => hotel.type === selectedCategory);
            return filteredHotels.concat(filtered);
          }, []);
        }
        if (selectedCity.length > 0) { //city filter
          tempitems = selectedCity.reduce((filteredHotels, selectedCategory) => {
            filtered = tempitems.filter((hotel) => hotel.city === selectedCategory);
            return filteredHotels.concat(filtered);
          }, []);
        }
        if(sortPrice !== 0)//price sorting
        {
          if(sortPrice === 1)
          {
      tempitems = tempitems.sort( (a,b) => a.pricing - b.pricing )
     }
     if(sortPrice === 2)
     {
       tempitems = tempitems.sort( (a,b) => b.pricing - a.pricing )
      }
    }

    if(vej !== 0)//vej sorting
    {
      if(vej === 1)
      {
        tempitems = tempitems.filter((hotel) => hotel.vejnonvej === 'veg')
      }
      if(vej === 2)
      {
        tempitems = tempitems.filter((hotel) => hotel.vejnonvej === 'non veg')
      }
    }
    setHotels(tempitems);
  } 
  else
  {
    setHotels(allhotels)
  }
}

const handleFavouriteHotels = () => {
  setCaller(!caller)
  console.log(favouriteHotels, 'onclick')
    setHotels(favouriteHotels)
}
    const handlesearch = () => {
      let search = document.getElementById('search')
      let query = search.value
      if(query === '')
      {
        setSearchQueries([])
      }
      else
      {
      let results = hotels.filter((hotel)=> hotel.name.toLowerCase().includes(query.toLowerCase()))
      setSearchQueries(results)
      }
    }
    // console.log(searchQueries)
    
  return (
    <>
    <Header user_name={user_name} user_id={user_id} />
    <div className='hotel-wrapper'>
    <div className='hotel-80'>
    <h1 className='hotel-title'>Food and dine</h1>
      <div className='top-bar'>
        <div className='your_favourites' onClick={handleFavouriteHotels}>
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
        <input type='text' name='search' id='search' className='hotel-searchbar' onChange={handlesearch} placeholder='enter hotel name'/>
        <div className='search-results'>
          {
            searchQueries.map((hotel) => {
              return(
                <Searchoptions hotel = {hotel} />
              )
            })
          }
        </div>
        </section>
      </div>
    <div className='foodwrapper'>
    <Hotelfilters type = {type}
     selectedType = {selectedType}
      city = {city}
      cityname = {cityname}
      selectedCity = {selectedCity}
     handlefilters={handlefilters}/>
     {
      hotels.length === 0 ? <div className='nohotel'>no hotels found :(</div> : <Hotelcontainer hotels = {hotels}/>
     }
    </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Foodanddine