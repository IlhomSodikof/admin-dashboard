
import React, { useContext, useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { GlobalContext } from "../components/context/GlobalContext";
import { useNavigate } from "react-router-dom";

export default function Login() {


  const [showPassword, setShowPassword] = useState(false); // Parolni ko'rish holati
  const [loginData, setLoginData] = useState({ username: "", password: "" }); // Login va parol holati
  const { theme, dispatch, user } = useContext(GlobalContext); // Light/Dark mavzu
  const [isLoading, setIsLoading] = useState(false); // Yuklanish holati
  const [errorMessage, setErrorMessage] = useState(""); // Xatolik xabari
  const [successMessage, setSuccessMessage] = useState(""); // Muvaffaqiyatli xabar
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {

    setShowPassword(!showPassword); // Parol ko'rinishini boshqarish
  };

  // Input boshqaruv
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Login funksiyasi
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await fetch("http://dilshodakosmetolog.uz/employee/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login muvaffaqiyatli:", data?.access);
        dispatch({ type: "LOGIN", payload: data?.access })// Tokenni localStorage ga saqlash
        localStorage.setItem("authToken", data?.access); // Tokenni localStorage ga saqlash
        setSuccessMessage("Tizimga muvaffaqiyatli kirdingiz!");

      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Username yoki parol noto‘g‘ri.");
      }
    } catch (error) {
      setErrorMessage("Serverga ulanishda xatolik yuz berdi.");
      console.error("Xatolik:", error);
    } finally {
      setIsLoading(false);
      navigate("/");

    }
  };


  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{ backgroundColor: theme === "light" ? "#ecf2f7" : "#1f1a2a87" }}
    >
      <div className="max-w-lg w-full p-8 rounded-xl shadow-lg bg-base-100">
        <h2 className="text-2xl font-bold mb-6 text-center text-base-content">
          Login
        </h2>
        <form className="space-y-4" onSubmit={handleLogin}>
          {/* Username */}
          <div>
            <label className="block text-sm font-medium mb-1 text-base-content">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={loginData.username}
              onChange={handleInputChange}
              className="w-full px-4 py-2 text-base-content border bg-[#ecf2f7a8] rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              style={{ backgroundColor: theme === "light" ? "#ecf2f795" : "transparent" }}
              placeholder="admin"
              required
            />
          </div>

          {/* Parol */}
          <div className="relative">
            <label className="block text-sm font-medium mb-1 text-base-content">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={loginData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-2 text-base-content border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              style={{ backgroundColor: theme === "light" ? "#ecf2f795" : "transparent" }}
              placeholder="••••••••"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-3 top-6 flex items-center text-gray-500 hover:text-indigo-500"
            >
              {showPassword ? (
                <EyeOff style={{ color: theme === "light" ? "grey" : "white" }} />
              ) : (
                <Eye />
              )}
            </button>
          </div>

          {/* Xabarlar */}
          {errorMessage && (
            <p className="text-red-500 text-sm text-center">{errorMessage}</p>
          )}
          {successMessage && (
            <p className="text-green-500 text-sm text-center">{successMessage}</p>
          )}

          {/* Submit tugmasi */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full ${isLoading ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"
              } text-white font-medium py-2.5 rounded-lg transition-colors`}
          >
            {isLoading ? "Yuklanmoqda..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}







// import React, { useContext, useState } from "react";
// import { Eye, EyeOff } from "lucide-react";
// import { GlobalContext } from "../components/context/GlobalContext";
// import { useNavigate } from "react-router-dom"; // Foydalanuvchini yo'naltirish

// export default function Login() {
//   const [showPassword, setShowPassword] = useState(false); // Parolni ko'rish holati
//   const [loginData, setLoginData] = useState({ username: "", password: "" }); // Login va parol holati
//   const { theme } = useContext(GlobalContext); // Light/Dark mavzu
//   const [isLoading, setIsLoading] = useState(false); // Yuklanish holati
//   const [errorMessage, setErrorMessage] = useState(""); // Xatolik xabari
//   const navigate = useNavigate(); // Foydalanuvchini yo'naltirish uchun

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword); // Parol ko'rinishini boshqarish
//   };

//   // Input boshqaruv
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setLoginData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   // Login funksiyasi
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setErrorMessage("");

//     try {
//       const response = await fetch("http://dilshodakosmetolog.uz/employee/login/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(loginData),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log("Login muvaffaqiyatli:", data);
//         localStorage.setItem("authToken", data.token); // Tokenni localStorage ga saqlash
//           // Tizimga muvaffaqiyatli kirganidan so'ng bosh sahifaga yo'naltirish
//       } else {
//         const errorData = await response.json();
//         setErrorMessage(errorData.message || "Username yoki parol noto‘g‘ri.");
//       }
//     } catch (error) {
//       setErrorMessage("Serverga ulanishda xatolik yuz berdi.");
//       console.error("Xatolik:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center p-4"
//       style={{ backgroundColor: theme === "light" ? "#ecf2f7" : "#1f1a2a87" }}
//     >
//       <div className="max-w-lg w-full p-8 rounded-xl shadow-lg bg-base-100">
//         <h2 className="text-2xl font-bold mb-6 text-center text-base-content">
//           Login
//         </h2>
//         <form className="space-y-4" onSubmit={handleLogin}>
//           {/* Username */}
//           <div>
//             <label className="block text-sm font-medium mb-1 text-base-content">
//               Username
//             </label>
//             <input
//               type="text"
//               name="username"
//               value={loginData.username}
//               onChange={handleInputChange}
//               className="w-full px-4 py-2 text-base-content border bg-[#ecf2f7a8] rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
//               style={{ backgroundColor: theme === "light" ? "#ecf2f795" : "transparent" }}
//               placeholder="admin"
//               required
//             />
//           </div>

//           {/* Parol */}
//           <div className="relative">
//             <label className="block text-sm font-medium mb-1 text-base-content">
//               Password
//             </label>
//             <input
//               type={showPassword ? "text" : "password"}
//               name="password"
//               value={loginData.password}
//               onChange={handleInputChange}
//               className="w-full px-4 py-2 text-base-content border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
//               style={{ backgroundColor: theme === "light" ? "#ecf2f795" : "transparent" }}
//               placeholder="••••••••"
//               required
//             />
//             <button
//               type="button"
//               onClick={togglePasswordVisibility}
//               className="absolute inset-y-0 right-3 top-6 flex items-center text-gray-500 hover:text-indigo-500"
//             >
//               {showPassword ? (
//                 <EyeOff style={{ color: theme === "light" ? "grey" : "white" }} />
//               ) : (
//                 <Eye />
//               )}
//             </button>
//           </div>

//           {/* Xabarlar */}
//           {errorMessage && (
//             <p className="text-red-500 text-sm text-center">{errorMessage}</p>
//           )}

//           {/* Submit tugmasi */}
//           <button
//             type="submit"
//             disabled={isLoading}
//             className={`w-full ${isLoading ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"
//               } text-white font-medium py-2.5 rounded-lg transition-colors`}
//           >
//             {isLoading ? "Yuklanmoqda..." : "Login"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
