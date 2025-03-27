// import { motion } from "framer-motion";

// import Header from "../components/common/Header";
// import { Search, } from "lucide-react";
// import UsersTable from "../components/users/UsersTable";
// import { useContext, useEffect, useState } from "react";
// import { GlobalContext } from "../components/context/GlobalContext";
// import { DataService } from "../config/DataService";
// import { endpoints } from "../config/endpoinds";

// const ProductsPage = () => {
//   const [apiData, setApiData] = useState();
//   const fetchData = async () => {
//     const response = await DataService.get(endpoints.debtors)
//     // console.log(response, "havolalar");
//     setApiData(response?.results);
//     // console.log(response?.results);

//   };
//   useEffect(() => {
//     fetchData();


//   }, []);
//   // //


//   return (
//     <div className='flex-1 overflow-auto relative z-10'>
//       <Header title='Products' />

//       <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>


//         {/* USER TABLE */}
//         <motion.div className="className='p-6'
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.2 }}">
//           <div className='flex justify-between items-center mb-6 px-6'>
//             <h2 className='text-xl font-semibold text-base-content'>Mijozlar</h2>
//             <div className='relative'>
//               <input
//                 type='text'
//                 placeholder='Search users...'
//                 className=' text-base-content bg-eleg placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
//               // style={{ backgroundColor: theme == "light" ? "#ecf2f7" : "#1f1a2a87" }}
//               />
//               <Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
//             </div>
//           </div>
//           <UsersTable apiData={apiData} />
//         </motion.div>

//       </main>
//     </div>
//   );
// };
// export default ProductsPage;


// import { motion } from "framer-motion";
// import Header from "../components/common/Header";
// import { Search } from "lucide-react";
// import UsersTable from "../components/users/UsersTable";
// import { useEffect, useState } from "react";
// import { DataService } from "../config/DataService";
// import { endpoints } from "../config/endpoinds";

// const ProductsPage = () => {
//   const [apiData, setApiData] = useState([]); // API dan kelgan data
//   const [searchTerm, setSearchTerm] = useState(""); // Qidiruv so'rovi
//   const [loading, setLoading] = useState(false); // Yuklanish holati

//   // API'dan ma'lumotlarni olish
//   const fetchData = async (searchQuery = "") => {
//     setLoading(true); // Yuklanish holatini boshlash
//     try {
//       const endpoint = searchQuery
//         ? `${endpoints.debtors}?search=${searchQuery}` // Qidiruv uchun API
//         : endpoints.debtors; // Umumiy ma'lumot uchun API
//       const response = await DataService.get(endpoint);
//       setApiData(response?.results || []); // Natijalarni saqlash
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     } finally {
//       setLoading(false); // Yuklanish holatini tugatish
//     }
//   };

//   // Boshlang'ich ma'lumotlarni olish
//   useEffect(() => {
//     fetchData();
//   }, []);

//   // Qidiruvni boshqarish
//   const handleSearch = (event) => {
//     const value = event.target.value;
//     setSearchTerm(value); // Qidiruv so'rovini saqlash
//     fetchData(value); // Qidiruv API chaqirish
//   };

//   return (
//     <div className="flex-1 overflow-auto relative z-10">
//       <Header title="Products" />

//       <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
//         {/* USER TABLE */}
//         <motion.div
//           className="p-6"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//         >
//           <div className="flex justify-between items-center mb-6 px-6">
//             <h2 className="text-xl font-semibold text-base-content">Mijozlar</h2>
//             <div className="relative">
//               <input
//                 type="text"
//                 value={searchTerm}
//                 onChange={handleSearch}
//                 placeholder="Search users..."
//                 className="text-base-content bg-eleg placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <Search
//                 className="absolute left-3 top-2.5 text-gray-400"
//                 size={18}
//               />
//             </div>
//           </div>
//           {/* Table */}
//           {loading ? (
//             <p className="text-center text-gray-500">Loading...</p>
//           ) : (
//             <UsersTable apiData={apiData} />
//           )}
//         </motion.div>
//       </main>
//     </div>
//   );
// };

// export default ProductsPage;

// import { motion } from "framer-motion";
// import Header from "../components/common/Header";
// import { Search } from "lucide-react";
// import UsersTable from "../components/users/UsersTable";
// import { useEffect, useState } from "react";
// import { DataService } from "../config/DataService";
// import { endpoints } from "../config/endpoinds";

// const ProductsPage = () => {
//   const [apiData, setApiData] = useState([]); // API dan kelgan data
//   const [searchTerm, setSearchTerm] = useState(""); // Qidiruv so'rovi
//   const [loading, setLoading] = useState(false); // Yuklanish holati

//   // API'dan ma'lumotlarni olish
//   const fetchData = async (searchQuery = "") => {
//     setLoading(true); // Loaderni ko'rsatish
//     try {
//       const endpoint = searchQuery
//         ? `${endpoints.debtors}?search=${searchQuery}` // Qidiruv uchun API
//         : endpoints.debtors; // Umumiy ma'lumot uchun API
//       const response = await DataService.get(endpoint);
//       setApiData(response?.results || []); // Natijalarni saqlash
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     } finally {
//       setLoading(false); // Loaderni yashirish
//     }
//   };

//   // Boshlang'ich ma'lumotlarni olish
//   useEffect(() => {
//     fetchData();
//   }, []);

//   // Qidiruvni boshqarish
//   const handleSearch = (event) => {
//     const value = event.target.value;
//     setSearchTerm(value); // Qidiruv so'rovini saqlash
//     fetchData(value); // Qidiruv API chaqirish
//   };

//   return (
//     <div className="flex-1 overflow-auto relative z-10">
//       <Header title="Products" />

//       <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
//         {/* USER TABLE */}
//         <motion.div
//           className="p-6"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//         >
//           <div className="flex justify-between items-center mb-6 px-6">
//             <h2 className="text-xl font-semibold text-base-content">Mijozlar</h2>
//             <div className="relative">
//               <input
//                 type="text"
//                 value={searchTerm}
//                 onChange={handleSearch}
//                 placeholder="Search users..."
//                 className="text-base-content bg-eleg placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <Search
//                 className="absolute left-3 top-2.5 text-gray-400"
//                 size={18}
//               />
//             </div>
//           </div>
//           {/* Table */}
//           {loading ? (
//             <motion.div
//               className=" flex justify-center items-center h-[60vh]"
//               initial={{ opacity: 1 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
//             </motion.div>
//           ) : (
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.3, ease: "easeInOut" }}
//             >
//               <UsersTable apiData={apiData} />
//             </motion.div>
//           )}
//         </motion.div>
//       </main>
//     </div>
//   );
// };

// export default ProductsPage;

import { motion } from "framer-motion";
import Header from "../components/common/Header";
import { Search } from "lucide-react";
import UsersTable from "../components/users/UsersTable";
import { useEffect, useState } from "react";
import { DataService } from "../config/DataService";
import { endpoints } from "../config/endpoinds";
import Bredcamp from "../components/common/Bredcamp";

const ProductsPage = () => {
  const [apiData, setApiData] = useState([]); // API dan kelgan data
  const [searchTerm, setSearchTerm] = useState(""); // Qidiruv so'rovi
  const [loading, setLoading] = useState(false); // Yuklanish holati
  const [searchCompleted, setSearchCompleted] = useState(false); // Qidiruv tugallanganligi haqida belgi

  // API'dan ma'lumotlarni olish
  const fetchData = async (searchQuery = "") => {
    setLoading(true); // Loaderni ko'rsatish
    setSearchCompleted(false); // Qidiruv jarayoni boshlandi
    try {
      const endpoint = searchQuery
        ? `${endpoints.debtors}?search=${searchQuery}` // Qidiruv uchun API
        : endpoints.debtors; // Umumiy ma'lumot uchun API
      const response = await DataService.get(endpoint);
      setApiData(response?.results || []); // Natijalarni saqlash
      setSearchCompleted(true); // Qidiruv tugadi
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setTimeout(() => setLoading(false), 800); // Loader vaqtini cho'zish
    }
  };

  // Boshlang'ich ma'lumotlarni olish
  useEffect(() => {
    fetchData();
  }, []);

  // Qidiruvni boshqarish
  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value); // Qidiruv so'rovini saqlash
    fetchData(value); // Qidiruv API chaqirish
  };

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Products" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* USER TABLE */}
        <motion.div
          className="p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex justify-between items-center mb-6 px-6">
            <Bredcamp title={"Qarizdor mijozlar"} />
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search users..."
                className="text-base-content bg-eleg placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search
                className="absolute left-3 top-2.5 text-gray-400"
                size={18}
              />
            </div>
          </div>
          {/* Table */}
          {loading ? (
            <motion.div
              className="flex justify-center items-center h-[60vh]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </motion.div>
          ) : apiData.length === 0 && searchCompleted ? (
            <motion.div
              className="flex justify-center items-center h-[60vh] text-gray-500 text-lg font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p>Natija topilmadi</p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <UsersTable apiData={apiData} />
            </motion.div>
          )}
        </motion.div>
      </main>
    </div>
  );
};

export default ProductsPage;
