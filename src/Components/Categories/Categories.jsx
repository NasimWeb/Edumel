import React from "react";
import "./Categories.css";

function Categories() {
  return (
    <div className="bg-category">
      <div className="container mx-auto px-10 mt-5 mb-24 pt-20 pb-32">
        <div className="sec-title">
          <h2 className="text-center mb-2 font-bold text-3xl">Categories you want to learn</h2>
          <p className="text-center mb-20" style={{ color: "#77838F" }}>
          Aenean eu leo quam. Pellentesque ornare sem lacinia quam
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">

          <div className="single-course-category flex flex-col justify-center bg-5">
            <div className=" bg-white flex justify-center ctegory-img">
              <img
                className="rounded h-auto max-w-full"
                src="/images/icon1.png"
                alt=""
              />
            </div>

            <div className="text flex justify-center ">
              <p className="text-xl text">Data Science & Analytics</p>
            </div>
          </div>

          <div className="single-course-category flex flex-col justify-center bg-2">
            <div className=" bg-white flex justify-center ctegory-img">
              <img
                className="rounded h-auto max-w-full"
                src="/images/icon2.png"
                alt=""
              />
            </div>

            <div className="text flex justify-center ">
              <p className="text-xl text">Artificial Intellegence</p>
            </div>
          </div>

          <div className="single-course-category flex flex-col justify-center bg-3">
            <div className=" bg-white flex justify-center ctegory-img">
              <img
                className="rounded h-auto max-w-full"
                src="/images/icon6.png"
                alt=""
              />
            </div>

            <div className="text flex justify-center ">
              <p className="text-xl text" >Algebra Math Calculation</p>
            </div>
          </div>

          <div className="single-course-category flex flex-col justify-center bg-4">
            <div className=" bg-white flex justify-center ctegory-img">
              <img
                className="rounded h-auto max-w-full"
                src="/images/icon4.png"
                alt=""
              />
            </div>

            <div className="text flex justify-center ">
              <p className="text-xl text">Web Development</p>
            </div>
          </div>

          <div className="single-course-category flex flex-col justify-center bg-1">
            <div className=" bg-white flex justify-center ctegory-img">
              <img
                className="rounded h-auto max-w-full"
                src="/images/icon6.png"
                alt=""
              />
            </div>

            <div className="text flex justify-center ">
              <p className="text-xl text">Digital Marketing & SEO</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Categories;
