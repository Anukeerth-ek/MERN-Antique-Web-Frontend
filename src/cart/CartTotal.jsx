import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const CartTotal = ({totalPrice}) => {
     return (
          <div className="flex justify-between mt-10">
               <div className="w-1/2"></div>
               <div className="w-1/2 mr-24">
                <h2 className="text-4xl font-semibold">Cart Total</h2>
                <div className="flex justify-between mt-7 border-b-2 border-gray-300 pb-1">
                    <p>Sub Total</p>
                    <p>${totalPrice}</p>
                </div>
                <div className="flex justify-between mt-4 border-b-2 border-gray-300 pb-1">
                    <p>Shipping Price</p>
                    <p>Free</p>
                </div>
                <div className="flex justify-between mt-4 border-b-2 border-gray-300 pb-1">
                    <strong>Total Price</strong>
                    <strong>${totalPrice}</strong>
                </div>
               <button className="w-full flex items-center justify-center bg-blue-500 hover:bg-blue-800 duration-300 mt-10 text-white py-[10px] rounded-md">Proceed to Checkout <FaLongArrowAltRight className="ml-2"/></button>
               </div>
          </div>
     );
};

export default CartTotal;
