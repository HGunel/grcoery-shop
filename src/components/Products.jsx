
import React from 'react'

const Products = ({image, title,store,price,discount}) => {
  return (
   <>

<div className="col-12 col-sm-6 col-md-3">
    <div className="card" >
    <img src={image} className="card-img-top" alt="..." />
   <div className="card-body">
   <p className="card-store">{store}</p>
    <p className="card-title">{title}</p>
<div className="amount">
<p className="card-price">{price}</p>
<p className="card-discount">{discount}</p>
</div>
 </div>
   </div>
    </div>
   
   </>
  )
}

export default Products