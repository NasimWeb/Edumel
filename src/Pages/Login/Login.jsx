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
      <SingleBanner title={"Login"} curRoute={"Login"} />
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[570px] content-center justify-center my-20">
          <form className="login-form ">
            <h2 className="mb-5 text-center text-bold text-3xl">Login</h2>
            <p className="text-center mb-9">
              don't have account yet ?{" "}
              <Link to={"/Register"}>create account here</Link>
            </p>

            <div className="flex flex-col gap-1">
              <label htmlFor="" className="mb-3" style={{color : '#77838F'}}>
                username or email *
              </label>
              <input className="form-control mb-9" type="text"  style={{direction: 'ltr'}}/>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="" className="mb-3" style={{color : '#77838F'}}>
                password *
              </label>
              <input className="form-control" type="text" style={{direction: 'ltr'}} />
            </div>

            <div className="flex justify-between mt-8 items-center">
              <div className="flex items-center gap-2">
                <input type="checkbox" name="" id=""  style={{direction: 'ltr'}}/>
                <label htmlFor="" style={{color : '#77838F'}} >
                  remember me
                </label>
              </div>
              <Link to={'/Login'} style={{color : '#F14D5D'}}>forget your password?</Link>
            </div>

              <button className="btn btn-main w-full mt-9 p-3 rounded" type="submit">Login</button>

          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
