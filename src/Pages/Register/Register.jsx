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
      <SingleBanner title={"Register"} curRoute={"Register"} />
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[570px] content-center justify-center my-20">
          <form className="login-form" style={{ direction: "ltr" }}>
            <h2 className="mb-5 text-center text-bold text-3xl">Register</h2>
            <p className="text-center mb-9">
              Do you have account ?{" "}
              <Link to={"/Login"}>login here</Link>
            </p>

            <div className="flex flex-col gap-1">
              <label htmlFor="" className="mb-3" style={{ color: "#77838F" }}>
                username *
              </label>
              <input className="form-control mb-3" type="text" style={{direction: 'ltr'}} />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="" className="mb-3" style={{ color: "#77838F" }}>
                name  
              </label>
              <input className="form-control mb-3" type="text" style={{direction: 'ltr'}} />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="" className="mb-3" style={{ color: "#77838F" }}>
                phone 
              </label>
              <input className="form-control mb-3" type="text" style={{direction: 'ltr'}} />
            </div>

            <div className="flex flex-col gap-1 mt-5">
              <label htmlFor="" className="mb-3" style={{ color: "#77838F" }}>
                email *
              </label>
              <input className="form-control" type="text" style={{direction: 'ltr'}} />
            </div>

            <div className="flex flex-col gap-1 mt-5">
              <label htmlFor="" className="mb-3" style={{ color: "#77838F" }}>
                password *
              </label>
              <input className="form-control" type="text" style={{direction: 'ltr'}} />
            </div>

            <div className="flex flex-col gap-1 mt-5">
              <label htmlFor="" className="mb-3" style={{ color: "#77838F" }}>
                confirm password *
              </label>
              <input className="form-control" type="text" style={{direction: 'ltr'}} />
            </div>

            <div className="flex justify-between mt-8 items-center">
              <div className="flex items-center gap-2">
                <input type="checkbox" name="" id="" style={{direction: 'ltr'}} />
                <label htmlFor="" style={{ color: "#77838F" }}>
                  I agree
                </label>
              </div>
            </div>
            <button
              className="btn btn-main w-full mt-9 p-3 rounded"
              onClick={(e) => RegisterUser(e)}
            >
              Register
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
