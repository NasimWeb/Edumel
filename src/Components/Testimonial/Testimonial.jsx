import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import "swiper/css";

function Testimonial() {
  return (
    <div style={{ background: "#F4F7FC" }}>
    <div
      className="container mx-auto lg:px-52 py-36 mt-5"
      
    >
      <h2 class="text-center mb-2 font-bold text-3xl">
      Our Students Says
      </h2>
      <p class="text-center mb-20" style="color: rgb(119, 119, 119);">
        {" "}
        Discover Your Perfect Program In Our Courses.{" "}
      </p>

      <div style={{ background: "" }}>
        <Swiper
        className="p-3"
          spaceBetween={15}
          slidesPerView={3}
          draggable={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            0 :{
              slidesPerView:1
            },
            992 : {
              slidesPerView:3
            }
          }}
        >
          <SwiperSlide>
            <div className="testimonial-inner">
            <i class="fa-solid fa-quote-left text-5xl"></i>
            <p className="mt-5">
                                Cras vel purus fringilla, lobortis libero ut Proin a velit convallis, fermentum orci in, rutrum diam. Duis elementum odio a pharetra commodo.
                            </p>
            <div className="flex gap-5 mt-5">
             <div className="img-testimonial" style={{width : '60px'}}>
                <img className="h-auto max-w-full rounded-full" src="/images/team-4.jpg" alt="" />
             </div>
             <div className="detail ">
                <p className="text-xl">Nikolas Brooten</p>
                <p>Sales Manager</p>
             </div>
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-inner">
            <i class="fa-solid fa-quote-left text-5xl"></i>
            <p className="mt-5">
                                Cras vel purus fringilla, lobortis libero ut Proin a velit convallis, fermentum orci in, rutrum diam. Duis elementum odio a pharetra commodo.
                            </p>
            <div className="flex gap-5 mt-5">
             <div className="img-testimonial" style={{width : '60px'}}>
                <img className="h-auto max-w-full rounded-full" src="/images/testimonial-avata-04.jpg" alt="" />
             </div>
             <div className="detail ">
                <p className="text-xl">Nikolas Brooten</p>
                <p>Sales Manager</p>
             </div>
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-inner">
            <i class="fa-solid fa-quote-left text-5xl"></i>
            <p className="mt-5">
                                Cras vel purus fringilla, lobortis libero ut Proin a velit convallis, fermentum orci in, rutrum diam. Duis elementum odio a pharetra commodo.
                            </p>
            <div className="flex gap-5 mt-5">
             <div className="img-testimonial" style={{width : '60px'}}>
                <img className="h-auto max-w-full rounded-full" src="/images/team-2.jpg" alt="" />
             </div>
             <div className="detail ">
                <p className="text-xl">Nikolas Brooten</p>
                <p>Sales Manager</p>
             </div>
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-inner">
            <i class="fa-solid fa-quote-left text-5xl"></i>
            <p className="mt-5">
                                Cras vel purus fringilla, lobortis libero ut Proin a velit convallis, fermentum orci in, rutrum diam. Duis elementum odio a pharetra commodo.
                            </p>
            <div className="flex gap-5 mt-5">
             <div className="img-testimonial" style={{width : '60px'}}>
                <img className="h-auto max-w-full rounded-full" src="/images/testimonial-avata-04.jpg" alt="" />
             </div>
             <div className="detail ">
                <p className="text-xl">Nikolas Brooten</p>
                <p>Sales Manager</p>
             </div>
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-inner">
            <i class="fa-solid fa-quote-left text-5xl"></i>
            <p className="mt-5">
                                Cras vel purus fringilla, lobortis libero ut Proin a velit convallis, fermentum orci in, rutrum diam. Duis elementum odio a pharetra commodo.
                            </p>
            <div className="flex gap-5 mt-5">
             <div className="img-testimonial" style={{width : '60px'}}>
                <img className="h-auto max-w-full rounded-full" src="/images/team-3.jpg" alt="" />
             </div>
             <div className="detail ">
                <p className="text-xl">Nikolas Brooten</p>
                <p>Sales Manager</p>
             </div>
            </div>
            </div>
          </SwiperSlide>
       
        </Swiper>
      </div>
    </div>
    </div>
  );
}

export default Testimonial;
