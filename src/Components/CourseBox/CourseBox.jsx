import React from "react";
import "./CourseBox.css";

function CourseBox({img}) {
  return (
    <div className="course-box  bg-white relative">
      <div className="course-header relative">
        <div className="course-img">
          <img
            className="rounded h-auto max-w-full w-full "
            src={img}
            alt=""
          />
        </div>
        <div className="price absolute bottom-0 text-white font-bold text-lg px-3 py-2">
          300$
        </div>
      </div>
      <div className="course-body p-5">
        <div className=" flex gap-2 my-4">
          <div className="flex rating gap-2">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <div className="review">4.5(40 reviews)</div>
        </div>
        <div className="course-title text-2xl mb-10">
        Data Competitive Strategy law & Organization
        </div>
        <div className="flex gap-4">
          <div className="details"><i class="fa-regular fa-clock"></i> 6.5hr</div>
          <div className="details"><i class="fa-regular fa-user"></i> 51 students</div>
          <div className="details"><i class="fa-regular fa-circle-play"></i> 97 lessons</div>
        </div>
      </div>
      <div className="hover-content absolute ">
        <div class="price">$450</div>
        <h3 class="course-title mb-2 mt-3">
          {" "}
          <a href="/">
            {" "}
            Data Competitive Strategy law &amp; Organization 3
          </a>{" "}
        </h3>
        <div class="course-meta flex align-items-center mb-7">
          <div class="author me-4">
            <img
              src="assets/images/course/course-2.jpg"
              alt=""
              class="img-fluid"
            />
            <a href="/"><i class="fa-regular fa-user"></i> John</a>
          </div>
          <span class="lesson">
            {" "}
            <i class="far fa-file-alt"></i> 97 lessons
          </span>
        </div>
        <p class="mb-20"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, culpa. At voluptatem autem ipsam deleniti</p>
        <a href="/" className="btn btn-grey btn-sm rounded">Join Now <i class="fa-solid fa-angle-right"></i></a>
      </div>
    </div>
  );
}

export default CourseBox;
