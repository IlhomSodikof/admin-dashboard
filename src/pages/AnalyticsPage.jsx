import Header from "../components/common/Header";

import OverviewCards from "../components/analytics/OverviewCards";
import RevenueChart from "../components/analytics/RevenueChart";
import ChannelPerformance from "../components/analytics/ChannelPerformance";
import ProductPerformance from "../components/analytics/ProductPerformance";
import UserRetention from "../components/analytics/UserRetention";
import CustomerSegmentation from "../components/analytics/CustomerSegmentation";
import AIPoweredInsights from "../components/analytics/AIPoweredInsights";
import Login from "./Login";

const AnalyticsPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title={"Analytics Dashboard"} />

      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <Login />
      </main>
    </div>
  );
};
export default AnalyticsPage;
