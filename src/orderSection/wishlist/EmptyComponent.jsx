import React, { useContext, useEffect, useState } from "react";
import { GiShoppingCart } from "react-icons/gi";
import ArtCard from "../../components/ArtCard";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const EmptyComponent = (prop) => {
     const { image } = prop;

     const { user } = useContext(AuthContext);

     const [arts, setArts] = useState([]);

     useEffect(() => {
          fetch("https://antique-web.onrender.com/all-arts")
               .then((res) => res.json())
               .then((data) => setArts(data.slice(14, 21)));
     }, []);

     return (
          <div className="mb-16">
               <div className="flex items-center flex-col justify-center mt-5 min-h-3/4">
                    <img src={image} alt="wishlist-icon" className=" w-44 h-44" />

                    <p className="text-red-500 font-bold text-xl">
                         No items added yet? <span className="text-black">Continue shopping to explore more.</span>
                    </p>
                    {user ? (
                         ""
                    ) : (
                         <Link to="/login">
                              <button name="empty-wishlist-signin-btn" className="bg-blue-600 text-white hover:bg-blue-800 duration-300 px-6  py-2 rounded-2xl  w-[300px] mt-9">
                                   Sign in
                              </button>
                         </Link>
                    )}
                    <Link to={"/shop"}>
                         <button name="empty-wishlist-explore-btn"
                              className={`bg-blue-400 text-white hover:bg-blue-500 duration-300 px-6  py-2 rounded-2xl  w-[300px] mt-4 ${
                                   user ? "mt-9" : ""
                              }`}
                         >
                              Explore items
                         </button>
                    </Link>
               </div>
               <ArtCard arts={arts} headline={"Explore more"} />
          </div>
     );
};

export default EmptyComponent;
