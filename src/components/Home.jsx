import React from "react";

export default function Home() {

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between bg-gray-800 ">
        <div className="container px-4 flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <h1>Welcome Back Aryo</h1>
            <p>Here's what's happening with your store today</p>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center   leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-facebook-square leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Overview</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center   leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-twitter leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Performance</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center  leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-twitter leading-lg text-white opacity-75"></i>
                  <span className="ml-2">staticstics</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center   leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-twitter leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Add Campaign</span>
                </a>
              </li>
           
            </ul>
          </div>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center   leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-facebook-square leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Download Report</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center  leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-twitter leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Date Picker</span>
                </a>
              </li>
           
            </ul>
        </div>
      </nav>
    </>
  );
}
