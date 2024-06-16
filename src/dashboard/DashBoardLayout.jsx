import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'

const DashBoardLayout = () => {
  return (
    <div className='flex gap-4 flex-col md:flex-row bg-gray-100'>
      <SideBar/>
      <Outlet/>
    </div>
  )
}

export default DashBoardLayout