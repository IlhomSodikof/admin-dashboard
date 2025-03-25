
// import { createBrowserRouter, Navigate, } from "react-router-dom";
// import OverviewPage from "./pages/OverviewPage";
// import ProductsPage from "./pages/ProductsPage";
// import UsersPage from "./pages/UsersPage";
// import SalesPage from "./pages/SalesPage";
// import OrdersPage from "./pages/OrdersPage";
// import AnalyticsPage from "./pages/AnalyticsPage";
// import SettingsPage from "./pages/SettingsPage";
// import { GlobalContext } from "./components/context/GlobalContext";
// import Login from "./pages/Login";
// import Layout from "./components/Layout/Layout";
// import ProtectedRoutes from "./components/context/ProtectedRoutes";

// function App() {




//   const routes = createBrowserRouter([
//     {
//       path: "/",
//       element: (<ProtectedRoutes> <Layout /> </ProtectedRoutes>),
//       children: [
//         {
//           index: true,
//           element: <UsersPage />,
//         },
//         {
//           path: '/created_users',
//           element: <SalesPage />,
//         },
//         {
//           path: '/active_users',
//           element: <OverviewPage />,
//         },
//         {
//           path: '/debtor_users',
//           element: <ProductsPage />,
//         },
//         {
//           path: '/recovered_patients',
//           element: <OrdersPage />,
//         },
//         {
//           path: '/details/:id',
//           element: <SettingsPage />
//         }
//       ]
//     },

//     {
//       path: "/login",
//       element: <Login />,


//     }
//   ])

//   return <>{<RouterProvider router={routes} />}</>
// }
// export default App;

import React, { useContext, useEffect, useState } from "react";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { GlobalContext, GlobalContextProvider } from "./components/context/GlobalContext";
import Layout from "./components/Layout/Layout";
import Login from "./pages/Login";
import ProtectedRoutes from "./components/context/ProtectedRoutes";
import UsersPage from "./pages/UsersPage";
import SalesPage from "./pages/SalesPage";
import OverviewPage from "./pages/OverviewPage";
import ProductsPage from "./pages/ProductsPage";
import OrdersPage from "./pages/OrdersPage";
import SettingsPage from "./pages/SettingsPage";

function App() {
  const { user, alReady, dispatch } = useContext(GlobalContext); // Login holatini olish
  console.log(user, "bu user");

  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes >
          <Layout />
        </ProtectedRoutes>
      ),
      children: [
        { index: true, element: <UsersPage /> },
        { path: "/created_users", element: <SalesPage /> },
        { path: "/active_users", element: <OverviewPage /> },
        { path: "/debtor_users", element: <ProductsPage /> },
        { path: "/recovered_patients", element: <OrdersPage /> },
        { path: "/details/:id", element: <SettingsPage /> },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to='/' /> : <Login />,
    },
  ]);

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (token && !user) {
      dispatch({ type: "LOGIN", payload: { token } });
    }
    dispatch({ type: "READY_ST" });
  }, [dispatch, user]);


  return (
    <GlobalContextProvider>
      <>{alReady && <RouterProvider router={routes} />}</>
    </GlobalContextProvider>
  );
}

export default App;
``