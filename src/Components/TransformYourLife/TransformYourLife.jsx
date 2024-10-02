import React from "react";
import "./TransformYourLife.css";


function TransformYourLife() {
  return (
    <div className="container  mx-auto lg:px-52 mt-5 mb-24">
      <h2 className="text-center mb-2 font-bold text-3xl">Transform Your Life</h2>
      <p className="text-center mb-20" style={{ color: "#777" }}>
        {" "}
        Discover Your Perfect Program In Our Courses.{" "}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-4">
        <div className="flex flex-col gap-5 justify-center  property-box rounded border-0">
          <div className="flex justify-center">
          <i class="fa-solid fa-chalkboard-user text-5xl"
          style={{ color: "#F14D5D" }}
          ></i>
          </div>

          <h2 className="text-center text-xl">Expert Teacher</h2>

          <p className="text-center">Develop skills for career of various majors including computer</p>
        </div>
        <div className="flex flex-col gap-5 justify-center  property-box rounded border-0">
          <div className="flex justify-center">
          <i class="fa-regular fa-window-maximize  text-5xl" 
           style={{ color: "#F14D5D" }}
          ></i>
          </div>

          <h2 className="text-center text-xl">Self Development</h2>

          <p className="text-center">Develop skills for career of various majors including computer.</p>
        </div>
        <div className="flex flex-col gap-5 justify-center  property-box rounded border-0">
          <div className="flex justify-center">
          <i class="fa-solid fa-video text-5xl"  style={{ color: "#F14D5D" }}></i>
          </div>

          <h2 className="text-center text-xl">Remote Learning</h2>

          <p className="text-center">Develop skills for career of various majors including language</p>
        </div>
        <div className="flex flex-col gap-5 justify-center  property-box rounded border-0">
          <div className="flex justify-center">
            <i
              class="fa-solid fa-timeline text-5xl"
              style={{ color: "#F14D5D" }}
            ></i>
          </div>

          <h2 className="text-center text-xl">Life Time Support</h2>

          <p className="text-center">Develop skills for career of various majors including language</p>
        </div>
      </div>
    </div>
  );
}

export default TransformYourLife;
