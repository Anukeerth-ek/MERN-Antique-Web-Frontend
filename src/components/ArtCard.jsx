import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import { AiFillCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";

import { useNavigate } from "react-router-dom";

const ArtCard = ({ arts, headline }) => {
     // Redirect to cart page when active
     const navigate = useNavigate();
     const handleRedirectToCart = (itemId) => {
          navigate(`/antique/cart/${itemId}`);
     };

     return (
          <div className="mx-4 lg:mx-20">
               <div className="flex justify-between mb-4 ">
                    <h2 className="text-xl lg:text-2xl font-semibold">
                         {headline}
                         {/* < WiStars className=" text-amber-400 text-4xl"/> */}
                    </h2>
                    <div>
                         <button>
                              {" "}
                              <AiFillCaretDown />
                         </button>
                    </div>
               </div>
               <div>
                    <Swiper
                         slidesPerView={1}
                         spaceBetween={10}
                         pagination={{
                              clickable: true,
                         }}
                         breakpoints={{
                              640: {
                                   slidesPerView: 2,
                                   spaceBetween: 20,
                              },
                              768: {
                                   slidesPerView: 3,
                                   spaceBetween: 35,
                              },
                              1024: {
                                   slidesPerView: 4,
                                   spaceBetween: 40,
                              },
                         }}
                         modules={[Pagination]}
                         className="mySwiper"
                    >
                         {arts.map((items) => (
                              <SwiperSlide key={items._id}>
                                   <div className="px-3 py-2 bg-white border-gray-200 w-auto group ">
                                        <Link to={`/art/${items._id}`}>
                                             <div className="min-w-[250px] md:w-full ">
                                                  <img
                                                       src={items.image}
                                                       className="w-full h-[150px] sm:h-[180px] md:h-[200px] lg:h-[220px] object-cover group-hover:scale-105 duration-500 rounded-lg "
                                                  />
                                             </div>

                                             <div className="flex justify-between mt-2 ">
                                                  <p className=" font-medium md:text-base lg:text-lg">
                                                       {items.title.length > 21 ? items.title.slice(0, 21) : items.title}
                                                  </p>
                                                  <p className="font-semibold text-lg ">${items.price} </p>
                                             </div>
                                             <p className="flex flex-wrap mt-2 gap-1  ">
                                                  {items.categories.map((category, index) => (
                                                       <p
                                                            className="bg-gray-200 px-2 rounded-2xl gap-4 text-gray-600"
                                                            key={index}
                                                       >
                                                            {category}
                                                       </p>
                                                  ))}
                                             </p>
                                        </Link>
                                        <div className="flex justify-between items-center mt-4 pb-2">
                                             <CiHeart className="bg-black hover:bg-blue-600 min-h-full text-white text-[35px] rounded-sm p-[2px] hover:rounded-md duration-300" />
                                             <button
                                                  className="py-[5px] w-[85%] border border-gray-900 rounded-sm hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:rounded-md duration-300"
                                                  onClick={() => handleRedirectToCart(items._id)}
                                             >
                                                  Add to cart
                                             </button>
                                        </div>
                                   </div>
                              </SwiperSlide>
                         ))}
                    </Swiper>
               </div>
          </div>
     );
};

export default ArtCard;
