import React from "react";
import cou1 from "../Images/1.webp";
import cou2 from "../Images/3.webp";
import cou3 from "../Images/4.webp";
import EastIcon from "@mui/icons-material/East";

function Course1() {
  return (
    <>
      <div className="flex mt-24 ml-16">
        <div>
          <img src={cou1} alt="Cou1" className="h-42 w-96" />
          <h1 className="mt-4 text-3xl font-bold">PYTHON LIVE</h1>
          <p className="mt-6 text-2xl w-10/12 text-gray-600">
            Master Java Development to become a solid Backend Developer
          </p>
          <h2 className="mt-6 text-xl ml-12 w-6/12 pl-4 bg-gray-100">
            B PM to 9 PM |30 Days
          </h2>
          <button className="mt-4 ml-60 text-xl font-medium  text-blue-700">
            Book a Seat <EastIcon className="text-blue-700" />
          </button>
        </div>
        <div>
          <img src={cou2} alt="Cou1" className="h-42 w-96" />
          <h1 className="mt-4 text-3xl font-bold">SOFTWARE TESTING LIVE</h1>
          <p className="mt-6 text-2xl w-10/12 text-gray-600">
            Master Java Development to become a solid Backend Developer
          </p>
          <h2 className="mt-6 text-xl ml-12 w-6/12 pl-4 bg-gray-100">
            B PM to 9 PM |30 Days
          </h2>
          <button className="mt-4 ml-60 text-xl font-medium  text-blue-700">
            Book a Seat <EastIcon className="text-blue-700" />
          </button>
        </div>
        <div>
          <img src={cou3} alt="Cou1" className="h-42 w-96" />
          <h1 className="mt-4 text-3xl font-bold">MYSQL</h1>
          <p className="mt-6 text-2xl w-10/12 text-gray-600">
            Master Java Development to become a solid Backend Developer
          </p>
          <h2 className="mt-6 text-xl ml-12 w-6/12 pl-4 bg-gray-100">
            B PM to 9 PM |30 Days
          </h2>
          <button className="mt-4 ml-60 text-xl font-medium  text-blue-700">
            Book a Seat <EastIcon className="text-blue-700" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Course1;
