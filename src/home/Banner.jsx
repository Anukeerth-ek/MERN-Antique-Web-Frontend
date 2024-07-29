import { bannerSection } from "../utils/Data";
import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
     return (
          <section>
               <div className="flex flex-wrap items-center flex-col px-4 lg:px-0">
                    <h1 className="mt-2 md:mt-0 text-xl text-center text-gray-500 lg:text-[24px] lg:mt-[6px] lg:mb-[8px] md:font-normal">
                         Transforming the ordinary into extraordinary antiquities.
                    </h1>
                    <div>
                         <ul className="flex flex-wrap justify-evenly md:justify-center text-center mt-[20px] gap-14 mb-2">
                              {bannerSection?.map((item, index) => (
                                   <Link to={`/all-arts/${item.title}`}  key={index}>
                                        <li
                                            
                                             className={`text-semibold text-lg group hover:text-blue-600 glow-on-hover ${item.wordBreak ? "break-words" : ""}`} 
                                        >
                                             <img
                                                  src={item?.image}
                                                  className="rounded-[70%] object-cover h-[120px] md:h-[110px] w-[120px] md:w-[110px] mx-auto   group-hover:scale-95 transition-all scroll-smooth  group-hover:duration-300 "
                                             />
                                             {item?.title?.split(".").map((sentence, index, array) => (
                                                  <React.Fragment key={index} >
                                                       {sentence}
                                                       {index < array.length - 1 ? "." : null}
                                                       {index < array.length - 1 && item.wordBreak ? <br /> : null}
                                                  </React.Fragment>
                                             ))}
                                        </li>
                                   </Link>
                              ))}
                         </ul>
                    </div>
               </div>
          </section>
     );
};

export default Banner;
