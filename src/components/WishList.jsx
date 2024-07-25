import React, { useContext } from "react";
import { WishlistContext } from "../contexts/WishlistContext";
import ArtCard from "./ArtCard";
import EmptyWishlist from "./EmptyWishlist";

const WishList = () => {
     const { wishlist } = useContext(WishlistContext);

     return (
          <div>
               {wishlist.length > 0 ?  <div className="mt-2">
                    <ArtCard arts={wishlist} headline={"Wishlist"} /> 
               </div> : <EmptyWishlist/> }
          </div>
     );
};

export default WishList;
