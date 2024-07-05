import { Link, useLoaderData, useNavigate } from "react-router-dom";

import { IoHome } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";

import { FaStar } from "react-icons/fa6";
import Dimensions from "./Dimensions";
import { AuthContext } from "../../contexts/AuthProvider";
import { useContext, useEffect, useState } from "react";
import ArtCard from "../../components/ArtCard";
import { fetchAntiqueByCategory } from "../../home/FetchAntiqueByCategory";

const ProductDetailsPage = () => {
     const { _id, image, title, description, seller, offer, price, materials, dimensions, categories } = useLoaderData();
     const { user, loading } = useContext(AuthContext);
     const [categoryItem, setCategoryItem] = useState("");

     useEffect(() => {
          const fetchCategoryData = async () => {
               try {
                    const fetchedItems = await Promise.all(
                         categories.map((item) => fetchAntiqueByCategory(item))
                    );
                    setCategoryItems(fetchedItems);
               } catch (error) {
                    console.error('Error fetching category items:', error);
               }
          };
          fetchCategoryData();
     }, [categories]);

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
          event.preventDefault();
          navigate(`/antique/cart/${itemId}`);
     };
     return (
          <section>
               <div className="mx-0 px-4 md:px-0 md:mx-16 mt-5 ">
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
                         <div className="flex overflow-x-scroll md:overflow-x-hidden md:overflow-y-hidden cursor-pointer flex-row md:flex-col mr-5 gap-y-0 gap-x-2 md:gap-x-0 mb-3 md:gap-y-9">
                              <img
                                   src={image}
                                   className="max-w-28 h-28 bg-gray-200 p-2 hover:scale-110 hover:p-0 hover:rounded-md duration-300 rounded-md"
                              />
                              <img
                                   src={image}
                                   className="max-w-28 h-28 bg-gray-200 p-2 hover:scale-110 hover:p-0 hover:rounded-md duration-300 rounded-md"
                              />
                              <img
                                   src={image}
                                   className="max-w-28 h-28 bg-gray-200 p-2 hover:scale-110 hover:p-0 hover:rounded-md duration-300 rounded-md"
                              />
                              <img
                                   src={image}
                                   className="max-w-28 h-28 bg-gray-200 p-2 hover:scale-110 hover:p-0 hover:rounded-md duration-300 rounded-md"
                              />
                         </div>
                         <div className="  md:h-[550px] md:w-[600px]  mr-10">
                              <img src={image} className="min-w-full h-full md:relative   rounded-md" />
                         </div>
                         <div className="md:w-[580px]">
                              <h2 className="text-xl mt-3 md:mt-0 md:text-4xl font-semibold">{title}</h2>
                              <div className="flex justify-between md:flex md:flex-col md:justify-normal">
                                   <div className="inline-flex items-center mt-3 mb-3">
                                        {seller.rating ? (
                                             <>
                                                  <FaStar className="text-[#FFD700]" />{" "}
                                                  <FaStar className="text-[#FFD700]" />{" "}
                                                  <FaStar className="text-[#FFD700]" />{" "}
                                                  <FaStar className="text-[#FFD700]" />{" "}
                                                  <FaStar className="text-[#FFD700]" />{" "}
                                             </>
                                        ) : (
                                             ""
                                        )}
                                        <span>(122)</span>
                                   </div>
                                   <div className="mt-3 md:mt-0 mb-3 md:mb-4  md:ml-0">
                                        <span className="mr-3 text-blue-500 text-xl font-medium">${price}</span>
                                        <span className=" text-blue-500 text-lg font-medium">{offer}%off</span>
                                   </div>
                              </div>
                              <p>{description}</p>
                              <div className="flex  space-x-2 my-8">
                                   <p className="mr-[19px]"> Materials:</p>
                                   {materials.map((item, index) => (
                                        <span className="bg-black hover:bg-blue-500 duration-300 text-white px-2 md:px-4 py-[2px] cursor-pointer">
                                             {item}
                                        </span>
                                   ))}
                              </div>
                              <div className="flex  space-x-2 my-8">
                                   <span>Dimensions:</span>
                                   <Dimensions dimensions={dimensions} />
                              </div>
                              <div className="mt-10 flex justify-center md:flex-none md:justify-normal">
                                   <button
                                        className="bg-blue-600 hover:bg-blue-800 duration-300 py-2 w-48 md:w-full  rounded-md text-white"
                                        onClick={(event) => (user ? handleRedirectToCart(event, _id) : navigate("/login"))}
                                   >
                                        Add to cart
                                   </button>
                              </div>

                              <ul className="inline-flex mt-6 mb-3 md:mb-0">
                                   <strong className="mr-2">Category:</strong>
                                   {categories.map((item, index) => {
                                        const isLastItem = index === categories.length - 1;
                                        return (
                                             <li key={index}>
                                                  {" "}
                                                  {item}
                                                  {!isLastItem && ", "}{" "}
                                             </li>
                                        );
                                   })}
                              </ul>
                         </div>
                    </div>
               </div>

               {/* <div>  <ArtCard arts={artWorks} headline={"hello"}/></div> */}
          </section>
     );
};

export default ProductDetailsPage;
