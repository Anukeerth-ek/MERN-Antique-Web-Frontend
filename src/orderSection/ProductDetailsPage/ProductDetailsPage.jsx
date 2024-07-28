import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import Dimensions from "./Dimensions";
import { AuthContext } from "../../contexts/AuthProvider";
import { useContext, useEffect, useState } from "react";
import ArtCard from "../../components/ArtCard";
import { fetchAntiqueByCategory } from "./fetchSimilarProducts";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { GiShoppingCart } from "react-icons/gi";
import { addToCart } from "../../redux/AntiqueSlice";
import { useDispatch } from "react-redux";
import Review from "./Review";

const ProductDetailsPage = () => {
     const { _id, image, title, description, seller, offer, price, materials, dimensions, categories } = useLoaderData();
     const { user, loading } = useContext(AuthContext);
     const [categoryItems, setCategoryItems] = useState([]);
     const dispatch = useDispatch()

     useEffect(() => {
          const fetchCategoryData = async (productId) => {
               try {
                    if (categories.length > 0) {
                         const category = categories[0]; // Assume fetching items for the first category

                         const data = await fetchAntiqueByCategory(category);

                         let arrayData = Object.values(data);

                         const newData = arrayData.filter((item, index) => {
                              return item._id !== productId;
                         });
                         setCategoryItems(newData);
                    }
               } catch (error) {
                    console.error("Error fetching category items:", error);
               }
          };
          fetchCategoryData(_id);
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
     const handleRedirectToCart = (id, image, title, price) => {
       const items = {id, image, title, price}
   
       
          dispatch(addToCart(items));
          navigate('/cart')
     };
     return (
          <section>
               <div className="mx-0 px-4 md:px-0 md:mx-16 mt-5 ">
                    <ol className="inline-flex items-center cursor-pointer">
                         {productDetailBreadCrumbs.map((item, index) => (
                              <Link to={item.path} key={index}>
                                   <li className="flex text-sm md:text-base items-center font-medium text-gray-700 hover:text-blue-600 md:ms-1 dark:text-gray-400 dark:hover:text-black">
                                        <item.icon className="text-base md:text-lg" />
                                        {item.link}
                                   </li>
                              </Link>
                         ))}
                    </ol>

                    <div className="flex flex-wrap md:flex-nowrap justify-between mt-4 md:mt-7">
                         <div className="flex overflow-x-scroll md:overflow-x-hidden md:overflow-y-hidden cursor-pointer flex-row md:flex-col mr-5 gap-y-0 gap-x-2 md:gap-x-0 mb-3 md:gap-y-9">
                              {[...Array(4)].map((_, index) => (
                                   <img
                                        key={index}
                                        src={image}
                                        className="max-w-28 h-28 bg-gray-200 p-2 hover:scale-110 hover:p-0 hover:rounded-md duration-300 rounded-md"
                                   />
                              ))}
                         </div>
                         <div className="md:h-[550px] md:w-[500px] mr-10">
                              <img src={image} className="min-w-full h-full object-contain md:relative rounded-md" />
                         </div>
                         <div className="md:w-[650px]">
                              <h2 className="text-xl mt-3 md:mt-0 md:text-4xl font-semibold">{title}</h2>
                              <div className="flex justify-between md:flex md:flex-col md:justify-normal">
                                   <div className="inline-flex items-center mt-3 mb-3">
                                        {seller.rating && (
                                             <>
                                                  {[...Array(5)].map((_, index) => (
                                                       <FaStar key={index} className="text-[#FFD700]" />
                                                  ))}
                                                  <span>(122)</span>
                                             </>
                                        )}
                                   </div>
                                   <div className="mt-3 md:mt-0 mb-3 md:mb-4 md:ml-0">
                                        <span className="mr-3 text-3xl font-medium">${price}</span>
                                        <span className="text-blue-500 text-lg font-medium">{offer}% off</span>
                                   </div>
                              </div>
                              <p>{description}</p>
                              <div className="flex space-x-2 my-6">
                                   <p className="mr-[19px]">Materials:</p>
                                   {materials?.map((item, index) => (
                                        <span
                                             key={index}
                                             className="bg-black hover:bg-blue-500 duration-300 text-white px-2 md:px-4 py-[2px] cursor-pointer"
                                        >
                                             {item}
                                        </span>
                                   ))}
                              </div>
                              <div className="flex space-x-2 my-6">
                                   <span className="mr-[1px]">Dimensions:</span>
                                   <Dimensions dimensions={dimensions} />
                              </div>

                              <ul className="inline-flex  mb-3 md:mb-0">
                                   <p className=" mr-[26px]">Category:</p>
                                   {categories.map((item, index) => {
                                        const isLastItem = index === categories.length - 1;
                                        return (
                                             <li
                                                  key={index}
                                                  className=" bg-black hover:bg-blue-500 mr-2 duration-300 text-white px-2 md:px-4 py-[2px] cursor-pointer"
                                             >
                                                  {item}
                                                  {!isLastItem && ", "}
                                             </li>
                                        );
                                   })}
                              </ul>
                              <div className="flex  md:mt-3 ">
                                   {/* Add to cart */}
                                   <div className="mt-5 mr-2 md:mr-3 flex w-[170px] md:w-full ">
                                        <button
                                             className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-800 duration-300 py-2 md:w-full rounded-md text-white"
                                             onClick={() =>
                                                  user ? handleRedirectToCart( _id, image, title, price ) : navigate("/login")
                                             }
                                        >
                                             <GiShoppingCart className="mr-1" />
                                             Add to cart
                                        </button>
                                   </div>
                                   {/* Buy Now */}
                                   {/* <div className="mt-5 flex w-[170px] md:w-[300px] ">
                                        <button
                                             className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-800 duration-300 py-2 md:w-full rounded-md text-white"
                                             onClick={(event) =>
                                                  user ? navigate('/checkout') : navigate("/login")
                                             }
                                        >
                                             <AiOutlineThunderbolt className="mr-1" />
                                             Buy Now
                                        </button>
                                   </div> */}
                              </div>
                         </div>
                    </div>
               </div>
              <div className="mx-16 mt-5">
              <Review/>
              </div>
               <div className="mt-6 md:mt-1">
                    <ArtCard arts={categoryItems} headline="View Similar Products" />
               </div>
          </section>
     );
};

export default ProductDetailsPage;
