import React from 'react'
import { useState } from "react"
import Detailedhotel from "./Detailedhotel"
const Searchoptions = (props) => {
    const [buttonpopup, setbuttonpopup] = useState(false)
    console.log(props.hotel)
  return (
    <div className='hotel-search-result' onClick={() => setbuttonpopup(true)}>
                <label> {props.hotel.name} </label>
                <Detailedhotel 
        id = {props.hotel.id}
        name = {props.hotel.name}
        address = {props.hotel.address}
        city = {props.hotel.city}
        rating = {props.hotel.rating}
        type = {props.hotel.type}
        price = {props.hotel.pricing}
        vejnonvej = {props.hotel.vejnonvej}
        type2 = {props.hotel.type2}
        img = {props.hotel.img_link}
         trigger = {buttonpopup}
         settrigger = {setbuttonpopup} />
                </div>
  )
}

export default Searchoptions