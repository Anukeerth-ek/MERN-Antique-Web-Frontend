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
import { WiStars } from "react-icons/wi";

const ArtCard = ({ arts, headline }) => {
   
     return (
          <div className="mx-4 lg:mx-20">
               <div className="flex justify-between mb-4 ">
                    <h2 className="text-xl lg:text-2xl font-semibold">{headline}
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
                                   <div className="px-3 bg-white py-2 border-black w-auto">
                                        <Link to={`/art/${items._id}`}>
                                             <div className="min-w-[250px] md:w-full flex-wrap">
                                                  <img
                                                       src={items.image}
                                                       className="w-full h-[150px] sm:h-[180px] md:h-[200px] lg:h-[220px] object-cover duration-1000 rounded-lg"
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
                                                       <p className="bg-gray-200 px-2 rounded-2xl gap-4 text-gray-600" key={index}>
                                                            {category}
                                                       </p>
                                                  ))}
                                             </p>
                                             <div className="flex justify-between items-center py-3">
                                                  <CiHeart className="bg-black text-white text-3xl p-[2px]" />
                                                  <button className="py-1 px-[100px] md:px-[10px] lg:px-[65px] border border-gray-900 ">
                                                       Add to cart
                                                  </button>
                                             </div>
                                        </Link>
                                   </div>
                              </SwiperSlide>
                         ))}
                    </Swiper>
               </div>
          </div>
     );
};

export default ArtCard;
