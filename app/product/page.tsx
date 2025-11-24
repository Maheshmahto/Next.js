"use client"

import React, { useState } from 'react'

const Product = () => {
    const [product,setProduct]=useState(0);
  return (
    <div>
        <h1>{product}</h1>
        <button onClick={()=>setProduct((p)=>p+1)}>click</button>
    </div>
  )
}

export default Product
