import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { cartHeadings } from "../utils/cartData";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";

const Cart = () => {
     const [quantity, setQuantity] = useState(1);

     const { _id, image, title, price } = useLoaderData();
     const [totalProductPrice, setTotalProductPrice] = useState(price);

     const titlePath = `/art/${_id}`;
     const cartBreakCrumbs = [
          {
               link: "Home",
               icon: IoHome,
               path: "/",
          },
          {
               link: "Shop",
               icon: MdKeyboardArrowRight,
               path: "/shop",
          },
          {
               link: title,
               icon: MdKeyboardArrowRight,
               path: titlePath,
          },
          {
               link: "Cart",
               icon: MdKeyboardArrowRight,
               path: "",
          },
     ];
     // lets decrease cart value
     const handleDecreaseProduct = () => {
          setQuantity((prev) => prev - 1);
          if (quantity <= 0) {
               setQuantity(0);
               alert("Item can't be empty");
          }
     };
     
     // lets increase cart value
     const handleIncreaseProduct = () => {
          setQuantity((prev) => prev + 1);
          setTotalProductPrice(totalProductPrice * quantity);
     };

     return (
          <section>
               <div>
                    <ol class="inline-flex items-center cursor-pointer mx-24 mt-5">
                         {cartBreakCrumbs.map((item, index) => {
                              return (
                                   <Link to={item.path}>
                                        <li
                                             className="flex items-center font-medium text-gray-700 hover:text-blue-600 md:ms-1 dark:text-gray-400 dark:hover:text-black"
                                             key={index}
                                        >
                                             <item.icon />
                                             {item.link}
                                        </li>
                                   </Link>
                              );
                         })}
                    </ol>
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
                                        <td scope="row" class="px-6  font-medium whitespace-nowrap w-28">
                                             <img src={image} className="w-full " />
                                        </td>
                                        <td class="px-6 py-4">{title}</td>
                                        <td class="px-6 py-4">${price}</td>
                                        <td class="px-6 py-4">{quantity}</td>
                                        <td class="px-6 py-4">{totalProductPrice}</td>
                                        <td class="px-6 py-4">
                                             <button
                                                  className={`border border-black px-2 py-2 mr-2 hover:border-blue-700 hover:bg-blue-600 hover:text-white duration-300 ${
                                                       quantity === 0
                                                            ? "cursor-not-allowed hover:bg-gray-200 hover:border-gray-200"
                                                            : ""
                                                  }`}
                                                  disabled={quantity === 0}
                                                  onClick={() => handleDecreaseProduct()}
                                             >
                                                  <FaMinus />
                                             </button>

                                             <button
                                                  className="border border-black px-2 py-2 hover:border-blue-700 hover:bg-blue-600 hover:text-white duration-300"
                                                  onClick={() => handleIncreaseProduct()}
                                             >
                                                  <FaPlus />
                                             </button>
                                        </td>
                                   </tr>
                              </tbody>
                         </table>
                    </div>
               </div>
          </section>
     );
};

export default Cart;
