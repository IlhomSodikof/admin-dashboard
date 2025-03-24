import React, { useContext, useState } from 'react'
import { Eye, EyeOff } from "lucide-react";
import { GlobalContext } from '../components/context/GlobalContext';


export default function Login() {
  const [showPassword, setShowPassword] = useState(false); // Parolni ko'rish holati
  const { theme } = useContext(GlobalContext)
  const togglePasswordVisibility = () => {


    setShowPassword(!showPassword); // Ko'rinishni almashtirish
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: theme == "light" ? "#ecf2f7" : "#1f1a2a87" }}>
        <div className="max-w-lg w-full p-8 rounded-xl">
          <div className="max-w-md w-ful  rounded-xl shadow-lg p-8 bg-base-100" >
            <h2 className="text-2xl font-bold text-base-content mb-6 text-center">Login</h2>

            <form className="space-y-4 mb-4">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-base-content mb-1">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 text-base-content border bg-[#ecf2f7a8] rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all" style={{ backgroundColor: theme == "light" ? "#ecf2f795" : "transparent" }}
                  placeholder="Ismingizni kriting"
                />
              </div>

              {/* Password with Eye Icon */}
              <div className="relative">
                <label className="block text-sm font-medium text-base-content mb-1">Password</label>
                <input
                  type={showPassword ? "text" : "password"} // Dinamik ravishda text yoki password
                  className="w-full px-4 py-2 text-base-content border bg-transparent rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all" style={{ backgroundColor: theme == "light" ? "#ecf2f795" : "transparent" }}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  // Parolni ko'rinishni boshqaradi
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-3 top-6 flex items-center text-gray-500 hover:text-indigo-500"
                >
                  {showPassword ? (
                    <EyeOff className='text-base-content' style={{ color: theme == "light" ? "grey" : "white" }} />
                  ) : (
                    <Eye className='text-base-content' />
                  )}
                </button>
              </div>

              {/* Remember Me and Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 bg-transparent text-indigo-600 focus:ring-indigo-500"
                  />
                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
                {/* <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500">Forgot password?</a> */}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white  font-medium py-2.5 rounded-lg transition-colors"
              >
                Login
              </button>
            </form>


          </div>
        </div>
      </div>
    </>
  )
}
