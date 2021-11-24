import React from "react";
import Ent from "../Images/ent.png";
import Startup from "../Images/startup.png";
import Ridl from "../Images/riidl.jpg";
import Times from "../Images/toi.png";
import XVC from "../Images/xvc.png";
import Sow from "../Images/sv.png";
import YS from "../Images/ys.png";
import Course from "./Course";
import Course1 from "./Course1";

function Recognition() {
  return (
    <>
      <div className="h-screen">
        <h1 className="text-center mt-8 mb-12 text-5xl">Our Recognition </h1>
        <div className="flex justify-around mt-4 mb-4">
          <img src={Startup} alt="startup" className="h-12 w-45 lg:h-8 w-30" />
          <img src={Ridl} alt="ridl" className="h-12 w-45 lg:h-8 w-30" />
          <img src={Times} alt="TOI" className="h-12 w-45 lg:h-8 w-30" />
          <img src={XVC} alt="EntImage" className="h-12 w-45 lg:h-8 w-30" />
          <img src={Sow} alt="EntImage" className="h-12 w-45 lg:h-8 w-30" />
          <img src={YS} alt="EntImage" className="h-12 w-45 lg:h-8 w-30" />
          <img src={Ent} alt="EntImage" className="h-12 w-45 lg:h-8 w-30" />
        </div>
        <div className="mt-16 p-4 ml-16 shadow-lg">
          <button className=" text-2xl text-white bg-blue-900 px-4 py-2 mr-8 rounded-2xl ">
            Featured
          </button>
          <button className="text-2xl text-white bg-gray-600 mr-8 px-4 py-1 rounded-2xl">
            Recorded
          </button>
          <button className="text-2xl text-white bg-gray-600 px-4 py-1  rounded-2xl">
            Live
          </button>
        </div>
        <div>
          <Course />
          <Course1 />
        </div>
        <div className="mb-12">
          <button className="text-2xl mt-16 ml-auto absolute left-2/4  bg-red-600 border-solid rounded-md text-white px-12 py-1">
            View All Courses
          </button>
        </div>
      </div>
    </>
  );
}

export default Recognition;
