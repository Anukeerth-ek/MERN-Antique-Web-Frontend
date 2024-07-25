import React, { useEffect, useState } from "react";
import { GiShoppingCart } from "react-icons/gi";
import ArtCard from "./ArtCard";
import { Link } from "react-router-dom";
const EmptyWishlist = (prop) => {
     const { image } = prop;
     console.log(image);

     const [arts, setArts] = useState([]);

     useEffect(() => {
          fetch("https://antique-web.onrender.com/all-arts")
               .then((res) => res.json())
               .then((data) => setArts(data.slice(14, 18)));
     }, []);

     return (
          <div className="mb-16">
               <div className="flex items-center flex-col justify-center mt-5 min-h-3/4">
                    <img src={image} alt="wishlist-icon" className=" w-44 h-44" />

                    <p className="text-red-500 font-bold text-xl">
                         No items added yet? <span className="text-black">Continue shopping to explore more.</span>
                    </p>
                    <Link to="/login">
                         <button className="bg-blue-600 text-white hover:bg-blue-800 duration-300 px-6  py-2 rounded-2xl  w-[300px] mt-9">
                              Sign in
                         </button>
                    </Link>
                    <Link to={"/shop"}>
                         <button className="bg-blue-400 text-white hover:bg-blue-500 duration-300 px-6  py-2 rounded-2xl  w-[300px] mt-4">
                              Explore items
                         </button>
                    </Link>
               </div>
               <ArtCard arts={arts} headline={"Explore more"} />
          </div>
     );
};

export default EmptyWishlist;
