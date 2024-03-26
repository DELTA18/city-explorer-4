import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
const Account = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  let a = queryParams.get('city');
  let user_name = queryParams.get('user_name')
  let user_id = queryParams.get('user_id')
  return (
    <>
    <div className='sep'>
    <Header user_name={user_name} user_id={user_id} />
    <h1>Account page</h1>
    <Footer/>
    </div>
    </>
  )
}

export default Account