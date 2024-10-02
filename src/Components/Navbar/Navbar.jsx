import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'preact/hooks'

function Navbar() {

  const [headerFixed, setHeaderFixed] = useState(null)
  const navbar = useRef(null)
 const [isOpenMenu , setIsOpenMenu] = useState(false)
 const mobileNav = useRef(null)
 const [animationClass, setAnimationClass] = useState('');

  const handleScroll = () => {
    
    if(window.scrollY > 10) {
      setHeaderFixed(true)
      navbar?.current.classList.add('animate__fadeInDown')
      }

      if(window.scrollY < 10) {
        setHeaderFixed(false)
        navbar?.current.classList.remove(' animate__fadeInDown'.trim())
      }
  }

   useEffect(() => {
    window.addEventListener('scroll',handleScroll)
    return () => clearInterval(handleScroll)
   },[])


   useEffect(() => {
    if (isOpenMenu) {
      setAnimationClass('animate__fadeIn'); // اضافه کردن کلاس انیمیشن
    }
  }, [isOpenMenu]);



  return (
    <div ref={navbar} className={`navbar animate__animated px-5 bg-white lg:px-52  ${headerFixed ? 'fixed_header ' : ''}`}>
        <div className="container mx-auto">
             <div className="flex items-center justify-between">
                <div className="searchbar flex align-center gap-3">
                   <Link to={'/'}><img src="/images/logo.png" alt="logo" title='logo' /></Link>
                   {/* <div className='relative'>
                   <Link to={'/'}> <i className="fa-solid fa-magnifying-glass absolute top-5 left-2" ></i></Link>
                   <input type="text" className='form-control' placeholder='دوره مورد نظر...' />
                   </div> */}
                </div>
                <div className="menus hidden lg:flex">
                    <ul className='flex gap-8 items-center' style={{direction : 'ltr'}}>
                      <Link to={'/'}><li>Home</li></Link>
                      <Link to={'/AboutUs'}><li>About</li></Link>
                      <Link to={'/courses'}><li>Courses</li></Link>
                      <Link to={'/articles'}><li>Blog</li></Link>
                      <Link to={'/ContactUs'}><li>Contact</li></Link>
                    </ul>
                </div>
                {/* mobile nav */}
                <div className='relative lg:hidden'>
                <div onClick={() => {
                  setIsOpenMenu(!isOpenMenu)
                }} className='px-3 py-2 bg-nav rounded'><i className="fa-solid fa-bars   "></i></div>
                {
                  isOpenMenu ? (
                   <div ref={mobileNav} className={`absolute bg-white p-5 right-1 animate__animated ${animationClass}
                    `} style={{width:'15rem', zIndex: 999}}>
                    <ul className='w-full flex flex-col gap-2'>
                    <Link to={'/'}><li>Home</li></Link>
                      <Link to={'/AboutUs'}><li>About</li></Link>
                      <Link to={'/courses'}><li>Courses</li></Link>
                      <Link to={'/articles'}><li>Blog</li></Link>
                      <Link to={'/ContactUs'}><li>Contact</li></Link>
                    </ul>
                   </div>
                  ) : ''
                }
                </div>
             </div>
        </div>
    </div>
  )
}

export default Navbar
