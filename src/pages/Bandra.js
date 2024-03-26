import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Bandra = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  let user_name = queryParams.get('user_name')
  let user_id = queryParams.get('user_id')
  let city = 'bandra'
  return (
    <div>
      <Header city = {city} user_name={user_name} user_id={user_id} />
      <h1>Bandra</h1>
      
      <Footer/>
    </div>
  )
}

export default Bandra