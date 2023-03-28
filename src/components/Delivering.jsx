import React from 'react'
import Vegys from '../assets/img/vegys.png'

const Delivering = () => {
  return (
    <>
    <div className="container-head">
      <div className="info">
      <div className="left-infos">
      <div className="text-1">
        <h1>Stay home & get your daily needs from our shop</h1>
      </div>
    <div className="total-text">
    <div className="text-2">
        <p>Start Your Daily Shopping with <span>Nest Mart</span></p>
      </div>
      <div className="subscribe">
        <input type="text" placeholder='Your email adress' />
        <button>Subscribe</button>

      </div>
    </div>
      </div>
      <div className="right-photo">
       <img src={Vegys} alt="#" />
      </div>
      </div>
    </div>
    </>
  )
}

export default Delivering