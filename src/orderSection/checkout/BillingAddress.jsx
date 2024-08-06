import React, { useState } from "react";
import { statesList } from "../../utils/Data";
import { cityList, countryList, payDetails } from "../../utils/userProfileData";
import { cartReducer, selectCartItems, selectTotalCartPrice } from "../../redux/AntiqueSlice";
import { useSelector } from "react-redux";
import { BiSolidLock } from "react-icons/bi";
import { BiSolidLockOpen } from "react-icons/bi";
import {loadStripe} from '@stripe/stripe-js';

const apiUrl = import.meta.env.VITE_API_URL;
const BillingAddress = () => {
     const totalCartPrice = useSelector(selectTotalCartPrice);
     const [showPaymentBtn, setShowPaymentBtn] = useState(false);

     const cart = useSelector(selectCartItems);
     console.log(cart)
  

     const [formData, setFormData] = useState({
          email: "",
          firstName: "",
          lastName: "",
          addressLine1: "",
          addressLine2: "",
          country: "",
          zipCode: "",
          city: "",
          state: "",
          mobilePhone: "",
     });

     const totalAfterDiscount = totalCartPrice - 1.4;
     const [errors, setErrors] = useState({});

     // Handle form input change
     const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData({
               ...formData,
               [name]: value,
          });
     };

     // Handle form submission
     const handleSubmit = (e) => {
          e.preventDefault();
          const validationErrors = validate();
          if (Object.keys(validationErrors).length === 0) {
               console.log("Form submitted successfully:", formData);
               alert("Successfully submitted");
               setShowPaymentBtn(true);
          } else {
               setErrors(validationErrors);
               alert("Please fill the form correctly");
               setShowPaymentBtn(false);
          }
     };

     // Validate form fields
     const validate = () => {
          const newErrors = {};
          if (!formData.email) newErrors.email = "Email is required";
          if (!formData.firstName) newErrors.firstName = "First Name is required";
          if (!formData.lastName) newErrors.lastName = "Last Name is required";
          if (!formData.addressLine1) newErrors.addressLine1 = "Address Line1 is required";
          if (!formData.country) newErrors.country = "Country is required";
          if (!formData.zipCode) newErrors.zipCode = "Zip Code is required";
          if (!formData.city) newErrors.city = "City is required";
          if (!formData.state) newErrors.state = "State is required";
          if (!formData.mobilePhone) newErrors.mobilePhone = "Mobile Phone is required";
          return newErrors;
     };

     // function for handling the payment
     const handlePayment = async()=> {
         const stripe = await loadStripe("pk_test_51OUmsmSEK2ICB9oRHFofNhmINI7Jb6UpLkACS7vEXk0rogjmHXikLKeDHjUmjHWMCLPRjzHM9Clk9ZiFD1eKU9VO00NVlsuO5J")
         const body = {
            products: cart
         }
         const headers = {
          "Content-Type": "application/json"
         }
         const response = await fetch("https://antique-web.onrender.com/create-checkout-session", {
          method: "POST",
          headers: headers,
          body: JSON.stringify(body)
         })
         const session = await response.json()
         const result = stripe.redirectToCheckout({
          sessionId:session.id
         
         })
         if(result.error) {
          console.error(result.error)
         }
     }
     return (
          <section>
               <div className="mx-4 lg:mx-20 my-6 lg:flex">
                    {/* BILLING ADDRESS DIV */}

                    <div className="border p-5 w-fu lg:w-2/4">
                         <h2 className="text-3xl font-bold text-center mb-3">Billing Address</h2>
                         <form onSubmit={handleSubmit} className=" duration-500">
                              <div className="flex flex-col w-full">
                                   <label htmlFor="email">Email Address</label>
                                   <input
                                        type="text"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                   />
                                   {errors.email && <span className="text-red-500">{errors.email}</span>}
                              </div>
                              <div>
                                   <div className="flex flex-wrap w-full">
                                        <div className="w-full lg:w-[49%] flex flex-col">
                                             <label htmlFor="firstName" className="mt-3">
                                                  First Name
                                             </label>
                                             <input
                                                  type="text"
                                                  id="firstName"
                                                  name="firstName"
                                                  value={formData.firstName}
                                                  onChange={handleChange}
                                                  required
                                             />
                                             {errors.firstName && <span className="text-red-500">{errors.firstName}</span>}
                                        </div>
                                        <div className="w-full lg:w-[49%] flex flex-col lg:ml-3">
                                             <label htmlFor="lastName" className="mt-3">
                                                  Last Name
                                             </label>
                                             <input
                                                  type="text"
                                                  id="lastName"
                                                  name="lastName"
                                                  value={formData.lastName}
                                                  onChange={handleChange}
                                                  required
                                             />
                                             {errors.lastName && <span className="text-red-500">{errors.lastName}</span>}
                                        </div>
                                   </div>
                                   <div className="flex flex-wrap w-full">
                                        <div className="w-full lg:w-[49%] flex flex-col">
                                             <label htmlFor="addressLine1" className="mt-3">
                                                  Address Line1
                                             </label>
                                             <input
                                                  type="text"
                                                  id="addressLine1"
                                                  name="addressLine1"
                                                  value={formData.addressLine1}
                                                  onChange={handleChange}
                                                  required
                                             />
                                             {errors.addressLine1 && (
                                                  <span className="text-red-500">{errors.addressLine1}</span>
                                             )}
                                        </div>
                                        <div className="w-full lg:w-[49%] flex flex-col lg:ml-3">
                                             <label htmlFor="addressLine2" className="mt-3">
                                                  Address Line2 <span className="text-gray-400">(optional)</span>
                                             </label>
                                             <input
                                                  type="text"
                                                  id="addressLine2"
                                                  name="addressLine2"
                                                  value={formData.addressLine2}
                                                  onChange={handleChange}
                                             />
                                        </div>
                                   </div>
                                   <div className="flex flex-wrap w-full">
                                        <div className="w-full lg:w-[49%] flex flex-col">
                                             <label htmlFor="country" className="mt-3">
                                                  Country
                                             </label>
                                             <select
                                                  id="country"
                                                  name="country"
                                                  value={formData.country}
                                                  onChange={handleChange}
                                                  required
                                             >
                                                  <option value="">Select Country</option>
                                                  {countryList.map((item, index) => (
                                                       <option key={index} value={item.link}>
                                                            {item.link}
                                                       </option>
                                                  ))}
                                             </select>
                                             {errors.country && <span className="text-red-500">{errors.country}</span>}
                                        </div>
                                        <div className="w-full lg:w-[49%] flex flex-col lg:ml-3">
                                             <label htmlFor="zipCode" className="mt-3">
                                                  Zip Code
                                             </label>
                                             <input
                                                  type="text"
                                                  id="zipCode"
                                                  name="zipCode"
                                                  value={formData.zipCode}
                                                  onChange={handleChange}
                                                  required
                                             />
                                             {errors.zipCode && <span className="text-red-500">{errors.zipCode}</span>}
                                        </div>
                                   </div>
                                   <div className="flex flex-wrap w-full">
                                        <div className="w-full lg:w-[49%] flex flex-col">
                                             <label htmlFor="city" className="mt-3">
                                                  City
                                             </label>
                                             <select
                                                  id="city"
                                                  name="city"
                                                  value={formData.city}
                                                  onChange={handleChange}
                                                  required
                                             >
                                                  <option value="">Select City</option>
                                                  {cityList.map((item, index) => (
                                                       <option key={index} value={item.link}>
                                                            {item.link}
                                                       </option>
                                                  ))}
                                             </select>
                                             {errors.city ? <span className="text-red-500">{errors.city}</span> : ""}
                                        </div>
                                        <div className="w-full lg:w-[49%] flex flex-col lg:ml-3">
                                             <label htmlFor="state" className="mt-3">
                                                  State
                                             </label>
                                             <select
                                                  id="state"
                                                  name="state"
                                                  value={formData.state}
                                                  onChange={handleChange}
                                                  required
                                             >
                                                  <option value="">Select State</option>
                                                  {statesList.map((item, index) => (
                                                       <option key={index} value={item.link}>
                                                            {item.link}
                                                       </option>
                                                  ))}
                                             </select>
                                             {errors.state && <span className="text-red-500">{errors.state}</span>}
                                        </div>
                                   </div>
                                   <div className="flex flex-col w-full">
                                        <label htmlFor="mobilePhone" className="mt-3">
                                             Mobile Phone
                                        </label>
                                        <input
                                             type="text"
                                             id="mobilePhone"
                                             name="mobilePhone"
                                             value={formData.mobilePhone}
                                             onChange={handleChange}
                                             required
                                        />
                                        {errors.mobilePhone && <span className="text-red-500">{errors.mobilePhone}</span>}
                                   </div>
                              </div>
                         </form>
                         <button
                              type="submit"
                              className="bg-blue-500 hover:bg-blue-800 duration-500 w-full py-2 mt-8 lg:mt-5 text-lg rounded-md text-white"
                              onClick={handleSubmit}
                         >
                              Submit
                         </button>
                    </div>

                    <div className=" w-full lg:w-[30%] h-2/4 ml-0 lg:ml-36 border mt-10 lg:mt-0">
                         <div className="p-3">
                              <h2 className="text-center text-3xl font-bold mt-2">Payment Section</h2>
                              <div className="flex justify-between">
                                   <ul className="mt-8 text-gray-700 space-y-3">
                                        {payDetails.map((item, index) => (
                                             <li
                                                  className={` ${item.bold && "font-bold"} ${item.fSize && "text-2xl"}`}
                                                  key={index}
                                             >
                                                  {item.link}
                                             </li>
                                        ))}
                                   </ul>
                                   <ul className="mt-8 space-y-3 text-gray-700">
                                        <li className=" font-bold">${totalCartPrice}</li>
                                        <li className=" font-bold text-green-600 ">-$1.40</li>
                                        <li className=" font-bold">${totalAfterDiscount}</li>
                                        <li className=" font-bold">FREE</li>
                                        <li className="">$0.00</li>
                                        <li className=" font-bold text-2xl ">${totalAfterDiscount}</li>
                                   </ul>
                              </div>
                              <button
                                   className={`${
                                        showPaymentBtn ? "bg-green-500 hover:bg-green-700" : "bg-blue-500 hover:bg-blue-700"
                                   } duration-500 mt-5 text-white rounded-md py-2 w-full inline-flex items-center justify-center`}
                                   onClick={handlePayment}
                              >
                                   {showPaymentBtn ? (
                                        <BiSolidLockOpen className="mr-1 text-lg" />
                                   ) : (
                                        <BiSolidLock className="mr-1 text-lg" />
                                   )}
                                   Confirm Order
                              </button>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default BillingAddress;
