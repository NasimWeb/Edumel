import React from 'react'
import CourseBox from '../CourseBox/CourseBox'



function PopularCourses() {
  
  return (
    <div className='container mx-auto lg:px-52 mt-5 mb-24 '>
        <h2 className='text-center mb-2 font-bold text-3xl'>Popular Courses </h2>
        <p className='text-center mb-20' style={{color:'#777'}}>Discover Your Perfect Program In Our Courses.</p>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center'>
            <CourseBox img={'/images/img_06.jpg'} />
            <CourseBox img={'/images/img_02.jpg'} />
            <CourseBox img={'/images/img_03.jpg'} />
        </div>
    </div>
  )
}


export default PopularCourses
