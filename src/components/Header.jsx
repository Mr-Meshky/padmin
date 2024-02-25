import { useEffect, useRef } from "react";

import prof from "./../assets/images/prof.jpg";

function Header() {
  const themeRef = useRef(null);

  const changeThemeHanler = () => {
    if (localStorage.theme === "light") {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      themeRef.current.checked = true;
    } else {
      document.documentElement.classList.remove("dark");
      themeRef.current.checked = false;
    }
  }, []);

  return (
    <header className="w-full shadow-lg bg-white dark:bg-slate-800 h-16 md:rounded-2xl z-40">
      <div className="z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
        <div className="pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0">
          <div className="container left-0 z-50 flex w-3/4 h-full">
            <div className="relative flex items-center w-full lg:w-64 h-full group">
              <svg
                className="absolute right-0 z-20 w-4 h-4 mr-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
              </svg>
              <input
                type="text"
                className="block w-full py-1.5 pr-10 pl-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-100 text-gray-400 dark:bg-slate-700"
                placeholder="جستجو"
              />
            </div>
          </div>
          <div className="p-1 flex items-center justify-end gap-3 w-1/4">
            <div className="h-10 flex items-center justify-center">
              <label className="text-base relative inline-block w-14 h-8">
                <input
                  type="checkbox"
                  className="opacity-0 w-0 h-0 peer"
                  id="themeChanger"
                  ref={themeRef}
                  onChange={changeThemeHanler}
                />
                <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-[#28096b] transition duration-500 rounded-[30px] before:absolute before:h-[1.4em] before:w-[1.4em] before:rounded-full before:left-[10%] before:bottom-[15%] before:bg-[#28096b] before:shadow-[inset_8px_-4px_0px_0px_#fff000] before:transition before:duration-500 peer-checked:before:translate-x-full peer-checked:before:shadow-[inset_15px_-4px_0px_15px_#fff000] peer-checked:bg-[#522ba7]"></span>
              </label>
            </div>

            <img
              alt="پروفایل کاربر"
              src={prof}
              className="object-cover rounded-full h-10 w-10 left-1 cursor-pointer hover:scale-110 transition"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
