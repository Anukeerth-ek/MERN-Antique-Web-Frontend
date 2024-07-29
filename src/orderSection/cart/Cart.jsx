import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, setTotalCartPrice, selectCartItems, selectTotalCartPrice } from "../../redux/AntiqueSlice";
import { FaPlus, FaMinus } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { cartHeadings } from "../../utils/cartData";
import CartTotal from "./CartTotal";
import EmptyComponent from "../wishlist/EmptyComponent";
import EmptyComponentImage from "../../assets/empty-cart.jpg";

const Cart = () => {
     const dispatch = useDispatch();
     const cartItems = useSelector(selectCartItems);
   
     const filteredCartItems = cartItems.filter((item, index)=> cartItems.id !== item.id)
     console.log(cartItems)
     console.log(filteredCartItems)
     const totalCartPrice = useSelector(selectTotalCartPrice);

     const [cartState, setCartState] = useState({});

     // Initialize quantities and total prices for each cart item
     useEffect(() => {
          const initialStates = cartItems.reduce((acc, item) => {
               acc[item.id] = {
                    quantity: 1,
                    totalPrice: item.price,
               };
               return acc;
          }, {});
          setCartState(initialStates);
     }, [cartItems]);

     // Decrease product quantity and update total price
     const handleDecreaseProduct = (productId, productPrice) => {
          setCartState((prev) => {
               const newState = { ...prev };
               if (newState[productId].quantity > 1) {
                    newState[productId].quantity -= 1;
                    newState[productId].totalPrice -= productPrice;
               } else {
                    alert("Item quantity can't be less than 1");
               }
               return newState;
          });
     };

     // Increase product quantity and update total price
     const handleIncreaseProduct = (productId, productPrice) => {
          setCartState((prev) => {
               const newState = { ...prev };
               newState[productId].quantity += 1;
               newState[productId].totalPrice += productPrice;
               return newState;
          });
     };

     // Remove from cart
     const handleRemoveFromCart = (itemId) => {
          dispatch(removeFromCart(itemId));
          setCartState((prev) => {
               const newState = { ...prev };
               delete newState[itemId];
               return newState;
          });
     };

     // Calculate total price of all items in the cart
     useEffect(() => {
          const total = Object.values(cartState).reduce((acc, item) => acc + item.totalPrice, 0);
          dispatch(setTotalCartPrice(total));
     }, [cartState, dispatch]);

     const cartBreadCrumbs = [
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
               path: "/cart",
          },
     ];

     return (
          <section>
               <div>
                    <ol className="inline-flex items-center cursor-pointer mx-0 px-3 md:px-0 md:mx-24 mt-5">
                         {cartBreadCrumbs?.map((item, index) => (
                              <Link to={item.path} key={index}>
                                   <li className="flex items-center text-base font-medium text-gray-700 hover:text-blue-600 md:ms-1 dark:text-gray-400 dark:hover:text-black">
                                        <item.icon />
                                        {item.link}
                                   </li>
                              </Link>
                         ))}
                    </ol>
                    {cartItems?.length > 0  ? (
                         <div className="relative overflow-x-auto mt-14 mx-24">
                              <table className="w-full text-sm text-left rtl:text-right">
                                   <thead className="text-xs uppercase">
                                        <tr className="border-b-2 border-b-gray-400">
                                             {cartHeadings?.map((item, index) => (
                                                  <th scope="col" className="px-6 py-3" key={index}>
                                                       {item.heading}
                                                  </th>
                                             ))}
                                        </tr>
                                   </thead>
                                   <tbody>
                                        {cartItems?.map((item, index) => {
                                             const itemPrice = parseInt(item.price);

                                             return (
                                                  <tr className="border-b-2" key={index}>
                                                       <td
                                                            scope="row"
                                                            className="px-6 py-2 font-medium whitespace-nowrap w-28"
                                                       >
                                                            <img src={item.image} className="w-full" alt={item.title} />
                                                       </td>
                                                       <td className="px-6 py-4">{item.title}</td>
                                                       <td className="px-6 py-4">${itemPrice}</td>
                                                       <td className="px-6 py-4">{cartState[item.id]?.quantity}</td>
                                                       <td className="px-6 py-4">${cartState[item.id]?.totalPrice}</td>
                                                       <td className="px-6 py-4">
                                                            <button
                                                                 className={`border border-black px-2 py-2 mr-2 hover:border-blue-700 hover:bg-blue-600 hover:text-white duration-300 ${
                                                                      cartState[item.id]?.quantity === 1
                                                                           ? "cursor-not-allowed hover:bg-gray-200 hover:border-gray-200"
                                                                           : ""
                                                                 }`}
                                                                 disabled={cartState[item.id]?.quantity === 1}
                                                                 onClick={() => handleDecreaseProduct(item.id, item?.price)}
                                                            >
                                                                 <FaMinus />
                                                            </button>
                                                            <button
                                                                 className="border border-black px-2 py-2 hover:border-blue-700 hover:bg-blue-600 hover:text-white duration-300"
                                                                 onClick={() => handleIncreaseProduct(item.id, item?.price)}
                                                            >
                                                                 <FaPlus />
                                                            </button>
                                                       </td>
                                                       <td className="px-9 py-4 text-2xl content-center cursor-pointer">
                                                            <RxCross2 onClick={() => handleRemoveFromCart(item.id)} />
                                                       </td>
                                                  </tr>
                                             );
                                        })}
                                   </tbody>
                              </table>
                         </div>
                    ) : (
                         <div>
                              <EmptyComponent image={EmptyComponentImage} />
                         </div>
                    )}

                    {cartItems.length > 0 && <CartTotal totalCartPrice={totalCartPrice} />}
               </div>
          </section>
     );
};

export default Cart;
