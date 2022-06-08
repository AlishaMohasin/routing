import React from 'react'
import { useEffect,useState } from 'react';
import {Link, Outlet} from "react-router-dom"
import style from "./style.module.css"
const Products = () => {
  const [pro,setPro]=useState([])
  useEffect(()=>{
  
   fetch(`http://localhost:8080/posts`)
  .then ((r)=>r.json())
   .then((d)=>{
       setPro(d);
       console.log(d)
      
   });
   },[]);
  return (
    <div><h1>Products</h1>
   
      <div className={style.box2}>
      {
        pro.map((el)=>(
         <div className={style.box3} key ={el.id}>
           <img className={style.img} src={el.img}/>
           <p>{el.name}</p>
           <p>{el.price}</p>
          <Link to={`/products/${el.id}`}>More details</Link>
         </div>
        ))
      }
      
      </div>
     <div><Outlet/></div> 
    
    </div>
  )
}

export default Products