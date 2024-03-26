
import '../styles/login.css';
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const localIPAddress = window.location.hostname;

export const Login = (props) => {

  const history = useNavigate();

  const [name, setname] = useState("")
  const [password, setpassword] = useState()

  console.log(name)
  async function submit(e) {
    
    e.preventDefault();

    try {
      
    await axios.post(`http://${localIPAddress}:8000/`, {
      name, password
    })
    .then(res => { 
      console.log(res)
      if(res.data.msg ==="exists")
         {
          // console.log(res.data.id)
          props.onData(name);
          history('/home', {state:{name:name, id:res.data.id}})
         }
         else if(res.data === 'password_not_match')
         {
          alert('Password does not match')
         }
         else if(res.data.msg === 'notexists')
         {
          console.log(res.data.a)
          alert('username does not exists!')
         }
      })
      .catch(e => {
        alert('Wrong Details')
        console.log(e)
      })

    } catch (e) {
      console.log(e)
    }
  }
  return (
    <div className='lwrapper'>
    <div className="logincontainer">
  <h1>
    Login
  </h1>
  {' '}
  <form action='POST'>
    <div className="user">
      <p className="txt">
        Username:
      </p>
      <input type="text" placeholder="name@example.com" onChange={(e) => {setname(e.target.value )}}/>
    </div>
    <div className="pass">
      <p className="txt">
        Password:
      </p>
      <input type="text" onChange={(e) => {setpassword(e.target.value )}}/>
    </div>
    <button type='Submit' onClick={submit} className="button">
      Submit
    </button>
    {' '}
  </form>
  {' '}
  <div className="signup">
    <li className="signindirect">
      <p>
        If u dont have an account!
      </p>
      <a href="/signup">
        sign-in
      </a>
    </li>
  </div>
</div>
</div>
  )
}

