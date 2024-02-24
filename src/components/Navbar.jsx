import { NavLink } from "react-router-dom";

import logo from "./../assets/images/logo.png";

function Navbar() {
  return (
    <div className="h-screen hidden lg:block my-4 mr-4 shadow-lg relative w-80">
      <div className="bg-white dark:bg-slate-800 h-full rounded-2xl">
        <div className="h-16 flex justify-center items-center">
          <h1 className="sr-only">پدمین</h1>
          <img src={logo} alt="پدمین" className="object-cover h-12 w-12" />
        </div>
        <nav className="pt-2">
          <NavLink
            to="dashboard"
            className="w-full flex items-center text-gray-500 dark:text-slate-50 dark:hover:text-purple-700 p-4 my-2 transition-colors duration-200 font-thin justify-start hover:text-blue-500"
          >
            <span className="text-left">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 2048 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
              </svg>
            </span>
            <span className="mx-4">داشبورد</span>
          </NavLink>

          <NavLink
            to="users"
            className="w-full flex items-center text-gray-500 dark:text-slate-50 dark:hover:text-purple-700 p-4 my-2 transition-colors duration-200 font-thin justify-start hover:text-blue-500"
          >
            <span className="text-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </span>
            <span className="mx-4">کاربران</span>
          </NavLink>

          <NavLink
            to="form"
            className="w-full flex items-center text-gray-500 dark:text-slate-50 dark:hover:text-purple-700 p-4 my-2 transition-colors duration-200 font-thin justify-start hover:text-blue-500"
          >
            <span className="text-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </span>
            <span className="mx-4">فرم‌ها</span>
          </NavLink>

          <NavLink
            to="chart"
            className="w-full flex items-center text-gray-500 dark:text-slate-50 dark:hover:text-purple-700 p-4 my-2 transition-colors duration-200 font-thin justify-start hover:text-blue-500"
          >
            <span className="text-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M6 21H3a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1zm7 0h-3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1zm7 0h-3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1z"></path>
              </svg>
            </span>
            <span className="mx-4">آمار</span>
          </NavLink>
        </nav>
        <div className="absolute bottom-0 my-10">
          <a
            className="text-gray-600 hover:text-gray-800 dark:hover:text-slate-50 transition-colors duration-200 flex items-center py-2 px-8"
            href="https://github.com/mr-meshky"
          >
            <svg
              width="20"
              xmlns="http://www.w3.org/2000/svg"
              className="text-blue-500 h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="mx-4">مسترمشکی</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
