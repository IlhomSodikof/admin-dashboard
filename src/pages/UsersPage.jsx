import { UserCheck, UserPlus, UsersIcon, UserRound, UserMinus, Search } from "lucide-react";
import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import UsersTable from "../components/users/UsersTable";
import UserGrowthChart from "../components/users/UserGrowthChart";
import UserActivityHeatmap from "../components/users/UserActivityHeatmap";
import UserDemographicsChart from "../components/users/UserDemographicsChart";
import { useEffect, useState } from "react";
import { DataService } from "../config/DataService";
import { endpoints } from "../config/endpoinds";
import Bredcamp from "../components/common/Bredcamp";

const userStats = {
  totalUsers: 152845,
  newUsersToday: 243,
  activeUsers: 98520,
  churnRate: "2.4%",
};

const UsersPage = () => {
  const [apiDataSt, setApiDataSt] = useState();
  const fetchDataSt = async () => {
    const response = await DataService.get(endpoints.statistic)
    console.log(response, "statistic");
    setApiDataSt(response);
    console.log(response?.results);

  };
  useEffect(() => {
    fetchDataSt();
  }, []);
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
        ? `${endpoints.all}?search=${searchQuery}` // Qidiruv uchun API
        : endpoints.all; // Umumiy ma'lumot uchun API
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
        <motion.div
          className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name='Jami mijozlar'
            icon={UsersIcon}
            value={apiDataSt?.total_patients}
            color='#6366F1'
          />
          <StatCard name="Fa'ol mijozlar" icon={UserCheck} value={apiDataSt?.paid} color='#10B981' />
          <StatCard
            name="Qarizdor mijozlar"
            icon={UserMinus}
            value={apiDataSt?.debtor}
            color='#F59E0B'
          />
          <StatCard name="Sog'aygan mijozlar" icon={UserRound} value={apiDataSt?.treated} color='#EF4444' />
        </motion.div>
        {/* USER TABLE */}
        <motion.div
          className="p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex justify-between items-center mb-6 px-6">
            <Bredcamp title={"Mijozlar"} />
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
export default UsersPage;
