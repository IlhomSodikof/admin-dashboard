import { CheckCircle, Clock, DollarSign, Search, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import DailyOrders from "../components/orders/DailyOrders";
import OrderDistribution from "../components/orders/OrderDistribution";
import OrdersTable from "../components/orders/OrdersTable";
import UsersTable from "../components/users/UsersTable";
import { useEffect, useState } from "react";
import { DataService } from "../config/DataService";
import { endpoints } from "../config/endpoinds";
const orderStats = {
  totalOrders: "1,234",
  pendingOrders: "56",
  completedOrders: "1,178",
  totalRevenue: "$98,765",
};

const OrdersPage = () => {

  const [apiData, setApiData] = useState();
  const fetchData = async () => {
    const response = await DataService.get(endpoints.treated);
    // console.log(response, "havolalar");
    setApiData(response?.results);
    // console.log(response?.results);

  };
  useEffect(() => {
    fetchData();


  }, []);
  // //

  return (
    <div className='flex-1 relative z-10 overflow-auto'>
      <Header title={"Orders"} />

      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        {/* <motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard name='Total Orders' icon={ShoppingBag} value={orderStats.totalOrders} color='#6366F1' />
					<StatCard name='Pending Orders' icon={Clock} value={orderStats.pendingOrders} color='#F59E0B' />
					<StatCard
						name='Completed Orders'
						icon={CheckCircle}
						value={orderStats.completedOrders}
						color='#10B981'
					/>
					<StatCard name='Total Revenue' icon={DollarSign} value={orderStats.totalRevenue} color='#EF4444' />
				</motion.div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
					<DailyOrders />
					<OrderDistribution />
				</div> */}

        {/* user tabel faqat */}
        {/* USER TABLE */}
        <motion.div className="className='p-6'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}">
          <div className='flex justify-between items-center mb-6 px-6'>
            <h2 className='text-xl font-semibold text-base-content'>Mijozlar</h2>
            <div className='relative'>
              <input
                type='text'
                placeholder='Search users...'
                className=' text-base-content bg-eleg placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              // style={{ backgroundColor: theme == "light" ? "#ecf2f7" : "#1f1a2a87" }}
              />
              <Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
            </div>
          </div>
          <UsersTable apiData={apiData} />
        </motion.div>


        {/* <OrdersTable /> */}
      </main>
    </div>
  );
};
export default OrdersPage;
