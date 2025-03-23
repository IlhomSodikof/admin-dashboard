import { Route, Routes } from "react-router-dom";

import Sidebar from "./components/common/Sidebar";

import OverviewPage from "./pages/OverviewPage";
import ProductsPage from "./pages/ProductsPage";
import UsersPage from "./pages/UsersPage";
import SalesPage from "./pages/SalesPage";
import OrdersPage from "./pages/OrdersPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";

function App() {
  return (
    <div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>
      {/* BG */}
      <div className='fixed inset-0 z-0'>
        <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80' />
        <div className='absolute inset-0 backdrop-blur-sm' />
      </div>

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
