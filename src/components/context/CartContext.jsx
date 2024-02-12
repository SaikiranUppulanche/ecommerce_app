import React, { useState } from "react";

const cartElements = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

    quantity: 2,
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

    quantity: 3,
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

    quantity: 1,
  },
];

export const CartContext = React.createContext({
  cartItem: [...cartElements],
  onAddToCart: () => {},
  //   onDeleteFromCart: () => {},
});

const CartContextProvider = (props) => {
  const [cartItem, setCartItem] = useState([]);

  const handleAddToCart = (product) => {
    const itemIndex = cartItem.findIndex(
      (item) =>
        item.title.toLowerCase().trim() === product.title.toLowerCase().trim()
    );
    if (itemIndex === -1) {
      const newProduct = {
        ...product,
        quantity: 1,
      };
      setCartItem((prev) => [...prev, newProduct]);
    } else {
      const currentItem = { ...cartItem[itemIndex] };
      const updatedItem = {
        ...currentItem,
        quantity: parseInt(currentItem.quantity) + 1,
      };
      const newCartItem = [...cartItem];
      newCartItem[itemIndex] = updatedItem;
      setCartItem(newCartItem);
    }
  };

  //   const handleDeleteCartItem = (id) => {
  //     const updatedList = cartItem.filter((item) => item.id !== id);
  //     setCartItem(updatedList);
  //   };
  return (
    <CartContext.Provider
      value={{
        cartItem,
        onAddToCart: handleAddToCart,
        // onDeleteFromCart: handleDeleteCartItem,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
