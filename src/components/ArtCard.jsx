import React, { useContext, useEffect, useRef, useState } from "react";
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
import { AuthContext } from "../contexts/AuthProvider";
import { Oval, ThreeDots } from "react-loader-spinner";
import { ShimmerPostItem, ShimmerPostList, ShimmerSimpleGallery } from "react-shimmer-effects";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/AntiqueSlice";

import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { GiShoppingCart } from "react-icons/gi";
import { WishlistContext } from "../contexts/WishlistContext";

const ArtCard = ({ arts, headline, headlineIcon}) => {

     const dispatch = useDispatch();
     // Redirect to cart page when active
     const navigate = useNavigate();

     // Get the current state of the item
     const cartItems = useSelector((state) => state.cart.items);


     const [showSpinner, setShowSpinner] = useState(false);
     const [spinnerBtnId, setSpinnerBtnId] = useState();
     const [showShimmer, setShowShimmer] = useState(true);

     const { addToWishlist } = useContext(WishlistContext);

     const { showFavIcon, handleFavIcon } = useContext(WishlistContext);

     // SHIMMER EFFECT
     useEffect(() => {
          if (arts && arts.length > 0) {
               setShowShimmer(false);
          }
     }, [arts]);

     // HANDLE CART SECTION
     const handleRedirectToCart = (id, image, title, price) => {
          const item = { id, image, title, price };

          const itemExist = cartItems.find((cartItem) => cartItem.id === id);
          if (itemExist) {
               alert("Item Already added to cart");
          } else {
               dispatch(addToCart(item));
               setTimeout(() => {
                    navigate(`/cart`);
               }, 1000);
               setSpinnerBtnId(id);
               setShowSpinner(true);
          }
     };

     // check wheather user is logged in or not
     const { user, loading } = useContext(AuthContext);


     return (
          <div className="mx-4 lg:mx-20">
               <div className="flex justify-between mb-4 ">
                    <h2 className="text-xl lg:text-[28px] font-semibold">{headline}</h2>
                    <div>
                         <button>
                              <AiFillCaretDown />
                         </button>
                    </div>
               </div>
               <div>
                    {showShimmer ? (
                         <ShimmerSimpleGallery card imageHeight={242} col={4} row={1} caption />
                    ) : (
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
                              {arts?.map((items) => (
                                   <SwiperSlide key={items._id}>
                                        <div className="px-3 py-2 bg-white border-gray-200 w-auto group shadow-lg">
                                             <Link to={`/art/${items._id}`}>
                                                  <div className="min-w-[250px] md:w-full ">
                                                       <img
                                                            src={items.image}
                                                            className="w-full h-auto sm:h-[180px] md:h-[200px] lg:h-[220px] object-cover group-hover:scale-105 duration-500 rounded-lg fade-scale-in"
                                                       />
                                                  </div>

                                                  <div className="flex justify-between mt-2 ">
                                                       <p className=" font-medium md:text-base lg:text-lg">
                                                            {items.title.length > 21
                                                                 ? items.title.slice(0, 21)
                                                                 : items.title}
                                                       </p>
                                                       <p className="font-semibold text-lg ">${items.price} </p>
                                                  </div>
                                                  <p className="flex flex-wrap mt-3 gap-1  ">
                                                       {items?.categories?.map((category, index) => (
                                                            <p
                                                                 className="bg-gray-200 px-2 rounded-2xl gap-4 text-gray-600"
                                                                 key={index}
                                                            >
                                                                 {category}
                                                            </p>
                                                       ))}
                                                  </p>
                                             </Link>
                                             <div className="flex justify-between items-center mt-4 mb-2">
                                                  {showFavIcon[items._id] ? (
                                                       <MdFavorite
                                                            onClick={(e) => handleFavIcon(e, items._id, items)}
                                                            className="rounded-md text-white bg-red-600  text-[35px] hover:scale-90  p-[2px] cursor-pointer duration-300"
                                                       />
                                                  ) : (
                                                       <CiHeart
                                                            className="bg-black hover:bg-blue-600 min-h-full cursor-pointer text-white text-[35px] rounded-md p-[2px] hover:rounded-md duration-300"
                                                            onClick={(e) => handleFavIcon(e, items._id, items)}
                                                       />
                                                  )}
                                                  <button
                                                       className={`py-[5px] flex justify-center items-center w-[87%] border border-gray-900 rounded-sm ${
                                                            spinnerBtnId == items._id &&
                                                            "bg-blue-600 border-blue-600 rounded-lg"
                                                       } hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:rounded-md duration-300`}
                                                       onClick={() =>
                                                            user
                                                                 ? handleRedirectToCart(
                                                                        items._id,
                                                                        items.image,
                                                                        items.title,
                                                                        items.price
                                                                   )
                                                                 : navigate("/login")
                                                       }
                                                  >
                                                       {showSpinner && spinnerBtnId == items._id ? (
                                                            <ThreeDots
                                                                 visible={true}
                                                                 height="20"
                                                                 width="50"
                                                                 color="white"
                                                                 radius="6"
                                                                 ariaLabel="three-dots-loading"
                                                                 wrapperStyle={{}}
                                                                 wrapperClass=""
                                                            />
                                                       ) : (
                                                            "Add to cart"
                                                       )}
                                                       <GiShoppingCart className="text-[22px] ml-2" />
                                                  </button>
                                             </div>
                                        </div>
                                   </SwiperSlide>
                              ))}
                         </Swiper>
                    )}
               </div>
          </div>
     );
};

export default ArtCard;
