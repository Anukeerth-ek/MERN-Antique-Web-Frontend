import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ArtCard from "../components/ArtCard";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import { BsShop } from "react-icons/bs";
const Shop = () => {
     const [arts, setArts] = useState([]);
     const [showShimmer, setShowShimmer] = useState(true)

     
     useEffect(() => {
          fetch("https://antique-web.onrender.com/all-arts")
          .then((res) => res.json())
          .then((data) => setArts(data));
     });
     
     const navigate = useNavigate();
     const handleRedirectToCart = (event, itemId) => {
          event.preventDefault()
          navigate(`/antique/cart/${itemId}`);
     };
     useEffect(() => {
          if(arts && arts.length > 0) {
               setShowShimmer(false)
          }
     }, [arts])
     return (
          <div className="px-3 md:px-10 bg-gray-100">
               <h2 className="text-3xl pt-2 md:pt-2 md:text-4xl font-bold flex justify-center ">INVENTORY<span className="ml-2"> < BsShop/></span></h2>
             {showShimmer ? <ShimmerSimpleGallery card imageHeight={240} col={4} row={5} caption /> :   <div className="grid gap-3 mb-8 mt-4 lg:grid-cols-4 sm:grid-cols-2 md:grid-row-3 grid-cols-1">
                    {arts.map((item, index) => {
                         
                         return (
                              <Link to={`/art/${item._id}`} key={index}>
                                   <div class="w-full px-3 py-2 max-w-sm bg-white border border-gray-100 rounded-lg shadow dark:bg-white group text-blue-950">
                                        <a href="#">
                                        <div className="min-w-[250px] md:w-[300px] lg:w-full ">
                                                  <img
                                                       src={item.image}
                                                       className="w-full h-[150px] sm:h-[180px] md:h-[200px] lg:h-[220px] object-cover group-hover:scale-105 duration-300 rounded-lg "
                                                  />
                                             </div>
                                        </a>
                                        <div class=" pb-5">
                                       
                                                  <h5 class="text-xl font-semibold tracking-tight text-gray-900 mt-0 md:mt-2">
                                                       {item.title}
                                                  </h5>
                                           
                                             <div class="flex items-center justify-between mt-2.5 mb-4">
                                                  <div class="flex items-center text-[#FFD700] space-x-1 rtl:space-x-reverse">
                                                   
                                                       <FaStar/>
                                                       <FaStar/>
                                                       <FaStar/>
                                                       <FaStar/>
                                                       <FaStar/>
                                                  </div>
                                                 
                                                  <p>
                                                      
                                                       <span class="text-2xl font-bold text-gray-900 ">${item.price}</span>
                                                  </p>
                                                
                                             </div>
                                             <div className="flex justify-between items-center mt-4 pb-2">
                                                  <CiHeart className="bg-black hover:bg-blue-600 min-h-full text-white text-[35px] rounded-sm p-[2px] hover:rounded-md duration-300" />
                                                  <button className="py-[5px] w-[85%] border border-gray-900 rounded-sm hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:rounded-md duration-300" onClick={(event)=> handleRedirectToCart(event, item._id)} >
                                                       Add to cart
                                                  </button>
                                             </div>
                                        </div>
                                   </div>
                              </Link>
                         );
                    })}
               </div>}
          </div>
      
     );
};

export default Shop;
