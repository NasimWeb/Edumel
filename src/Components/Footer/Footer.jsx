import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'

export default function Footer() {
  return (
    <footer
      style={{ background: "#120F2D", direction: "ltr" }}
      className="px-5 lg:px-28 pt-14 pb-8"
    >
      <div className="container mx-auto">
        <div className="flex flex-wrap lg:flex-nowrap gap-24 justify-between">
        <div className="content">
            <img
              src="./src/assets/images/logo-white.png"
              className="h-auto max-w-full "
              alt=""
            />
            <p
              className="w-64 mt-2 leading-8"
              style={{ color: "rgba(255, 255, 255, 0.7)" }}
            >
              Edumel is a Bootstrap Template for online courses education websites support multiple courses
            </p>
            <div
              className="flex gap-5 mt-2"
              style={{ color: "rgba(255, 255, 255, 0.7)" }}
            >
              <span> Connect :</span>
              <div className="flex text-white gap-2">
                <Link to='/'>
                  <i class="fa-brands fa-facebook-f" aria-hidden="true"></i>
                </Link>
                <Link to='/'>
                  <i class="fa-brands fa-twitter" aria-hidden="true"></i>
                </Link>
                <Link to='/'>
                  <i class="fa-brands fa-linkedin-in" aria-hidden="true"></i>
                </Link>
                <Link to='/'>
                  <i class="fa-brands fa-pinterest-p" aria-hidden="true"></i>
                </Link>
                <Link to='/'>
                  <i class="fa-brands fa-youtube" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
          </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 items-center ">
         
          <div className="column-one flex flex-col gap-5">
            <h4 className="text-white">Explore</h4>
           <ul className="flex flex-col gap-5">
            <Link className="footer-link" style={{ color: "rgba(255, 255, 255, 0.7)" }} to='/'><li>About us</li></Link>
            <Link className="footer-link" style={{ color: "rgba(255, 255, 255, 0.7)" }} to='/'><li>Contact us</li></Link>
            <Link className="footer-link" style={{ color: "rgba(255, 255, 255, 0.7)" }} to='/'><li>Services</li></Link>
            <Link className="footer-link" style={{ color: "rgba(255, 255, 255, 0.7)" }} to='/'><li>Support</li></Link>
           </ul>
          </div>
          <div className="column-two flex flex-col gap-5">
          <h4 className="text-white">Programs</h4>
           <ul className="flex flex-col gap-5">
            <Link className="footer-link" style={{ color: "rgba(255, 255, 255, 0.7)" }} to='/'><li>SEO Business</li></Link>
            <Link className="footer-link" style={{ color: "rgba(255, 255, 255, 0.7)" }} to='/'><li>Digital Marketing</li></Link>
            <Link className="footer-link" style={{ color: "rgba(255, 255, 255, 0.7)" }} to='/'><li>Graphic Design</li></Link>
            <Link className="footer-link" style={{ color: "rgba(255, 255, 255, 0.7)" }} to='/'><li>Social Marketing</li></Link>
           </ul>
          </div>
          <div className="column-three flex flex-col gap-5">
          <h4 className="text-white">Links</h4>
           <ul className="flex flex-col gap-5">
            <Link className="footer-link" style={{ color: "rgba(255, 255, 255, 0.7)" }} to='/'><li>News & Blogs</li></Link>
            <Link className="footer-link" style={{ color: "rgba(255, 255, 255, 0.7)" }} to='/'><li>Privacy Policy</li></Link>
            <Link className="footer-link" style={{ color: "rgba(255, 255, 255, 0.7)" }} to='/'><li>Support</li></Link>
            <Link className="footer-link" style={{ color: "rgba(255, 255, 255, 0.7)" }} to='/'><li>Return Policy</li></Link>
           </ul>
          </div>
          <div className="column-four flex flex-col gap-5">
          <h4 className="text-white">Address</h4>
           <ul className="flex flex-col gap-5">
            <Link className="footer-link" style={{ color: "rgba(255, 255, 255, 0.7)" }} to='/'><li>+0800 327 8534</li></Link>
            <Link className="footer-link" style={{ color: "rgba(255, 255, 255, 0.7)" }} to='/'><li>support@edumel.com</li></Link>
            <Link className="footer-link" style={{ color: "rgba(255, 255, 255, 0.7)" }} to='/'><li>123 Fifth Floor East 26th Street,New York, NY 10011</li></Link>
           </ul>
          </div>
        </div>
        </div>
       <div className="copy-right mt-10 flex justify-center">
          <p style={{color : 'rgba(255, 255, 255, 0.7)', direction : 'ltr'}}>
          © 2021 Edumel All rights reserved by <span className="edumel">Dreambuzz</span> 
          </p>
       </div>
      </div>
    </footer>
  );
}
