import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className='banner-contanier'>
     <div className="container mx-auto">
      <div className="Banner flex-wrap px-5 lg:flex-nowrap py-5 lg:py-0 flex items-center justify-between lg:px-28">
        
        <div className="banner-content flex flex-col flex-wrap">
            <h4 className='text-5xl mb-5'>Upgrade your learning <span style={{color : '#F14D5D'}}>Skills</span>  & Upgrade your life</h4>
            <h5 className='text-start mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam libero magni reiciendis quam ipsa blanditiis, facilis velit eaque illo?</h5>
            <div className='flex gap-3 justify-start'>
            <button className='btn btn-main rounded'>Find Courses</button>
            <button className='btn btn-white rounded'>Get Started</button>
            </div>
        </div>
        <img src="/images/landing.webp" alt="banner" title='banner' />
      </div>
      </div>
    </div>
  )
}

export default Banner
