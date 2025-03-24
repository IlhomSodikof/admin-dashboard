import { Route, Routes } from "react-router-dom";

import Sidebar from "./components/common/Sidebar";

import OverviewPage from "./pages/OverviewPage";
import ProductsPage from "./pages/ProductsPage";
import UsersPage from "./pages/UsersPage";
import SalesPage from "./pages/SalesPage";
import OrdersPage from "./pages/OrdersPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";
import { GlobalContext } from "./components/context/GlobalContext";
import { useContext } from "react";

function App() {
  const { theme } = useContext(GlobalContext)

  return (
    <div className='flex h-screen bg-[#1f1a2a3f] text-gray-100  overflow-hidden' style={{ backgroundColor: theme == "light" ? "#ecf2f7" : "#1f1a2a87" }}>
      {/* BG */}
      {/* <div className='fixed inset-0 z-0'>
        <div className='absolute inset-0 bg-gradient-to-br from-base-300 via-gray-200 to-base-300 opacity-80' />
        <div className='absolute inset-0 backdrop-blur-sm' />
      </div> */}

      <Sidebar />
      <Routes>
        <Route path='/' element={<UsersPage />} />
        <Route path='/created_users' element={<SalesPage />} />
        <Route path='/active_users' element={<OverviewPage />} />
        <Route path='/debtor_users' element={<ProductsPage />} />
        <Route path='/recovered_patients' element={<OrdersPage />} />
        <Route path='/login' element={<AnalyticsPage />} />
        <Route path='/details' element={<SettingsPage />} />
      </Routes>
    </div>
  );
}

export default App;
