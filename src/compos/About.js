import React from "react";

function About() {
  return (
    <>
      <div className="bg-red-500 mt-8 pb-72  ">
        <h1 className="text-white  ml-8 p-8 text-6xl">MICRODEGREE </h1>
        <h2 className="text-white ml-8 text-5xl p-8 ">
          ಕನ್ನಡಿಗರಿಗೆ IT Job-Ready ಮಾಡುವ ಅಭಿಯಾನ
        </h2>
        <p className="text-gray-900 ml-14 text-3xl">10K+ Learners</p>
        <button className="text-white ml-14 text-2xl mt-8 bg-red-600 border-solid rounded-md text-white px-8 py-3">
          Explore Courses
        </button>
      </div>
    </>
  );
}

export default About;
