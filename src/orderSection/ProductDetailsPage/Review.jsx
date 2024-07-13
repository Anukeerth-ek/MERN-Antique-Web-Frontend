import React from 'react'
import { FaStar } from 'react-icons/fa6'
import { reviewData } from '../../utils/cartData'

const Review = () => {
  return (
    <section>
   
          <div>

            <div className=' flex flex-wrap justify-between mb-4'>
                <h2 className='text-4xl'>Product Reviews</h2>
                <div className='flex items-center'>
                      <h3 className='text-4xl mr-3'>4.7</h3>
                <div className='flex flex-col'>
                <span className='flex'>
                    <FaStar className="text-[#FFD700]" />
                      <FaStar className="text-[#FFD700]" />
                      <FaStar  className="text-[#FFD700]" />
                      <FaStar  className="text-[#FFD700]" />
                      <FaStar  className="text-[#FFD700]" />
                    </span>
                      <span className=' text-sm'>17 reviews</span>
                </div>
                </div>
            </div>


          
            {reviewData.map((item)=> (
              <div className='flex  justify-between border-t-2 px-2 py-2'>
                <div className='w-1/4'>
                  <h3 className=' font-semibold text-lg'>{item.Name}</h3>
                  <p className='text-gray-600'>{item.Time}</p>
                </div>
                <div className='w-3/4'>
                <span className='text-[#FFD700] inline-flex items-center'> 
                 <p className='text-black mr-1'> {item.Rating}</p>
                 <FaStar/>
                 <FaStar/>
                 <FaStar/>
                 <FaStar/>
                 <FaStar/></span>
                 <h3 className='font-bold text-lg'>{item.Review_Title}</h3>
                 <p className='text-gray-600'>{item.Review_Description}</p>
                </div>
                </div>
            ))}
           
          </div>
   
    </section>
  )
}

export default Review