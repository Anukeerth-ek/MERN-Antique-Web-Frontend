import React, { useContext } from "react";
import { WishlistContext } from "../contexts/WishlistContext";
import ArtCard from "./ArtCard";

const WishList = () => {
     const { wishlist } = useContext(WishlistContext);

     return (
          <div>
               {wishlist.length > 0 ?  <div className="mt-2">
                    <ArtCard arts={wishlist} headline={"Wishlist"} /> 
               </div> : <p className="text-red-500 text-5xl text-center mt-4">No items added yet</p> }
          </div>
     );
};

export default WishList;
