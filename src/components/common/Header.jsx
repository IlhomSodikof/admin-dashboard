
// import { useTheme } from "@/hooks/use-theme";

import { Bell, LogOut, Moon, Sun } from "lucide-react";

import { useContext, useEffect, useState, } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Dropdown from "./Dropdown";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [logoutSt, setLogoutSt] = useState(false)
  const { theme, toggleTheme, dispatch } = useContext(GlobalContext)
  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Tokenni o'chirish
    dispatch({ type: "LOGOUT" }); // Contextdagi foydalanuvchini tozalash
    setLogoutSt(true)
    // navigate("/login"); // Login sahifasiga yo'naltirish
  };
  useEffect(() => {
    if (logoutSt) {
      navigate("/login");
    }

  }, [logoutSt])

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute('data-theme', theme)
    console.log(theme);

  }, [theme])
  return (
    <>

      <header className=' relative z-20 bg-base-100 bg-opacity-50 backdrop-blur-md shadow-lg  flex h-[60px] items-center justify-between px-28'>

        <div className="flex items-centergap-x-3">

        </div>
        <div className="flex items-center gap-4">
          {/* <div className="relative "> */}
          <Dropdown />
          {/* </div> */}


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


          <span className="px-5 text-sm font-bold text-base-content">Name family</span>
          {/* <button className="size-8 overflow-hidden rounded-full">
            <img
              src="https://img.freepik.com/premium-photo/memoji-happy-man-white-background-emoji_826801-6839.jpg?ga=GA1.1.1242391120.1741867338&semt=ais_keywords_boost"
              alt="profile image"
              className="size-full object-cover"
            />
          </button> */}
          <button className="btn-ghost" onClick={handleLogout}>
            <LogOut className="text-base-content" size={20} />
          </button>
        </div>
      </header >
    </>
  );
};
export default Header;

