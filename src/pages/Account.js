import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../styles/account.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import avatar from '../assets/avatar.png'
import axios from "axios";
const localIPAddress = window.location.hostname;
const Account = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  let a = queryParams.get('city');
  let user_name = queryParams.get('user_name')
  let user_id = queryParams.get('user_id')

  const [isDivVisible, setDivVisible] = useState(false);
  const history = useNavigate();
  const toggleDiv = () => {
    setDivVisible(!isDivVisible);
  };

    const [user, setUser] = useState(null);

    const [email, setEmail] = useState('');
    const [showEmailInput, setShowEmailInput] = useState(false);
    useEffect(() => {
      const fetchUser = async () => {
          try {
              const response = await axios.get(`http://${localIPAddress}:8000/api/user/${user_id}`);
              setUser(response.data);
              console.log(response);
          } catch (error) {
              console.error('Error fetching user:', error);
          }
      };
  
      if (user_id) { // Check if user_id is not null or undefined
          fetchUser();
      }
  }, [user_id]);

    // const handleUpdateEmail = async () => {
    //   try {
    //     const response = await axios.put(`http://${localIPAddress}/api/user/${user_id}`, { email });
    //     console.log('Email updated successfully:', response.data);
    //     // Provide feedback to the user (e.g., show a success message)
    //   } catch (error) {
    //     console.error('Error updating email:', error);
    //     // Provide feedback to the user (e.g., show an error message)
    //   }
    // };
    console.log(user)
  return (
    <>
    <div className= {isDivVisible ? 'sep blur-background' : 'sep'}>
    <Header user_name={user_name} user_id={user_id} />
    <section className='acc_container space_giver hidden'>
      <div className='acc_left'>
        <div className='user_avatar'> <img src={avatar}></img> </div>
        {user && (
          <>
        <div className='acc_user'>Username: {user.username} </div> 
        <div className='acc_user'>Email: {user.email}</div>
        <div className='acc_user'>Phone no.: {user.phone_no} </div>
        </>
      )}
      </div>
      <div className='acc_right'>
        <lable>Edit your profile</lable>
        <div className='acc_actions_container'>
          <div className='acc_action' onClick={toggleDiv}>
            Change Username
          </div>
          {isDivVisible && (
        <div className="acc-overlay"></div>
      )}
          {isDivVisible && (
        <div className="centered-div">
          <p>This is the centered div</p>
          <button onClick={toggleDiv}>Close</button>
        </div>
      )}

        <label>
        {/* Email: */}
        {showEmailInput ? (
          <>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            {/* <button onClick={handleUpdateEmail}>Update</button> */}
          </>
        ) : (
          <div className='acc_action' onClick={() => setShowEmailInput(true)}>
            Change Email
          </div>
        )}
      </label>


          <div className='acc_action bor'>
            Change Phone No.
          </div>
        </div>

        <lable>Account Actions</lable>
        <div className='acc_actions_container'>
          <div className='acc_action bor'>
            Delete this Account
          </div>
        </div>

        <lable>Login Actions</lable>
        <div className='acc_actions_container'>
          <div className='acc_action' onClick={ () => {history('/')}}>
            login with another account
          </div>
          <div className='acc_action'>
            Log out
          </div>
          <div className='acc_action bor'>
            Sign out
          </div>
        </div>
      </div>  
    </section>
    <Footer/>
    </div>
    </>
  )
}

export default Account