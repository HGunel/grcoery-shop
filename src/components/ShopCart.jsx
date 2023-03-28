import React from 'react'

const ShopCart = () => {
  return (
    <div className='container-head'>
         <div className="big-back">
            <div className="content">
            <div className="shop-left">
                <h1>Shop Cart</h1>
                <div className="shop-home">
                   <span className="links"><span><i className="fa-solid fa-house"></i></span> Home <span><i className="fa-solid fa-angle-right"></i></span></span>
                   <div className="shop-other">
                     Shop Cart
                   </div>
                </div>
            
            </div>

            <div className="shop-right">
                <button>Breakfast</button>
                <button>Dairy Free</button>
                <button>Dessert</button>
                <button>Gluten Free</button>
                <button>Salad</button>
                <button>Uncategorized</button>

            </div>
            </div>
         </div>
    </div>
  )
}

export default ShopCart