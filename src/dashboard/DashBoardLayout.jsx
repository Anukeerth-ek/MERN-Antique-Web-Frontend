import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import SideBar from './SideBar'
import Swal from 'sweetalert2'

const DashBoardLayout = () => {
  const navigate = useNavigate()
  const showMaintenance = () => {
    Swal.fire({
      icon: "error",
      title: "Oops... Under Maintenance!!",
      text: "We will fix this soon",
      footer: '<a href="#">Why do I have this issue?</a>',
      allowOutsideClick: false, // Prevent dismissing by clicking outside
    }).then((result) => {
      if (result.isConfirmed || result.dismiss === Swal.DismissReason.backdrop) {
        navigate('/');
      }
    });
  };
  return (
    <div className='flex gap-4 flex-col md:flex-row bg-gray-100'>
      {/* <SideBar/>
      <Outlet/> */}
      {showMaintenance()}
    </div>
  )
}

export default DashBoardLayout