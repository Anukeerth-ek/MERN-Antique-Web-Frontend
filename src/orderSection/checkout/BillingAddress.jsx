import React from 'react'
import { statesList } from "../../utils/Data";

const BillingAddress = () => {
  return (
    <section>
    <div className="mx-20 my-6">
         {/* BILLING ADDRESS DIV */}
         <div>
              <div className="border p-5 w-2/4">
                   <h2 className="text-3xl font-bold text-center mb-3">Billing Address</h2>
                   <form action="">
                        <div className="flex flex-col w-full">
                             <label htmlFor="">Email Address</label>
                             <input type="text" name="" id="" />
                        </div>
                        <div>
                             <div className="flex flex-wrap w-full">
                                  <div className="w-[49%] flex flex-col ">
                                       <label htmlFor="" className="mt-3">
                                            First Name
                                       </label>
                                       <input type="text" />
                                  </div>
                                  <div className="w-[49%] flex flex-col ml-3 ">
                                       <label htmlFor="" className="mt-3">
                                            Last Name
                                       </label>
                                       <input type="text" />
                                  </div>
                             </div>
                             <div className="flex flex-wrap w-full">
                                  <div className="w-[49%] flex flex-col ">
                                       <label htmlFor="" className="mt-3">
                                            Address Line1
                                       </label>
                                       <input type="text" />
                                  </div>
                                  <div className="w-[49%] flex flex-col ml-3 ">
                                       <label htmlFor="" className="mt-3">
                                       Address Line2
                                       </label>
                                       <input type="text" />
                                  </div>
                             </div>
                             <div className="flex flex-wrap w-full">
                                  <div className="w-[49%] flex flex-col ">
                                       <label htmlFor="" className="mt-3">
                                            Country
                                       </label>
                                       <input type="text" />
                                  </div>
                                  <div className="w-[49%] flex flex-col ml-3 ">
                                       <label htmlFor="" className="mt-3">
                                            Zip Code
                                       </label>
                                       <input type="text" />
                                  </div>
                             </div>
                             <div className="flex   w-[100%]">
                                  <div className="w-[49%] flex flex-col ">
                                       <label htmlFor="" className="mt-3">
                                            City
                                       </label>
                                       <input type="text" />
                                  </div>
                                <div className="w-[49%] flex flex-col ml-3">
                                <label htmlFor="" className="mt-3">
                                       States
                                  </label>
                                  <select>
                                       {statesList.map((item, index) => (
                                            <option>{item.link}</option>
                                       ))}
                                  </select>
                                </div>
                             </div>
                             <div className="flex flex-col  w-full">
                                  <label htmlFor="" className="mt-3">
                                       Mobile Phone
                                  </label>
                                  <input type="text" />
                             </div>
                        </div>
                   </form>
              </div>
         </div>

         <div></div>
    </div>
</section>
  )
}

export default BillingAddress