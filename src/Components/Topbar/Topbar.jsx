import React from 'react'
import './Topbar.css'
import { Link } from 'react-router-dom'



function Topbar() {
  return (
    <div className='Topbar px-5 lg:px-52'>
      <div className="container mx-auto">
        <div className="flex justify-around  lg:justify-between">
            <div className="contact hidden lg:flex gap-5">
              <div className="phone flex gap-3 items-center">
              <i className="fa-solid fa-phone" style={{color : '#015ABD'}}></i>
              <a href="tel:839898394" >839898394</a>
              </div>
              <div className="email flex gap-3 items-center">
              <i className="fa-solid fa-envelope" style={{color : '#015ABD'}}></i>
              <a href="mail:edumel@info.com" >edumel@info.com</a>
              </div>
            </div>
            <div className="media flex ">
               <div className="flex gap-4 items-center">
                <Link><i className="fa-brands fa-facebook-f"></i></Link>
                <Link><i className="fa-brands fa-twitter"></i></Link>
                <Link><i className="fa-brands fa-linkedin-in"></i></Link>
                <Link><i className="fa-brands fa-pinterest-p"></i></Link>
               <Link><i className="fa-brands fa-youtube"></i></Link>
               </div>
               <div className=" navbar-btn">
                 <div className="flex gap-3 items-center">
                 <i className="fa-solid fa-user" style={{color : '#015ABD'}}></i>
                 <Link style={{color : '#fff'}}> <Link className='text-white' to={'/Register'}>register</Link> / <Link className='text-white' to={'/Login'}>login</Link></Link>
                 </div>
               </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar
