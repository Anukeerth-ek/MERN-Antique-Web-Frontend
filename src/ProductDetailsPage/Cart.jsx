import React from "react";
import { useLoaderData } from "react-router-dom";
import { cartHeadings } from "../utils/cartData";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";

const Cart = () => {
     const { _id, image, title, price } = useLoaderData();

     return (
          <section>
               <div class="relative overflow-x-auto mt-14 mx-24">
                    <table class="w-full text-sm text-left rtl:text-right">
                         <thead class="text-xs  uppercase ">
                              <tr>
                                   {cartHeadings.map((item, index) => {
                                        return (
                                             <th scope="col" class="px-6 py-3" key={index}>
                                                  {item.heading}
                                             </th>
                                        );
                                   })}
                              </tr>
                         </thead>
                         <tbody className=" border-b-2 border-t-2">
                              <tr>
                                   <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap w-28">
                                        <img src={image} className="w-full" />
                                   </th>
                                   <td class="px-6 py-4">{title}</td>
                                   <td class="px-6 py-4">{price}</td>
                                   <td class="px-6 py-4">4</td>
                                   <td class="px-6 py-4">$2999</td>
                                   <td class="px-6 py-4">
                                        <button>
                                             <FaMinus />
                                        </button>

                                        <button>
                                             <FaPlus />
                                        </button>
                                   </td>
                              </tr>
                         </tbody>
                    </table>
               </div>
          </section>
     );
};

export default Cart;
