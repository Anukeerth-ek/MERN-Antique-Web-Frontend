import React, { useState } from "react";
import { accordianData } from "../utils/accordianData";
import { FaMinus, FaPlus } from "react-icons/fa6";

const Accordian = () => {
     const [toggleItemId, setToggleItemId] = useState();

     // FUNCTION FOR HANDLING THE FAQ SECTION
     const handleFAQSection = (id) => {
          setToggleItemId(id);
     };

     return (
          <section>
               <div className="flex flex-col flex-wrap items-center my-6 mx-3 lg:mx-16">
                    <h2 className="text-3xl mb-3 text-center font-semibold">
                         Frequently asked questions <span>(FAQs)</span>
                    </h2>
                    <ul className="min-w-full max-w-[1280px]">
                         {accordianData.map((item, index) => (
                              <li key={item.id} className={`flex flex-col ${toggleItemId === item.id ? 'bg-gray-300' :' bg-gray-100'}  w-full mb-3 duration-500`}>
                                   <div
                                        className="flex justify-between items-center py-3 cursor-pointer px-4"
                                        onClick={() => handleFAQSection(item.id)}
                                   >
                                        <p>
                                             {index + 1}. <span className="ml-1">{item.title}</span>
                                        </p>
                                        {toggleItemId === item.id ? <FaMinus /> : <FaPlus />}
                                   </div>
                                   {toggleItemId === item.id && <p className="py-3 bg-gray-50 pl-4 px-2 ">{item.body}</p>}
                              </li>
                         ))}
                    </ul>
               </div>
          </section>
     );
};

export default Accordian;
