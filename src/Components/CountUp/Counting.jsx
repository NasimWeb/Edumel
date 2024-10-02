import React from 'react'
import './Counting.css'
import CountUp from 'react-countup';

function Counting() {

  return (
    <div className='container mx-auto lg:px-52'>
       <div className="counter relative" style={{top : '-54px'}}>
           <div className="flex flex-wrap lg:flex-nowrap gap-5 justify-between">
            <div className="items flex flex-col ">
            <div className="count text-6xl text-white"><CountUp end={500} enableScrollSpy />k</div>
               
                <p className='text-white text-center'>Students</p>
            </div>
            <div className="items flex flex-col ">
            <div className="count text-6xl text-white"><CountUp end={500} enableScrollSpy  />%</div>
                <p className='text-white text-center'>Online Courses</p>
            </div>
            <div className="items flex flex-col ">
            <div className="count text-6xl text-white"><CountUp end={400} enableScrollSpy /></div>
                <p className='text-white text-center'>Finished Sessions</p>
            </div>
            <div className="items flex flex-col ">
            <div className="count text-6xl text-white"><CountUp  end={100} enableScrollSpy />%</div>
                <p className='text-white text-center'>Satisfaction</p>
            </div>
           </div>
       </div>
    </div>
  )
}

export default Counting
