import { Link, useLoaderData } from "react-router-dom";

import { IoHome } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";

import { FaStar } from "react-icons/fa6";
import Dimensions from "./Dimensions";

const ProductDetailsPage = () => {
     const { _id, image, title, description, seller, offer, price, materials, dimensions, categories } = useLoaderData();

     const cartBreadCrumbs = [
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

     return (
          <section>
               <div className=" mx-20 mt-5 ">
                    <ol class="inline-flex items-center    cursor-pointer">
                         {cartBreadCrumbs.map((item, index) => (
                              <Link to={item.path}>
                                   <li
                                        className="flex items-center font-medium text-gray-700 hover:text-blue-600 md:ms-1 dark:text-gray-400 dark:hover:text-black"
                                        key={index}
                                   >
                                        <item.icon className="text-lg" />
                                        {item.link}
                                   </li>
                              </Link>
                         ))}
                    </ol>

                    <div className="flex justify-between mt-7">
                         <div className=" h-[580px] w-[700px] max-w-1/2 ">
                              <img src={image} className="min-w-full- h-full relative right-10 " />
                         </div>
                         <div className="w-1/2">
                              <h2 className="text-4xl font-semibold">{title}</h2>
                              <p className="inline-flex items-center mt-2 mb-4">
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
                              <p className="mb-4">
                                   <span className="mr-3 text-blue-500 text-xl font-medium">${price}</span>
                                   <span className=" text-blue-500 text-lg font-medium">{offer}%off</span>
                              </p>
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
                              <div className="mt-10">
                                   <button className="bg-blue-600 py-2 px-16 rounded-md text-white">Add to cart</button>
                              </div>

                              <ul className="inline-flex mt-6">
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
