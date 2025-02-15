import { createContext, useEffect, useState } from "react";

// Create
export const WishListContext = createContext();

// Provider
export const WishListContextProvider = ({ children }) => {
  const [wishList, setWishList] = useState([]);

  // Load wishlist from local storage
  useEffect(() => {
    const savedWishList = JSON.parse(localStorage.getItem("WishList")) || [];
    setWishList(savedWishList);
  }, []);

  // Save wishlist to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("WishList", JSON.stringify(wishList));
  }, [wishList]);

  const AddWishListProduct = (item) => {
    setWishList((wishlistAdd) => {
      const existingItem = wishlistAdd.find((wishListItem) => wishListItem.id === item.id);
      if (existingItem) {
        alert("Item is already in the wishlist");
        return wishlistAdd;
      } else {
        return [...wishlistAdd, item];
      }
    });
  };

  const RemoveWishListProducts = (id) => {
    setWishList((wishlistRemove) =>
      wishlistRemove.filter((wishListItem) => wishListItem.id !== id)
    );
  };

  return (
    <WishListContext.Provider value={{ wishList, AddWishListProduct, RemoveWishListProducts }}>
      {children}
    </WishListContext.Provider>
  );
};
