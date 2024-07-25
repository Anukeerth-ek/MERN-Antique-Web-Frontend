import React, { useContext } from "react";
import { WishlistContext } from "../../contexts/WishlistContext";
import ArtCard from "../../components/ArtCard";
import EmptyWishlist from './EmptyComponent'
import emptyWishlistImage from '../../assets/wishlist-1.png'

const WishList = () => {
     const { wishlist } = useContext(WishlistContext);

     return (
          <div>
               {wishlist.length > 0 ? (
                    <div className="mt-2">
                         <ArtCard arts={wishlist} headline={"Wishlist"} />
                    </div>
               ) : (
                    <EmptyWishlist image={emptyWishlistImage}/>
               )}
          </div>
     );
};

export default WishList;
