import React, { useEffect } from "react";
import "../index.css";
import SearchIcon from "@mui/icons-material/Search";
import CallIcon from "@mui/icons-material/Call";
import DehazeIcon from "@mui/icons-material/Dehaze";
import ClearIcon from "@mui/icons-material/Clear";

let Btn = document.getElementById("btn");

function Navbar() {
  if (Btn) {
    Btn.addEventListener("click", function () {
      if (Btn.classList.contains(<DehazeIcon />)) {
        Btn.classList.remove(<DehazeIcon />);
        Btn.classList.add(<ClearIcon />);
      } else {
        Btn.classList.remove(<ClearIcon />);
        Btn.classList.add(<DehazeIcon />);
      }
    });
  }

  return (
    <>
      <div className="flex justify-between md:block ">
        <div className="m-4 flex justify-start content-center ml-8 lg:block md:block">
          <a href="#" className="text-2xl bg-white ml-8 ">
            <DehazeIcon
              id="btn"
              className="-mr-6 opacity-0 md:opacity-100 md:mr-2"
            />
            Micro<span className="text-red-500 text-3xl">Degree</span>
          </a>
          <a
            href="#"
            className=" ml-8 mt-1.5 items-center text-blue-700 text-2xl lg:block md:block md:ml-16"
          >
            Courses
          </a>
          <form>
            <input
              className="ml-8 mt-2 border-solid border-2 rounded p-1 md:ml-16 "
              type="text"
              placeholder="what do you wan to learn"
            />
          </form>
        </div>
        <div>
          <nav className="mr-8 mt-8 md:ml-24 md:-mt-4 ">
            <a className="mr-8 text-2xl " href="#">
              More
            </a>
            <a
              className="mr-8 text-2xl text-red-500 border-solid border-red-500 border-2 rounded-md px-2 md:block md:px-2 md:w-6/12 mt-2"
              href="#"
            >
              <CallIcon className="mr-2" />
              Contact Us
            </a>
            <a
              className="mr-8 text-2xl bg-red-600 border-solid rounded-md text-white px-4 py-1 md:block md px-2 md:block md:px-2 md:w-6/12 md:mt-2"
              href="#"
            >
              Login
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
