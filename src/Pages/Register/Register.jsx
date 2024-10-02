import React from "react";
import "./Register.css";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import SingleBanner from "../../Components/SingleBanner/SingleBanner";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import { useContext } from "preact/hooks";
import authContext from "../../Contexts/AthContext";

export default function Register() {

  const auth = useContext(authContext);

  
  
  const RegisterUser = (e) => {
    e.preventDefault()
    console.log(auth);

   
  }

  return (
    <div>
      <Topbar />
      <Navbar />
      <SingleBanner title={"ثبت نام"} curRoute={"ثبت نام"} />
      <div className="container px-48">
        <div className="grid grid-cols-[570px] content-center justify-center my-20">
          <form className="login-form " style={{ direction: "rtl" }}>
            <h2 className="mb-5 text-center text-bold text-3xl">ثبت نام</h2>
            <p className="text-center mb-9">
              قبلا ثبت نام کردید ؟{" "}
              <Link to={"/Login"}>برای ورود کلیک کنید</Link>
            </p>

            <div className="flex flex-col gap-1">
              <label htmlFor="" className="mb-3" style={{ color: "#77838F" }}>
                نام کاربری *
              </label>
              <input className="form-control mb-3" type="text" />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="" className="mb-3" style={{ color: "#77838F" }}>
                نام  
              </label>
              <input className="form-control mb-3" type="text" />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="" className="mb-3" style={{ color: "#77838F" }}>
                شماره 
              </label>
              <input className="form-control mb-3" type="text" />
            </div>

            <div className="flex flex-col gap-1 mt-5">
              <label htmlFor="" className="mb-3" style={{ color: "#77838F" }}>
                ایمیل *
              </label>
              <input className="form-control" type="text" />
            </div>

            <div className="flex flex-col gap-1 mt-5">
              <label htmlFor="" className="mb-3" style={{ color: "#77838F" }}>
                رمز عبور *
              </label>
              <input className="form-control" type="text" />
            </div>

            <div className="flex flex-col gap-1 mt-5">
              <label htmlFor="" className="mb-3" style={{ color: "#77838F" }}>
                تکرار رمز عبور *
              </label>
              <input className="form-control" type="text" />
            </div>

            <div className="flex justify-between mt-8 items-center">
              <div className="flex items-center gap-2">
                <input type="checkbox" name="" id="" />
                <label htmlFor="" style={{ color: "#77838F" }}>
                  با قوانین ادومل موافقم
                </label>
              </div>
            </div>
            <button
              className="btn btn-main w-full mt-9 p-3 rounded"
              onClick={(e) => RegisterUser(e)}
            >
              ورود
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
