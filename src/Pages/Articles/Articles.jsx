import React, { useState } from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import SingleBanner from "../../Components/SingleBanner/SingleBanner";
import BlogsBox from "../../Components/BlogsBox/BlogsBox";
import "./Articles.css";
import { Link } from "react-router-dom";
import { useEffect } from "preact/hooks";
import useArticles from "../../hooks/useArticles";
import Pagination from "../../Components/Pagination/Pagination";

export default function Articles() {
  const { data, isLoading, error, isError, isFetching } = useArticles();
  const [searchData, setSearchData] = useState();

  const articles = data?.slice();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const searchdata = () => {
    const filteredData = data?.filter((item) =>
      item.title.startsWith(searchData)
    );
    
    if (filteredData?.length) {
      return filteredData;
    } else {
      return null;
    }
  };

  const totalItems = 100; // تعداد کل آیتم‌ها
  const itemsPerPage = 4; // تعداد آیتم‌ها در هر صفحه
  const pagesPerGroup = 4; // تعداد صفحاتی که در هر گروه باید نمایش داده شوند

  const [currentPage, setCurrentPage] = useState(1);

  // دریافت آیتم‌های صفحه فعلی
  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const items = articles?.slice(startIndex, endIndex);    
    return items;
  };

  return (
    <>
      <Topbar />
      <Navbar />
      <SingleBanner title={"Blog"} curRoute={"Blog"} />
      <div className="container mx-auto lg:px-36">
        <div className="blogs-list p-10 ">
          <div className="grid grid-cols-1  lg:grid-cols-[750px_minmax(350px,_1fr)] mt-16 gap-16">
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {searchdata()?.length
                  ? searchdata()?.map((item) => {
                      return (
                        <BlogsBox
                          img="https://static.wixstatic.com/media/317902_d6bdfa5f0c484e47ab10f948d254b8ac~mv2.jpg/v1/fill/w_758,h_606,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/317902_d6bdfa5f0c484e47ab10f948d254b8ac~mv2.jpg"
                          title={item.title}
                          desc={item.body}
                          id={article.id}
                        />
                      );
                    })
                  : getCurrentPageItems()?.map((article) => {
                      return (
                        <BlogsBox
                          img="https://static.wixstatic.com/media/317902_d6bdfa5f0c484e47ab10f948d254b8ac~mv2.jpg/v1/fill/w_758,h_606,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/317902_d6bdfa5f0c484e47ab10f948d254b8ac~mv2.jpg"
                          title={article.title}
                          desc={article.body}
                          id={article.id}
                        />
                      );
                    })}
              </div>

              <div className="flex items-center mt-20 justify-between  bg-white px-4 py-3 sm:px-6">
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
            <div>
              <div className="sidebar">
                <div className="searchbar-sidebar ">
                  <div className="relative">
                    <i
                      class="fa-solid fa-magnifying-glass cursor-pointer absolute top-5 right-3"
                      aria-hidden="true"
                      onClick={searchdata}
                    ></i>
                    <input
                      type="text"
                      placeholder="search"
                      className="form-control"
                      style={{ direction: "ltr" }}
                      value={searchData}
                      onChange={(e) => setSearchData(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="latest-posts ">
                <h2 className="text-2xl font-bold text-end mb-9">last posts</h2>

                <div className="flex flex-col gap-10">
                  {getCurrentPageItems()
                    ?.slice(0, 3)
                    .reverse()
                    .map((item) => {
                      return (
                        <div className="post flex items-center gap-5">
                          <img
                            src="https://static.wixstatic.com/media/317902_d6bdfa5f0c484e47ab10f948d254b8ac~mv2.jpg/v1/fill/w_758,h_606,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/317902_d6bdfa5f0c484e47ab10f948d254b8ac~mv2.jpg"
                            className="w-20 h-auto rounded"
                            alt=""
                          />
                          <Link to={`${item.id}`}>
                            {" "}
                            <p className="font-bold">{item.title}</p>
                          </Link>
                        </div>
                      );
                    })}
                </div>
              </div>
              <div className="Categories mt-10">
                <h2 className="text-2xl font-bold text-end mb-9">Categories</h2>

                <div className="flex flex-col gap-10">
                  <ul className="cetories-list px-4">
                    <li className="gap-5 p-4">
                      <Link>Design & dev</Link>
                      <span>(6)</span>
                    </li>
                    <li className="gap-5 p-4">
                      <Link>Web Design</Link>
                      <span>(4)</span>
                    </li>
                    <li className="gap-5 p-4">
                      <Link>Wordpress</Link>
                      <span>(14)</span>
                    </li>
                    <li className="gap-5 p-4">
                      <Link>Marketing</Link>
                      <span>(24)</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="Tags mt-10 ">
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
        </div>
      </div>
      <Footer />
    </>
  );
}
