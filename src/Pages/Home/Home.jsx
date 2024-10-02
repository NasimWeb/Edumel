import React from 'react'
import Topbar from '../../Components/Topbar/Topbar'
import Navbar from '../../Components/Navbar/Navbar'
import Banner from '../../Components/Banner/Banner'
import Counting from '../../Components/CountUp/Counting'
import PopularCourses from '../../Components/PopularCourses/PopularCourses'
import Categories from '../../Components/Categories/Categories'
import TransformYourLife from '../../Components/TransformYourLife/TransformYourLife'
import TopRatedInstructurs from '../../Components/TopRatedInstructurs/TopRatedInstructurs'
import Testimonial from '../../Components/Testimonial/Testimonial'
import Footer from '../../Components/Footer/Footer'



function Home() {
  return (
   <>
    <Topbar />
    <Navbar />
    <Banner />
    <Counting />
    <PopularCourses />
    <Categories />
    <TransformYourLife />
    <TopRatedInstructurs />
    <Testimonial />
    <Footer />
   </>
  )
}

export default Home
