import { Link, useLoaderData, useNavigate } from "react-router-dom";

import { IoHome } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";

import { FaStar } from "react-icons/fa6";
import Dimensions from "./Dimensions";
import { AuthContext } from "../contexts/AuthProvider";
import { useContext } from "react";

const ProductDetailsPage = () => {
     const { _id, image, title, description, seller, offer, price, materials, dimensions, categories } = useLoaderData();
     const { user, loading } = useContext(AuthContext);

     const productDetailBreadCrumbs = [
          {
               path: "/",
               link: "Home",
               icon: IoHome,
          },
          {
               path: "/shop",
               link: "Shop",
               icon: MdKeyboardArrowRight,
          },
          {
               path: "",
               link: title,
               icon: MdKeyboardArrowRight,
          },
     ];
     const navigate = useNavigate();
     const handleRedirectToCart = (event, itemId) => {
          event.preventDefault()
          navigate(`/antique/cart/${itemId}`);
     };
     return (
          <section>
               <div className="mx-0 px-3 md:px-0 md:mx-28 mt-5 ">
                    <ol class="inline-flex items-center  cursor-pointer">
                         {productDetailBreadCrumbs.map((item, index) => (
                              <Link to={item.path}>
                                   <li
                                        className="flex text-sm md:text-base items-center font-medium text-gray-700 hover:text-blue-600 md:ms-1 dark:text-gray-400 dark:hover:text-black"
                                        key={index}
                                   >
                                        <item.icon className=" text-base md:text-lg" />
                                        {item.link}
                                   </li>
                              </Link>
                         ))}
                    </ol>

                    <div className="flex flex-wrap md:flex-nowrap  justify-between mt-4 md:mt-7">
                         <div className=" md:h-[550px] md:w-[700px] md:max-w-1/2 ">
                              <img src={image} className="min-w-full- h-full md:relative md:right-10 " />
                         </div>
                         <div className="md:w-1/2">
                              <h2 className="text-xl mt-3 md:mt-0 md:text-4xl font-semibold">{title}</h2>
                             <div className="flex justify-between  md:block">
                             <p className="inline-flex items-center mt-3 mb-3">
                                   {seller.rating ? (
                                        <>
                                             <FaStar className="text-[#FFD700]" /> <FaStar className="text-[#FFD700]" />{" "}
                                             <FaStar className="text-[#FFD700]" /> <FaStar className="text-[#FFD700]" />{" "}
                                             <FaStar className="text-[#FFD700]" />{" "}
                                        </>
                                   ) : (
                                        ""
                                   )}
                                   <span>(122)</span>
                              </p>
                              <p className="mt-3 md:mt-0 mb-3 md:mb-4  md:ml-0">
                                   <span className="mr-3 text-blue-500 text-xl font-medium">${price}</span>
                                   <span className=" text-blue-500 text-lg font-medium">{offer}%off</span>
                              </p>
                             </div>
                              <p>{description}</p>
                              <div className="flex  space-x-2 my-8">
                                   <p className="mr-4"> Materials:</p>
                                   {materials.map((item, index) => (
                                        <span className="bg-black hover:bg-blue-500 duration-300 text-white px-4 py-[2px] cursor-pointer">
                                             {item}
                                        </span>
                                   ))}
                              </div>
                              <div className="flex  space-x-2 my-8">
                                   <span>Dimensions:</span>
                                   <Dimensions dimensions={dimensions} />
                              </div>
                              <div className="mt-10 flex justify-center md:block ">
                                   <button className="bg-blue-600 hover:bg-blue-800 duration-300 py-2 px-16 rounded-md text-white" onClick={(event)=> user ? handleRedirectToCart(event, _id) : navigate('/login')}>Add to cart</button>
                              </div>

                              <ul className="inline-flex mt-6 mb-3 md:mb-0">
                                   <strong className="mr-2">Category:</strong>
                                   {categories.map((item, index) => {
                                        return <li key={index}>{item.concat(" ", ",")} </li>;
                                   })}
                              </ul>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default ProductDetailsPage;
