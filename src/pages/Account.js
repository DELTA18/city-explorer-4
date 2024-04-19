import React from 'react'
import { useLocation } from 'react-router-dom'
import '../styles/account.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import avatar from '../assets/avatar.png'
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
    <section className='acc_container space_giver hidden'>
      <div className='acc_left'>
        <div className='user_avatar'> <img src={avatar}></img> </div>
        <div className='acc_user'>raj </div>
        <div className='acc_user'> sdfgh34567</div>
        <div className='acc_user'> 123456789</div>
      </div>
      <div className='acc_right'>r</div>  
    </section>
    <Footer/>
    </div>
    </>
  )
}

export default Account