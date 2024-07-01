import React, { createContext, useState } from 'react';

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [showFavIcon, setShowFavIcon] = useState({});

  const addToWishlist = (item) => {
    setWishlist((prevWishlist) => [...prevWishlist, item]);
  };
  const handleFavIcon = (e,itemId, item) => {
    e.preventDefault()
    setShowFavIcon((prevFavIcons) => {
      const updatedFavIcons = {
        ...prevFavIcons,
        [itemId]: !prevFavIcons[itemId],
      };
      if (updatedFavIcons[itemId]) {
        addToWishlist(item);
      } else {
        setWishlist((prevWishlist) =>
          prevWishlist.filter((wishlistItem) => wishlistItem._id !== itemId)
        );
      }
      return updatedFavIcons;
    });
  };
  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, handleFavIcon, showFavIcon }}>
      {children}
    </WishlistContext.Provider>
  );
};
