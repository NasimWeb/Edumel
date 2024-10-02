import React from 'react'
import { Link } from 'react-router-dom'

function CoursesBox({title , desc ,  img , id}) {
  return (
    <div className='blog-box'>
    <div className="blog-img">
        <img className='h-auto max-w-full  ' src={img} alt="" />
     </div>
     <div className="blog-content mt-5 px-3 py-4">
    <Link to={`/courses/${id}`}>
        <h2 className='text-2xl font-bold' style={{direction : 'rtl'}}>{title}</h2>
    </Link>
        <p className='mt-5' style={{direction : 'rtl'}}>{desc}</p>
     </div>
</div>
  )
}

export default CoursesBox
