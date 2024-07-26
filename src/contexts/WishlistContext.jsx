import React, { createContext, useState, useEffect } from 'react';

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [showFavIcon, setShowFavIcon] = useState({});

  // Load wishlist from localStorage on component mount
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const storedShowFavIcon = JSON.parse(localStorage.getItem('showFavIcon')) || {};
    setWishlist(storedWishlist);
    setShowFavIcon(storedShowFavIcon);
  }, []);

  // Save wishlist and showFavIcon to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('showFavIcon', JSON.stringify(showFavIcon));
  }, [showFavIcon]);

  const addToWishlist = (item) => {
    setWishlist((prevWishlist) => [...prevWishlist, item]);
  };

  const removeFromWishlist = (itemId) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((wishlistItem) => wishlistItem._id !== itemId)
    );
    setShowFavIcon((prevFavIcons) => {
      const updatedFavIcons = { ...prevFavIcons };
      delete updatedFavIcons[itemId];
      return updatedFavIcons;
    });
  };

  const handleFavIcon = (e, itemId, item) => {
    e.preventDefault();
    setShowFavIcon((prevFavIcons) => ({
      ...prevFavIcons,
      [itemId]: !prevFavIcons[itemId],
    }));

    if (!showFavIcon[itemId]) {
      addToWishlist(item);
    } else {
      removeFromWishlist(itemId);
    }
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, handleFavIcon, showFavIcon }}>
      {children}
    </WishlistContext.Provider>
  );
};
