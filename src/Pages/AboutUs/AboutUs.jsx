import React from "react";
import "./AboutUs.css";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import SingleBanner from "../../Components/SingleBanner/SingleBanner";
import Footer from "../../Components/Footer/Footer";
import Testimonial from '../../Components/Testimonial/Testimonial'
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <SingleBanner title={"About us"} curRoute={"About us"} />

      <div className="container mx-auto ">
        <div className="10-years-glory-of-success grid grid-cols-1 lg:grid-cols-[500px_minmax(600px,_1fr)] px-5 lg:px-48  gap-10 my-20">
          <div className="image-sec">
            <img
              src="/images/img_9.png"
              className=" h-auto max-w-full "
              alt=""
            />
          </div>
          <div className="content-sec" style={{ direction: "ltr" }}>
            <span className="mb-9" style={{ color: "#015ABD" }}>
            10 years Glory of success
            </span>
            <h2 className="text-bold text-4xl mt-5">
            Some reasons why Start Your Online Learning with Us
            </h2>

            <div className="features mt-10">
              <ul className="flex flex-col gap-9">
                <div className="flex items-center gap-8">
                  <span
                    className="rounded-full text-2xl p-4 text-white flex items-center justify-center"
                    style={{ background: "#4D41E1" }}
                  >
                    <i class="fa-solid fa-video"></i>
                  </span>
                  <div>
                    <li className="mb-3">Online Classes</li>
                    <p style={{ color: "#77838F" }}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem veniam nulla inventore dolores fuga
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <span
                    className="rounded-full text-2xl p-4 text-white flex items-center justify-center"
                    style={{ background: "#F14D5D" }}
                  >
                    <i class="fa-solid fa-certificate"></i>
                  </span>
                  <div>
                    <li className="mb-3">Skilled Instructors</li>
                    <p style={{ color: "#77838F" }}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem veniam nulla inventore dolores fuga{" "}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <span
                    className="rounded-full text-2xl p-4 text-white flex items-center justify-center"
                    style={{ background: "#2878EB" }}
                  >
                    <i class="fa-solid fa-user"></i>
                  </span>
                  <div>
                    <li className="mb-3">Get Certificate</li>
                    <p style={{ color: "#77838F" }}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem veniam nulla inventore dolores fuga{" "}
                    </p>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>

        <div className="10-years-glory-of-success grid frid-cols-1 lg:grid-cols-[600px_minmax(500px,_1fr)] px-5 lg:px-48  gap-12 my-20">
          <div className="content-sec" style="direction: ltr;">
            <span className="mb-9" style="color: rgb(1, 90, 189);">
            How to Start
            </span>
            <h2 className="text-bold text-4xl mt-5">
            4 steps start your journey with us
            </h2>
            <div className="features mt-10">
              <ul className="flex flex-wrap lg:flex-nowrap gap-10  lg:gap-0 items-center">
                <div className="flex flex-col gap-10">
                  <div className="flex items-center gap-8">
                    <span
                      className="rounded-full text-2xl p-4 text-white flex items-center justify-center"
                      style="background:#DD246E"
                    >
                      01
                    </span>
                    <div>
                      <li className="mb-3">Signup with all info</li>
                      <p style="color: rgb(119, 131, 143);">
                      Lorem ipsum dolor seat ameat dui too consecteture elite adipaising.
                      </p>
                    </div>
                  </div>
                  <div class="flex items-center gap-8">
                    <span
                      class="rounded-full text-2xl p-4 text-white flex items-center justify-center"
                      style="background:#1162FC"
                    >
                      03
                    </span>
                    <div>
                      <li class="mb-3">Learn from online</li>
                      <p style="color: rgb(119, 131, 143);">
                      Lorem ipsum dolor seat ameat dui too consecteture elite adipaising.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-10">
                  <div class="flex items-center gap-8">
                    <span
                      class="rounded-full text-2xl p-4 text-white flex items-center justify-center"
                      style="background: #00C0A6"
                    >
                      02
                    </span>
                    <div>
                      <li class="mb-3">Take your Admission</li>
                      <p style="color: rgb(119, 131, 143);">
                      Lorem ipsum dolor seat ameat dui too consecteture elite adipaising.{" "}
                      </p>
                    </div>
                  </div>
                  <div class="flex items-center gap-8">
                    <span
                      class="rounded-full text-2xl p-4 text-white flex items-center justify-center"
                      style="background:#DD246E"
                    >
                      04
                    </span>
                    <div>
                      <li class="mb-3">Get certificate</li>
                      <p style="color: rgb(119, 131, 143);">
                      Lorem ipsum dolor seat ameat dui too consecteture elite adipaising.
                      </p>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </div>
          <div className="image-sec mt-7">
            <div className="video-section flex justify-center items-center p-28">
              <Link
                className="text-white rounded-full  icon-bg items-center justify-center px-6 "
                style={{ background: "#F14D5D" }}
                to={"/"}
              >
                <i class="fa-solid fa-play"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Testimonial />
      <Footer />
    </div>
  );
}

export default AboutUs;
