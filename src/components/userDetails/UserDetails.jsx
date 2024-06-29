import React from 'react'
import { userDetailsLinks } from '../../utils/Data'
import { Link } from 'react-router-dom'

const UserDetails = () => {
  return (
    <div className=''>
        <div>
          {/* <p className="border-b-8 border-white relative" style={{ transform: 'translateX(-8px)', bottom: '-10px' }}></p> */}
            <ul className='w-52 shadow-custom-shadow  '>
            {userDetailsLinks.map((item, index)=> (
             <Link to={item.path}>
             <li className='inline-flex items-center  text-left hover:bg-gray-200 border-b-2 w-full py-2 px-3 cursor-pointer' key={index}>
             <item.icon className=' text-base mr-2'/>
                <span  className=' text-base text-gray-600'>{item.link}</span>
             </li>
             </Link>
            ))}
          
            </ul>
        </div>
    </div>
  )
}

export default UserDetails