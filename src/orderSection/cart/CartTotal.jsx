import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CartTotal = ({totalCartPrice}) => {
  
    const navigate = useNavigate()
     return (
          <div className="flex justify-between mt-10 ">
               <div className="w-1/2"></div>
               <div className="w-1/2 mr-24  p-3 shadow-2xl">
                <h2 className="text-4xl font-semibold text-center">Cart Total</h2>
                <div className="flex justify-between mt-7 border-b-2 border-gray-300 pb-1">
                    <p>Sub Total</p>
                    <p>${totalCartPrice}</p>
                </div>
                <div className="flex justify-between mt-4 border-b-2 border-gray-300 pb-1">
                    <p>Shipping Price</p>
                    <p>Free</p>
                </div>
                <div className="flex justify-between mt-4 border-b-2 border-gray-300 pb-1">
                    <strong>Total Price</strong>
                    <strong>${totalCartPrice}</strong>
                </div>
               <button className="w-full flex items-center justify-center bg-blue-500 hover:bg-blue-800 duration-300 mt-10 text-white py-[10px] rounded-md" onClick={()=> navigate('/checkout')}>Proceed to Checkout <FaLongArrowAltRight className="ml-2"/></button>
               </div>
          </div>
     );
};

export default CartTotal;
