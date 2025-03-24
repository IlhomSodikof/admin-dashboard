
// import { useTheme } from "@/hooks/use-theme";

import { Bell, LogOut, Moon, Sun } from "lucide-react";

import { useContext, useEffect, } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Header = () => {
  const { theme, toggleTheme } = useContext(GlobalContext)

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute('data-theme', theme)
    console.log(theme);

  }, [theme])
  return (
    <>

      <header className=' bg-base-100 bg-opacity-50 backdrop-blur-md shadow-lg  flex h-[60px] items-center justify-between px-28'>

        <div className="flex items-centergap-x-3">

        </div>
        <div className="flex items-center gap-4">
          <label className="swap swap-rotate items-center ">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" onClick={() => toggleTheme("eee")} />
            <Sun
              size={20}
              className="swap-off text-base-content"
            />
            <Moon
              size={20}
              className=" swap-on text-base-content"
            />

          </label>

          <div className="btn-ghost relative">
            <Bell size={20} className="text-orange-500" />
            <div className="  absolute top-[-1px] left-[0.70rem] p-[0.15rem] rounded-full  bg-base-100"><span className="bg-red-600 rounded-full block w-[0.35rem] h-[0.35rem]"></span></div>
          </div>
          <span className="px-5 text-sm font-bold text-base-content">Name family</span>
          {/* <button className="size-8 overflow-hidden rounded-full">
            <img
              src="https://img.freepik.com/premium-photo/memoji-happy-man-white-background-emoji_826801-6839.jpg?ga=GA1.1.1242391120.1741867338&semt=ais_keywords_boost"
              alt="profile image"
              className="size-full object-cover"
            />
          </button> */}
          <button className="btn-ghost">
            <LogOut className="text-base-content" size={20} />
          </button>
        </div>
      </header >
    </>
  );
};
export default Header;

