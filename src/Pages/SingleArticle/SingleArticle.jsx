import React from "react";
import "./SingleArticle.css";
import { Link, useParams } from "react-router-dom";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import SingleBanner from "../../Components/SingleBanner/SingleBanner";
import Footer from "../../Components/Footer/Footer";
import useArticle from "../../hooks/useArticle";
import { useState } from "preact/hooks";

function SingleArticle() {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useArticle(id);
  const [activeTab, setActiveTab] = useState("Overview");

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <Topbar />
      <Navbar />
      <SingleBanner
        title={data?.title}
        prevRoute="blog"
        curRoute={data?.title}
        prevLink = '/articles'
      />
      <div className="container mx-auto my-10 lg:px-36">
        <div className="grid grid-cols-1 lg:grid-cols-[800px_minmax(250px,_1fr)] gap-5 mt-10">
          <div>
            <div className=" p-5" style={{ background: " #F8F8F8" }}>
              <h2 className="text-4xl text-bold mt-5 ">{data?.title}</h2>
              <p className=" mt-5 p-5" style={{ color: "#77838F" }}>
                {data?.body}
              </p>
              <div className="details mt-5">
                <div className="flex flex-wrap lg:flex-nowrap items-center gap-4">
                  <img
                    src="/images/course-author.png"
                    style={{
                      borderRradius: "100%",
                      marginRight: "15px",
                      width: "30px",
                      height: "30px",
                    }}
                    className="rounded-full "
                    alt=""
                  />
                  <p className="text-black">Madge Alvarez</p>
                  <div className="flex items-center gap-1">
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#f7c04d", fontSize: "14px" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#f7c04d", fontSize: "14px" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#f7c04d", fontSize: "14px" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#f7c04d", fontSize: "14px" }}
                    ></i>
                    (19)
                  </div>
                  <div className="flex gap-2">
                    <i class="fa-solid fa-user"></i>
                    <div>11 enrolled students</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <ul className="flex gap-2 tabs flex-wrap lg:flex-nowrap  text-gray-500 text-lg text-bold relative">
                <Link
                  to={"#"}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab("Overview");
                  }}
                >
                  <li
                    className={`p-5 ${
                      activeTab === "Overview" ? "activeTab" : ""
                    }`}
                  >
                    Overview
                  </li>
                </Link>
                <Link
                  to={"#"}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab("Curriculam");
                  }}
                >
                  <li
                    className={`p-5 ${
                      activeTab === "Curriculam" ? "activeTab" : ""
                    }`}
                  >
                    Curriculam
                  </li>
                </Link>
                <Link
                  to={"#"}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab("Instructor");
                  }}
                >
                  <li
                    className={`p-5 ${
                      activeTab === "Instructor" ? "activeTab" : ""
                    }`}
                  >
                    Instructor
                  </li>
                </Link>
                <Link
                  to={"#"}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab("Reviews");
                  }}
                >
                  <li
                    className={`p-5 ${
                      activeTab === "Reviews" ? "activeTab" : ""
                    }`}
                  >
                    Reviews
                  </li>
                </Link>
              </ul>
              <hr />

              {activeTab === 'Overview' && (
                <>
                  <h2 className="mt-10 text-bold text-xl px-2">Description</h2>
                  <p className="my-10 px-2" style={{ color: "#77838F" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero labore quos nostrum autem rerum. Vel, quidem ipsam?
                    Vitae eligendi modi voluptatem consequatur doloremque
                    necessitatibus ducimus, aliquid facere voluptate sed
                    cupiditate.
                  </p>

                  <h2 className="mt-10 text-bold text-xl px-2">
                    What You will Learn?
                  </h2>
                  <ul className="flex flex-wrap lg:flex-nowrap flex-col gap-5 my-10 px-2">
                    <li style={{ color: "#77838F" }}>
                      <i class="fa-solid fa-check"></i> Clean up face
                      imperfections, improve and repair photos
                    </li>
                    <li style={{ color: "#77838F" }}>
                      <i class="fa-solid fa-check"></i> Clean up face
                      imperfections, improve and repair photos
                    </li>
                    <li style={{ color: "#77838F" }}>
                      <i class="fa-solid fa-check"></i> Clean up face
                      imperfections, improve and repair photos
                    </li>
                    <li style={{ color: "#77838F" }}>
                      <i class="fa-solid fa-check"></i> Clean up face
                      imperfections, improve and repair photos
                    </li>
                    <li style={{ color: "#77838F" }}>
                      <i class="fa-solid fa-check"></i> Clean up face
                      imperfections, improve and repair photos
                    </li>
                    <li style={{ color: "#77838F" }}>
                      <i class="fa-solid fa-check"></i> Clean up face
                      imperfections, improve and repair photos
                    </li>
                  
                  </ul>
                </>
              )}
                {activeTab === 'Curriculam' && (
                <>
                  <h2 className="mt-10 text-bold text-xl px-3">Description</h2>
                  <p className="my-10 px-2" style={{ color: "#77838F" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero labore quos nostrum autem rerum. Vel, quidem ipsam?
                    Vitae eligendi modi voluptatem consequatur doloremque
                    necessitatibus ducimus, aliquid facere voluptate sed
                    cupiditate.
                  </p>

                 
                </>
              )}
                {activeTab === 'Instructor' && (
                <>
                  <h2 className="mt-10 text-bold text-xl px-3">Description</h2>
                  <p className="my-10 px-2" style={{ color: "#77838F" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero labore quos nostrum autem rerum. Vel, quidem ipsam?
                    Vitae eligendi modi voluptatem consequatur doloremque
                    necessitatibus ducimus, aliquid facere voluptate sed
                    cupiditate.
                  </p>

                 
                </>
              )}
                {activeTab === 'Reviews' && (
                <>
                  <h2 className="mt-10 text-bold text-xl px-3">Description</h2>
                  <p className="my-10 px-2" style={{ color: "#77838F" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero labore quos nostrum autem rerum. Vel, quidem ipsam?
                    Vitae eligendi modi voluptatem consequatur doloremque
                    necessitatibus ducimus, aliquid facere voluptate sed
                    cupiditate.
                  </p>

                 
                </>
              )}
            </div>
          </div>
          <aside>
            <div className="bg-white border border-gray-100 p-10">
              <img
                src="https://etacs.com.au/wp-content/uploads/2024/02/08.jpg"
                alt=""
              />
              <div className="mt-5 flex flex-wrap justify-between  lg:flex-nowrap gap-3 ">
                <p className="text-red-500 text-bold text-3xl">$120.00</p>
                <span
                  className="text-gray-500 text-bold text-3xl "
                  style={{ textDecoration: "line-through" }}
                >
                  $150
                </span>
                <div
                  className="bg-gray-100 text-blue-400 rounded  items-center flex justify-center align-center px-3"
                  style={{  fontSize: "12px" }}
                >
                  39%OFF
                </div>
              </div>
                <div className="mt-5">
                  <div className="flex justify-between mb-5">
                  <div className="flex gap-2 items-center gap-1">
                  <i className="fa-solid fa-turn-up " style={{color : 'rgb(119, 131, 143)'}}></i>
                  <span>level</span>
                  </div>
                  <p style={{color : 'rgb(119, 131, 143)'}}>Beginnner</p>
                  </div>
                  <hr />
                  <div className="flex  justify-between my-5 ">
                  <div className="flex gap-2 items-center gap-1">
                
                  <i className="fa-solid fa-play" style={{color : 'rgb(119, 131, 143)'}}></i>
                  <span>Lectures</span>
                  </div>
                  <p style={{color : 'rgb(119, 131, 143)'}}>2</p>
                  </div>
                  <hr />
                  <div className="flex  justify-between my-5">
                  <div className="flex gap-2 items-center">
                  <i className="fa-solid fa-user" style={{color : 'rgb(119, 131, 143)'}}></i>
                  <span>Students</span>
                  </div>
                  <p style={{color : 'rgb(119, 131, 143)'}}>5</p>
                  </div>
                  <hr />
                  <div className="flex justify-between my-5">
                  <div className="flex gap-2 items-center">
                  <i className="fa-solid fa-turn-up " style={{color : 'rgb(119, 131, 143)'}}></i>
                  <span>Duration</span>
                  </div>
                  <p style={{color : 'rgb(119, 131, 143)'}}>6 hours</p>
                  </div>
                  <hr />
                  <div className="flex justify-between my-5">
                  <div className="flex gap-2 items-center">
                  <i className="fa-solid fa-globe" style={{color : 'rgb(119, 131, 143)'}}></i>
                  <span>Language</span>
                  </div>
                  <p style={{color : 'rgb(119, 131, 143)'}}>English</p>
                  </div>
                  <hr />
                  <div className="flex justify-between my-5">
                  <div className="flex gap-2 items-center">
                  <i class="fa-solid fa-calendar"  style={{color : 'rgb(119, 131, 143)'}}></i>
                  <span>Updated</span>
                  </div>
                  <p style={{color : 'rgb(119, 131, 143)'}}>October 15, 2022</p>
                  </div>
                  <hr />
                </div>
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SingleArticle;

