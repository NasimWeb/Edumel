import React from "react";
import "./Courses.css";
import { Link } from "react-router-dom";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import SingleBanner from "../../Components/SingleBanner/SingleBanner";
import Footer from "../../Components/Footer/Footer";
import { useEffect, useState } from "preact/hooks";
import CoursesBox from "../../Components/CoursesBox/CoursesBox";
import useCourses from "../../hooks/useCourses";
import Pagination from "../../Components/Pagination/Pagination";

function Courses() {
  
  const { data, isLoading, error, isError } = useCourses();
  const [searchData , setSearchData] = useState();

  const courses = data?.slice();
  const [itemsToShow,setItemsToShow]  = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const totalItems = 100; 
  const itemsPerPage = 4; 
  const pagesPerGroup = 5; 

  const [currentPage, setCurrentPage] = useState(1);

  const filterData = (e) => {
     const value =  e.target.value
     setSearchData(value)

    if (value) {
      const filteredCourse= data.filter((course) => course.title.toLowerCase().startsWith(value.toLowerCase())); 
       setItemsToShow(filteredCourse)
    }
  }

  
  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const items = courses?.slice(startIndex, endIndex); 
    return items;
  };



  
  

  return (
    <>
   
      <Topbar />
      <Navbar />
      <SingleBanner title={"Courses"} curRoute="Courses"  />
      <div className="container mx-auto lg:px-36">
        <div className="blogs-list p-10 ">
          <div className="grid grid-cols-1  lg:grid-cols-[750px_minmax(350px,_1fr)] mt-16 gap-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4" style={{alignContent : 'baseline'}}>
              {itemsToShow ? (
                itemsToShow.map(item => {
                  return (
                    <CoursesBox
                      img="https://etacs.com.au/wp-content/uploads/2024/02/08.jpg"
                      title={item?.title}
                      desc={item?.desc}
                      id = {item?.id}
                    />
                  )
                })
              ) :  getCurrentPageItems()?.map((course) => {
                return (
                  <CoursesBox
                    img="https://etacs.com.au/wp-content/uploads/2024/02/08.jpg"
                    title={course?.title}
                    desc={course?.desc}
                    id = {course?.id}
                  />
                );
              })}
             
            </div>
            <div>
              <div className="sidebar">
                <div className="searchbar-sidebar ">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="search"
                      className="form-control"
                      style={{ direction: "ltr" }}
                      value={searchData}
                      onInput={(e) => filterData(e)}
                    />
                    <i
                      class="fa-solid fa-magnifying-glass cursor-pointer absolute top-5 right-3"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
              </div>
              <div className="latest-posts ">
                <h2 className="text-2xl font-bold text-start mb-9">
                  last Posts
                </h2>

                <div className="flex flex-col gap-10">
                  {courses?.reverse().slice(0, 3).map((item) => {
                      return (
                        <div className="post flex items-center gap-5">
                          <img
                            src="https://etacs.com.au/wp-content/uploads/2024/02/08.jpg"
                            className="w-20 h-auto rounded"
                            alt=""
                          />
                          <Link to={`/courses/${item.id}`}>
                            {" "}
                            <p className="font-bold">{item.title}</p>
                          </Link>
                        </div>
                      );
                    })}
                </div>
              </div>
              <div className="Categories mt-10">
                <h2 className="text-2xl font-bold text-start mb-9">
                  Categories
                </h2>

                <div className="flex flex-col gap-10">
                  <ul className="cetories-list px-4">
                    <li className="gap-5 p-4">
                      <Link>Design & dev</Link>
                      <span>(6)</span>
                    </li>
                    <li className="gap-5 p-4">
                      <Link>Marketing</Link>
                      <span>(24)</span>
                    </li>
                    <li className="gap-5 p-4">
                      <Link>Web Design</Link>
                      <span>(4)</span>
                    </li>
                    <li className="gap-5 p-4">
                      <Link>Wordpress</Link>
                      <span>(14)</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="Tags mt-10">
                <h2 className="text-2xl font-bold text-start mb-9">Tags</h2>
                <div>
                  <Link>Design</Link>
                  <Link>Development</Link>
                  <Link>UX</Link>
                  <Link>Marketing</Link>
                  <Link>Tricks</Link>
                  <Link>Ui</Link>
                  <Link>Free</Link>
                  <Link>Wordpress</Link>
                  <Link>bootstrap</Link>
                  <Link>Tutorial</Link>
                  <Link>Html</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between  bg-white px-4 py-3 sm:px-6">
                <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                  <div>
                    <Pagination
                      totalItems={totalItems}
                      itemsPerPage={itemsPerPage}
                      pagesPerGroup={pagesPerGroup}
                      currentPage={currentPage}
                      setCurrentPage={setCurrentPage}
                    />
                  </div>
                </div>
              </div>
        </div>
      </div>
      <Footer />
      </>
  );
}

export default Courses;
