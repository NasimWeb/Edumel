import React from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import SingleBanner from "../../Components/SingleBanner/SingleBanner";
import Footer from "../../Components/Footer/Footer";
import "./Login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <SingleBanner title={"ورود"} curRoute={"ورود"} />

      <div className="container px-48">
        <div className="grid grid-cols-[570px] content-center justify-center my-20">
          <form className="login-form " style={{ direction: "rtl" }}>
            <h2 className="mb-5 text-center text-bold text-3xl">ورود</h2>
            <p className="text-center mb-9">
              هنوز ثبت نام نکردید؟{" "}
              <Link to={"/Register"}>برای ثبت نام کلیک کنید</Link>
            </p>

            <div className="flex flex-col gap-1">
              <label htmlFor="" className="mb-3" style={{color : '#77838F'}}>
                نام کاربری یا ایمیل *
              </label>
              <input className="form-control mb-9" type="text" />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="" className="mb-3" style={{color : '#77838F'}}>
                رمز عبور *
              </label>
              <input className="form-control" type="text" />
            </div>

            <div className="flex justify-between mt-8 items-center">
              <div className="flex items-center gap-2">
                <input type="checkbox" name="" id="" />
                <label htmlFor="" style={{color : '#77838F'}} >
                  مرا به خاطر بسپار
                </label>
              </div>
              <Link to={'/Login'} style={{color : '#F14D5D'}}>پسورد خود را فراموش کردید؟</Link>
            </div>

              <button className="btn btn-main w-full mt-9 p-3 rounded" type="submit">ورود</button>

          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
