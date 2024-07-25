import React from 'react'
import { GiShoppingCart } from "react-icons/gi";
import ArtCard from './ArtCard';
const EmptyWishlist = () => {
  return (
    <div>
        <div className='flex items-center flex-col justify-center '>
            <img src='https://static.vecteezy.com/system/resources/thumbnails/017/745/125/small_2x/empty-shopping-cart-side-view-for-designing-various-shopping-promotions-png.png' alt='cart-image'
             className=' w-20 h-30'
            />
            <p>No items yet? Continue shopping to explore more.</p>
            <button>Sign in</button>
            <button>Explore items</button>
        </div>
       
    </div>
  )
}

export default EmptyWishlist