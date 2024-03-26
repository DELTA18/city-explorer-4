import { useState } from "react"
import Detailedhotel from "./Detailedhotel"
const Hotelcard = (props) => {
  const [buttonpopup, setbuttonpopup] = useState(false)
  return (
    <div className="hotelcard" onClick={() => setbuttonpopup(true)}>
      <img src= {props.img} className="hotel-image" alt= {props.name} />
      <div className="hotel-info">
      <label className="hotel-name"> {props.name} </label>
      <div className="hotel-a">
      <span className="material-symbols-outlined" style={{color:'#fff700'}}>
        star
      </span>
      <label className="hotel-ratings"> {props.rating} </label>
        </div>
        </div>
        <Detailedhotel 
        id = {props.id}
        name = {props.name}
        address = {props.address}
        city = {props.city}
        rating = {props.rating}
        type = {props.type}
        price = {props.price}
        vejnonvej = {props.vejnonvej}
        type2 = {props.type2}
        img = {props.img}
         trigger = {buttonpopup}
         settrigger = {setbuttonpopup} />
    </div>
  )
} 

export default Hotelcard