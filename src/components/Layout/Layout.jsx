import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { Outlet } from 'react-router-dom'
import Sidebar from '../common/Sidebar'
// import Sidebar from './Sidebar'

export default function Layout() {
  const { theme } = useContext(GlobalContext)

  return (
    <div className='flex h-screen bg-[#1f1a2a3f] text-gray-100  overflow-hidden' style={{ backgroundColor: theme == "light" ? "#ecf2f7" : "#1f1a2a87" }}>
      <Sidebar />

      <Outlet />


    </div >
  )
}
