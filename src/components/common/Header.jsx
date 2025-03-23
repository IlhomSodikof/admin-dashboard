
// import { useTheme } from "@/hooks/use-theme";

import { Bell, LogOut, Moon, Search, Sun } from "lucide-react";

// import profileImg from "@/assets/profile-image.jpg";

import PropTypes from "prop-types";
import { useState } from "react";
const Header = ({ collapsed, setCollapsed }) => {
  const { theme, setTheme } = useState();

  return (
    <>

      <header className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg  flex h-[60px] items-center justify-between px-28'>
        {/* <div className='max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8'>
          <h1 className='text-2xl font-semibold text-gray-100'>{ }</h1>
        </div> */}
        {/* </header>
      <header className="relative z-10 flex h-[60px] items-center justify-between bg-gray-800  px-4 "> */}
        <div className="flex items-centergap-x-3">
          {/* <button
          className="btn-ghost size-10"
          onClick={() => setCollapsed(!collapsed)}
        >
          <ChevronsLeft className={collapsed && "rotate-180"} />
        </button>
        <div className="input">
          <Search
            size={20}
            className="text-slate-300"
          />
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
            className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:text-slate-50"
          />
        </div> */}
        </div>
        <div className="flex items-center gap-x-3">
          <button
            className="btn-ghost size-10"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <Sun
              size={20}
              className="dark:hidden"
            />
            <Moon
              size={20}
              className="hidden dark:block"
            />
          </button>
          <button className="btn-ghost size-10">
            <Bell size={20} />
          </button>
          <button className="size-8 overflow-hidden rounded-full">
            <img
              src="https://img.freepik.com/premium-photo/memoji-happy-man-white-background-emoji_826801-6839.jpg?ga=GA1.1.1242391120.1741867338&semt=ais_keywords_boost"
              alt="profile image"
              className="size-full object-cover"
            />
          </button>
          <button className="btn-ghost size-10">
            <LogOut color="#f8f1f1" />
          </button>
        </div>
      </header>
    </>
  );
};
export default Header;

Header.propTypes = {
  collapsed: PropTypes.bool,
  setCollapsed: PropTypes.func,
};