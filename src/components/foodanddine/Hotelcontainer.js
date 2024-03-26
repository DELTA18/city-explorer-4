
import Hotelcard from "./Hotelcard"

const Hotelcontainer = ( {hotels} ) => {

  return (
    <>
    <div className="hotel-container">
    
    {
      hotels.map((hotel) => {
        return(
        <Hotelcard id = {hotel.id} name = {hotel.name}
        address = {hotel.address}
        city = {hotel.city}
        rating = {hotel.rating}
        type = {hotel.type}
        price = {hotel.pricing}
        vejnonvej = {hotel.vejnonvej}
        type2 = {hotel.type2}
        img = {hotel.img_link} key = {hotel.id}/>
        )
      })
    }
    
    </div>
    </>
  )
}

export default Hotelcontainer