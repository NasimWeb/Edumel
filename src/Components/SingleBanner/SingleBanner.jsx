import React from "react";
import "./SingleBanner.css";
import BreadCrumb from "../BreadCrumb/BreadCrumb";

export default function SingleBanner({title , curRoute , prevRoute , prevLink}) {
  return (
    <div className="page-header">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl text-white font-bold">{title}</h2>
              <BreadCrumb curRoute = {curRoute} prevRoute = {prevRoute} prevLink={prevLink} />
      </div>
    </div>
  );
}
