import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { cartHeadings } from "../utils/cartData";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useSelector } from "react-redux";

const Cart = () => {
     const [quantity, setQuantity] = useState(1);

     const cartItems = useSelector((state) => state.cart.items);
     console.log("from cart", cartItems.length);

     const price = cartItems.price;
     const id = cartItems.id;
     const [totalProductPrice, setTotalProductPrice] = useState(price);

     const titlePath = id;
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
               link: "Cart",
               icon: MdKeyboardArrowRight,
               path: "",
          },
     ];
     // decrease
     const handleDecreaseProduct = (productPrice) => {
          setQuantity((prev) => prev - 1);
          if (quantity <= 1) {
               setQuantity(1);
               alert("Item can't be empty");
          }

          if (totalProductPrice >= productPrice) {
               setTotalProductPrice(totalProductPrice - productPrice);
          } else {
               alert("Something went wrong");
          }
     };

     // increase
     const handleIncreaseProduct = (productId, productPrice) => {
          alert(productId);
          setQuantity((prev) => prev + 1);
          setTotalProductPrice(productPrice * (quantity + 1));
     };

     return (
          <section>
               <div>
                    <ol class="inline-flex items-center cursor-pointer mx-0 px-3 md:px-0 md:mx-24 mt-5">
                         {cartBreakCrumbs?.map((item, index) => {
                              return (
                                   <Link to={item.path}>
                                        <li
                                             className="flex items-center text-base font-medium text-gray-700 hover:text-blue-600 md:ms-1 dark:text-gray-400 dark:hover:text-black"
                                             key={index}
                                        >
                                             <item.icon />
                                             {item.link}
                                        </li>
                                   </Link>
                              );
                         })}
                    </ol>
                    {cartItems.length > 0 ? (
                         <div class="relative overflow-x-auto mt-14 mx-24 ">
                              <table class="w-full text-sm text-left rtl:text-right">
                                   <thead class="text-xs  uppercase ">
                                        <tr className="border-b-2 border-b-gray-400">
                                             {cartHeadings?.map((item, index) => {
                                                  return (
                                                       <th scope="col" class="px-6 py-3 " key={index}>
                                                            {item.heading}
                                                       </th>
                                                  );
                                             })}
                                        </tr>
                                   </thead>
                                   <tbody className=" ">
                                        {cartItems?.map((item, index) => (
                                             <tr className="border-b-2 ">
                                                  <>
                                                       <td
                                                            scope="row"
                                                            class="px-6 py-2  font-medium whitespace-nowrap w-28 "
                                                       >
                                                            <img src={item.image} className="w-full " />
                                                       </td>
                                                       <td class="px-6 py-4">{item.title}</td>
                                                       <td class="px-6 py-4">${item.price}</td>
                                                       <td class="px-6 py-4">{quantity}</td>
                                                       <td class="px-6 py-4">
                                                            $
                                                            {item.price < totalProductPrice
                                                                 ? totalProductPrice
                                                                 : item.price}
                                                       </td>
                                                  </>
                                                  <td class="px-6 py-4">
                                                       <button
                                                            className={`border border-black px-2 py-2 mr-2 hover:border-blue-700 hover:bg-blue-600 hover:text-white duration-300 ${
                                                                 quantity === 1
                                                                      ? "cursor-not-allowed hover:bg-gray-200 hover:border-gray-200"
                                                                      : ""
                                                            }`}
                                                            disabled={quantity === 1}
                                                            onClick={() => handleDecreaseProduct(item.price)}
                                                       >
                                                            <FaMinus />
                                                       </button>

                                                       <button
                                                            className="border border-black px-2 py-2 hover:border-blue-700 hover:bg-blue-600 hover:text-white duration-300"
                                                            onClick={() => handleIncreaseProduct(item.itemId, item.price)}
                                                       >
                                                            <FaPlus />
                                                       </button>
                                                  </td>
                                             </tr>
                                        ))}
                                   </tbody>
                              </table>
                         </div>
                    ) : (
                         <div className="text-red-500 text-4xl text-center mt-7">
                              <span>Oops!! There is no Items added</span>
                              <p className="mt-2">Add Something to cart!!</p>
                         </div>
                    )}
               </div>
          </section>
     );
};

export default Cart;
