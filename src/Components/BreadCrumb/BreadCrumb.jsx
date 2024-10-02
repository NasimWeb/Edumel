import { Link } from "react-router-dom"
import React from 'react'
import './BreadCrumb.css'
import { useLocation } from "react-router-dom"


export default function BreadCrumb(props) {

  const {pathname} = useLocation()

  
    
  return (
    <div className="flex gap-5 justify-center mt-5 ">
    <Link className="text-white" to={'/'}>Home</Link>
    {
        props.prevRoute ? (
          <>
          <span className="text-white">/</span>
            <Link className="text-white" to={props.prevLink}>{props.prevRoute}</Link>
          </>

        ): ''
    }
    <span className="text-white">/</span>
    <p className="activeLink" to={pathname}>{props.curRoute}</p>
   </div>
  )
}


