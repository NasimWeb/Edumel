import React from 'react'
import './Contactus.css'
import Topbar from '../../Components/Topbar/Topbar'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import SingleBanner from '../../Components/SingleBanner/SingleBanner'

function Contactus() {
  return (
    <div>
        <Topbar />
        <Navbar />
        <SingleBanner title={'Contact Us'} curRoute={'Contact'} />
        <div className="container mx-auto">
         <div className="grid grid-cols-1 lg:grid-cols-[400px_minmax(650px,_1fr)] lg:px-48 my-24 gap-24 ">
           <div className="get-in-touch" style={{direction : 'ltr'}}>
            <h2 className='text-3xl font-bold mb-5'>what's your story? <br />
            Get in touch</h2>
             <p style={{color : '#77838F'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores Feel Free to contact with us</p>
             <ul className='flex flex-col gap-5 my-9'>
                <li className='flex gap-4 items-center'><i class="fa-solid fa-envelope"></i>support@email.com</li>
                <li className='flex gap-4 items-center'><i class="fa-solid fa-phone"></i>+45 234 345467</li>
                <li className='flex gap-4 items-center'><i class="fa-solid fa-location-pin"></i>Moon Street Light Avenue, 14/05 Jupiter</li>
             </ul>
           </div>
            <div className="form">
                <form action="" >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5" >
                    <input type="text" className="form-control" style={{direction : 'ltr'}} placeholder='Your Name'/>
                    <input type="text" className="form-control" style={{direction : 'ltr'}} placeholder='Email Address' />
                    </div>
                    <div className="grid grid-col-1 my-5">
                    <input type="text" className="form-control" style={{direction : 'ltr'}} placeholder='Subject' />
                    </div>
                    <div className="grid grid-cols-1" style={{height : '243px'}}>
                        <textarea name="" id="" className='form-control h-full' style={{direction : 'ltr'}} placeholder='Your Message'></textarea>
                    </div>
                    <button className='btn btn-main w-full mt-9 p-4 rounded'>Send Message</button>
                </form>
            </div>

         </div>
         </div>
        <Footer />
    </div>
  )
}

export default Contactus
