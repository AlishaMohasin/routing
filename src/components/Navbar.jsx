import React from 'react'
import {Link} from  "react-router-dom"
import style from "./style.module.css"
const Navbar = () => {
  return (
    <div className={style.box}>
     <Link to="/">Home</Link>
     <Link to="/about">About</Link>
     <Link to="/products">Products</Link>
    </div>
  )
}

export default Navbar