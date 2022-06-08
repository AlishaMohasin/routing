import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import style from "./style.module.css"
const Product = () => {
    const {id} =useParams()
const [product,setProduct]=useState({})
useEffect(()=>{
  if(id){
    fetch(`http://localhost:8080/posts/${id}`)
   .then ((r)=>r.json())
    .then((d)=>{
        setProduct(d);
        console.log(d)
       
    });
}
    },[id]);
  return (
    <div>Product Id: {id}
    <div className={style.box4}>
        <img className={style.img} src={product.img}/>
        <p>{product.name}</p>
        <p>{product.price}</p>
    </div>
    </div>
  )
}

export default Product