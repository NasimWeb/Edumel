import React from "react";
import "./TopRatedInstrructurs.css";
import { Link } from "react-router-dom";

export default function TopRatedInstructurs() {
  return (
    <div className="container  mx-auto px-5 lg:px-52 mt-5 mb-24">
      <div className="flex flex-wrap lg:flex-nowrap items-baseline justify-between">
        <div className="mb-3">
          <h2 className=" mb-2 font-bold text-3xl">Top Rated Instructors</h2>
          <p className=" lg:mb-20" style={{ color: "#777" }}>
            {" "}
            Discover Your Perfect Program In Our Courses.{" "}
          </p>
        </div>
        <button className="btn  btn-main-outline rounded">All Instructors </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        <div className="teachers-box">
          <div className="img-container relative">
            <img
              src="/images/team-4.jpg"
              className=" h-auto max-w-full "
              alt=""
            />
            <ul className="social-media flex gap-2 absolute  bottom-14">
              <li><Link to="/"><i class="fa-brands fa-facebook-f"></i></Link></li>
              <li><Link><i class="fa-brands fa-twitter"></i></Link></li>
              <li><Link><i class="fa-brands fa-linkedin-in"></i></Link></li>
            </ul>
          </div>
          <div className="content relative">
            <p className="text-2xl">Harish Ham</p>
            <p style={{ color: "#77838F" }} className="mt-2">
            SEO Expert
            </p>
            <div className="course-datils mt-5">
              <div
                className="flex justify-center gap-5"
                style={{ color: "#77838F" }}
              >
                <div className="flex gap-2 items-baseline " style={{fontSize :'14px'}}>
                  <i class="fa-regular fa-user" style={{color : '#015ABD'}}></i> <p>20 Students</p>
                </div>
                <div className={`flex gap-2 items-baseline `}  style={{fontSize :'14px'}}>
                <i class="fa-solid fa-circle-play" style={{color : '#015ABD' }}></i> <p>2 Course</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="teachers-box">
          <div className="img-container relative">
            <img
              src="/images/team-2.jpg"
              className=" h-auto max-w-full "
              alt=""
            />
            <ul className="social-media flex gap-2 absolute  bottom-14">
              <li><Link><i class="fa-brands fa-facebook-f"></i></Link></li>
              <li><Link><i class="fa-brands fa-twitter"></i></Link></li>
              <li><Link><i class="fa-brands fa-linkedin-in"></i></Link></li>
            </ul>
          </div>
          <div className="content relative">
            <p className="text-2xl">Harish Ham</p>
            <p style={{ color: "#77838F" }} className="mt-2">
            CEO, Developer
            </p>
            <div className="course-datils mt-5">
              <div
                className="flex justify-center gap-5"
                style={{ color: "#77838F" }}
              >
                <div className="flex gap-2 items-baseline " style={{fontSize :'14px'}}>
                  <i class="fa-regular fa-user" style={{color : '#015ABD'}}></i> <p>20 Students</p>
                </div>
                <div className={`flex gap-2 items-baseline `}  style={{fontSize :'14px'}}>
                <i class="fa-solid fa-circle-play" style={{color : '#015ABD' }}></i> <p>2 Course</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="teachers-box">
          <div className="img-container relative">
            <img
              src="/images/team-3.jpg"
              className=" h-auto max-w-full "
              alt=""
            />
            <ul className="social-media flex gap-2 absolute  bottom-14">
              <li><Link><i class="fa-brands fa-facebook-f"></i></Link></li>
              <li><Link><i class="fa-brands fa-twitter"></i></Link></li>
              <li><Link><i class="fa-brands fa-linkedin-in"></i></Link></li>
            </ul>
          </div>
          <div className="content relative">
            <p className="text-2xl">Harish Ham</p>
            <p style={{ color: "#77838F" }} className="mt-2">
            Web eveloper
            </p>
            <div className="course-datils mt-5">
              <div
                className="flex justify-center gap-5"
                style={{ color: "#77838F" }}
              >
                <div className="flex gap-2 items-baseline " style={{fontSize :'14px'}}>
                  <i class="fa-regular fa-user" style={{color : '#015ABD'}}></i> <p>20 Students</p>
                </div>
                <div className={`flex gap-2 items-baseline `}  style={{fontSize :'14px'}}>
                <i class="fa-solid fa-circle-play" style={{color : '#015ABD' }}></i> <p>2 Course</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="teachers-box">
          <div className="img-container relative">
            <img
              src="/images/team-1.jpg"
              className=" h-auto max-w-full "
              alt=""
            />
            <ul className="social-media flex gap-2 absolute  bottom-14">
              <li><Link><i class="fa-brands fa-facebook-f"></i></Link></li>
              <li><Link><i class="fa-brands fa-twitter"></i></Link></li>
              <li><Link><i class="fa-brands fa-linkedin-in"></i></Link></li>
            </ul>
          </div>
          <div className="content relative">
            <p className="text-2xl">Harish Ham</p>
            <p style={{ color: "#77838F" }} className="mt-2">
            Marketer
            </p>
            <div className="course-datils mt-5">
              <div
                className="flex justify-center gap-5"
                style={{ color: "#77838F" }}
              >
                <div className="flex gap-2 items-baseline " style={{fontSize :'14px'}}>
                  <i class="fa-regular fa-user" style={{color : '#015ABD'}}></i> <p>20 Students</p>
                </div>
                <div className={`flex gap-2 items-baseline `}  style={{fontSize :'14px'}}>
                <i class="fa-solid fa-circle-play" style={{color : '#015ABD' }}></i> <p>2 Course</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        
   
      
      </div>
    </div>
  );
}
