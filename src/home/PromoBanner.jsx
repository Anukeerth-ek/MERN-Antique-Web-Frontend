import React from "react";
import promoImg from "../assets/promo-img.png";
import mobilePromo from '../assets/mobilePromo.png'

import { Link } from "react-router-dom";
import { promoDescription } from "../utils/Data";
const PromoBanner = () => {
     return (
          <section>
               <div className="flex flex-col md:flex-row px-5 md:px-24 bg-gray-100 py-5">
                    <div className="md:w-3/5 flex flex-col space-y-4">
                         <h2 className="text-4xl md:text-6xl md:w-3/4 font-bold mb-5 leading-snug">
                              Sale 20% Off <br></br>
                              <span className="text-blue-700"> On Everything!!</span>
                         </h2>
                         <p className="text-lg">{promoDescription.description}</p>

                         <div className="w-[350px] block md:hidden">
                              <img src={mobilePromo} className="w-full object-cover" />
                         </div>
                         <Link to="/about" className="flex justify-center md:float-none md:justify-normal">
                              <button className="border mt-8 bg-blue-700 py-3 px-10 rounded-md text-white transition-all duration-500 hover:custom-ease-class hover:bg-transparent hover:text-black hover:border hover:border-blue-700">
                                   About US
                              </button>
                         </Link>
                    </div>

                    <div className="hidden md:block md:w-[750px]">   {/* VISIBLE ONLY IN LARGE SCREEN DEVICES */}
                         <img src={promoImg} className="w-full object-cover" />
                    </div>
               </div>
          </section>
     );
};

export default PromoBanner;
