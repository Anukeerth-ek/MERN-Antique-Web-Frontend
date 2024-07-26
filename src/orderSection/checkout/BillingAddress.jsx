import React from "react";
import { statesList } from "../../utils/Data";
import { cityList, countryList, payDetails } from "../../utils/userProfileData";
import { selectTotalCartPrice } from "../../redux/AntiqueSlice";
import { useSelector } from "react-redux";
import { MdLockOutline } from "react-icons/md";
import { MdLockOpen } from "react-icons/md";

const BillingAddress = () => {
     const totalCartPrice = useSelector(selectTotalCartPrice);
     console.log(totalCartPrice);

     const totalAfterDiscount = totalCartPrice - 1.40;
     console.log(totalAfterDiscount)
     return (
          <section>
               <div className="mx-20 my-6 flex">
                    {/* BILLING ADDRESS DIV */}
               
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
                                                  <select name="" id="">
                                                       {countryList.map((item, index) => (
                                                            <option key={index}>{item.link}</option>
                                                       ))}
                                                  </select>
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
                                                  <select>
                                                       {cityList.map((item, index) => (
                                                            <option key={index}>{item.link}</option>
                                                       ))}
                                                  </select>
                                             </div>
                                             <div className="w-[49%] flex flex-col ml-3">
                                                  <label htmlFor="" className="mt-3">
                                                       States
                                                  </label>
                                                  <select>
                                                       {statesList.map((item, index) => (
                                                            <option key={index}>{item.link}</option>
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
                              <button className="bg-blue-600 hover:bg-blue-800 duration-500 w-full py-2 mt-5 text-lg rounded-md text-white">
                                   Submit
                              </button>
                         </div>
                    

                    <div className="w-[30%] h-2/4 ml-36 border">
                         <div className="p-3">
                              <h2 className="text-center text-3xl font-bold mt-2">Payment Section</h2>
                             <div className="flex justify-between">
                             <ul className="mt-6 text-gray-700">
                              {payDetails.map((item, index)=> (
                                   <li className={`mb-[6px] ${item.bold && 'font-bold'} ${item.fSize && 'text-2xl'}`}>
                                        {item.link}
                                   </li>
                              ))}
                              </ul>
                              <ul className="mt-6 text-gray-700">
                                   <li className="mb-[6px] font-bold">${totalCartPrice}</li>
                                   <li className="mb-[6px] font-bold text-red-500">-$1.40</li>
                                   <li className="mb-[6px] font-bold">${totalAfterDiscount}</li>
                                   <li className="mb-[6px] font-bold">FREE</li>
                                   <li className="mb-[6px]">$0.00</li>
                                   <li className="mb-[6px] font-bold text-2xl ">${totalAfterDiscount}</li>
                              </ul>
                              </div>
                              <button className="bg-green-500 hover:bg-green-600 duration-500 mt-5 text-white rounded-md py-2 w-full inline-flex items-center justify-center"> <MdLockOutline className="mr-1"/>Confirm Order</button>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default BillingAddress;
