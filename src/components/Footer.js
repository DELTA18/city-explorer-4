import React from 'react'
import '../styles/footer.css';

const footer = () => {
  const logo = process.env.PUBLIC_URL + '/c-removebg-preview.png';
  return (
    <footer>
  <div className="foot">
    <div className="lfoot">
      <div className="lfu">
        <img
          alt="logo"
          height="180px"
          src= {logo}
        /> 
      </div>
    </div>
    <div className="rfoot">
      <div className="1 ftemp">
        <h3>
          Destination
        </h3>
      </div>
      <div className="2 ftemp">
        <h3>
          Food and Dine
        </h3>
      </div>
      <div className="3 ftemp">
        <h3>
          Things to do
        </h3>
      </div>
      <div className="4 ftemp">
        <h3>
          Our Social Handles
        </h3>
      </div>
    </div>
  </div>
  {' '}
</footer>
  )
}

export default footer