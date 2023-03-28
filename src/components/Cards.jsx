import React from 'react'
import IconOne from '../assets/img/icon-1.png';
import IconTwo from '../assets/img/icon-2.png';
import IconThree from '../assets/img/icon-3.png';
import IconFour from '../assets/img/icon-4.png';
import IconFive from '../assets/img/icon-5.png';




const Cards = () => {
  return (
    <>
   <div className="container">
    <div className="rows">
        <div className="card-1 cards">
         <div className="img">
         <img src={IconOne} alt="#" />
         </div>
          <div className="price-offer">
           <div className="top-price"><a href="#">Best price & offers</a></div>
           <div className="bottom-price"><p>Orders $ or more</p></div>
          </div>
        </div>
        <div className="card-2 cards">
          <div className="img">
          <img src={IconTwo} alt="#" />
          </div>
          <div className="price-offer">
           <div className="top-price"><a href="#">Free delivery</a></div>
           <div className="bottom-price"><p>24/7 amazing services</p></div>
          </div>
        </div>
        <div className="card-3 cards">
        <div className="img">
        <img src={IconThree} alt="#" />
        </div>
          <div className="price-offer">
           <div className="top-price"><a href="#">Great daily deal</a></div>
           <div className="bottom-price"><p>When yo sign up</p></div>
          </div>
        </div>
        <div className="card-4 cards">
         <div className="img"> <img src={IconFour} alt="#" /></div>
          <div className="price-offer">
           <div className="top-price"><a href="#">Wide assortment</a></div>
           <div className="bottom-price"><p>Mega Discounts</p></div>
          </div>
        </div>
        <div className="card-5 cards">
          <div className="img">
          <img src={IconFive} alt="#" />
          </div>
          <div className="price-offer">
           <div className="top-price"><a href="#">Easy returns</a></div>
           <div className="bottom-price"><p>Within 30 days</p></div>
          </div>
        </div>
    </div>
   </div>
    </>
  )
}

export default Cards