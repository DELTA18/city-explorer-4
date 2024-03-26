import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion"
// import logo from '../../public/c-removebg-preview.png'
import '../styles/header.css';

const Header = (props) => {
  const history = useNavigate()
  const logo = process.env.PUBLIC_URL + '/c-removebg-preview.png';
  const [name] = useState(props.user_name)
  // console.log(props.city)
    // setname(props.user_name)
    const handleclick = () => {
      history(`/home?user_id=${props.user_id}&user_name=${props.user_name}`)
    }
  return (
    <motion.header >
  <nav>
    <ul>
      <div className="img" onClick={handleclick}>
        <img
          width="60px"
          alt="logo"
          height="60px"
          src= {logo}
        />
      </div>
      <div className="navs">
        <li className="nav">
          <a href={`/destinations?city=${props.city}&user_id=${props.user_id}&user_name=${props.user_name}`}>
            <p>
              Destination
            </p>
          </a>
        </li>
        <li className="nav">
          <a href={`/foodanddining?city=${props.city}&user_id=${props.user_id}&user_name=${props.user_name}`}>
            <p>
              Food&dine
            </p>
          </a>
        </li>
        <li className="nav">
          <a href={`/stay?city=${props.city}&user_id=${props.user_id}&user_name=${props.user_name}`} >
            <p>
              Stay
            </p>
          </a>
        </li>
        <a href={`/account?city=${props.city}&user_id=${props.user_id}&user_name=${props.user_name}`} className="acclogo">
        <p>hello {name} </p>
          <span className="material-symbols-outlined">
            account_circle
          </span>
        </a>
      </div>
    </ul>
  </nav>
  {' '}
</motion.header>
  )
}

export default Header