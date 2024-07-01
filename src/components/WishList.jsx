import React, { useContext } from 'react'
import { WishlistContext } from '../contexts/WishlistContext';

const WishList = () => {
  const { wishlist } = useContext(WishlistContext);
  console.log("from wishlist",wishlist)
  return (
    <div>WishList</div>
  )
}

export default WishList