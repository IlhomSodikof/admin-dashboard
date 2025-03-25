import { UserCheck, UserPlus, UsersIcon, UserRound, UserMinus } from "lucide-react";
import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import UsersTable from "../components/users/UsersTable";
import UserGrowthChart from "../components/users/UserGrowthChart";
import UserActivityHeatmap from "../components/users/UserActivityHeatmap";
import UserDemographicsChart from "../components/users/UserDemographicsChart";
import { useEffect, useState } from "react";
import { DataService } from "../components/config/DataService";
import { endpoints } from "../components/config/endpoints";

const userStats = {
  totalUsers: 152845,
  newUsersToday: 243,
  activeUsers: 98520,
  churnRate: "2.4%",
};

const UsersPage = () => {

  const [apiData, setApiData] = useState();
  const fetchData = async () => {
    const response = await DataService.get(endpoints.all);
    // console.log(response, "havolalar");
    setApiData(response?.results);
    // console.log(response?.results);

  };
  useEffect(() => {
    fetchData();


  }, []);
  //


  const [apiDataSt, setApiDataSt] = useState();
  const fetchDataSt = async () => {
    const response = await DataService.get(endpoints.statistic);
    console.log(response, "statistic");
    setApiDataSt(response);
    // console.log(response?.results);

  };
  useEffect(() => {
    fetchDataSt();
  }, []);
  //


  return (
    <div className='flex-1 overflow-auto relative z-[0]'>
      <Header title='Mijozlar' />

      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        {/* STATS */}
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

        <UsersTable apiData={apiData} />

        {/* USER CHARTS */}
        {/* <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8'>
          <UserGrowthChart />
          <UserActivityHeatmap />
          <UserDemographicsChart />
        </div> */}
      </main>
    </div>
  );
};
export default UsersPage;
