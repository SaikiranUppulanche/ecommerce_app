import React, { useContext, useEffect, useState } from "react";
import { userAuthContext } from "./userAuthContext";
import Loader from "../UI/Loader";

export const CartContext = React.createContext({
  cartItem: [],
  onAddToCart: () => {},
  onDeleteFromCart: () => {},
});

const CartContextProvider = (props) => {
  const authCtx = useContext(userAuthContext);
  const email = authCtx.email;

  const [cartItem, setCartItem] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("email")) {
      fetch(
        `https://react-auth-3257e-default-rtdb.firebaseio.com/${email}.json`
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          const dataArr = [];

          for (let key in data) {
            const product = {
              id: key,
              ...data[key],
            };
            dataArr.push(product);
          }
          setCartItem(dataArr);
        });
    } else {
      setCartItem([]);
    }
  }, [email, setCartItem]);

  const handleAddToCart = (product) => {
    const itemIndex = cartItem.findIndex(
      (item) => item.productId === product.id
    );
    setLoader(true);

    if (itemIndex === -1) {
      const newProduct = {
        ...product,
        productId: product.id,
        quantity: 1,
      };
      const sendingNewProduct = { ...newProduct };
      delete sendingNewProduct.id;

      fetch(
        `https://react-auth-3257e-default-rtdb.firebaseio.com/${email}.json`,
        {
          method: "POST",
          body: JSON.stringify(sendingNewProduct),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error("Failed to add Product");
          }
        })
        .then((data) => {
          const id = data.name;
          setCartItem((prev) => [...prev, { ...newProduct, id }]);
        })
        .catch((err) => {
          alert(err.message);
        })
        .finally(() => {
          setLoader(false);
        });
    } else {
      const currentItem = { ...cartItem[itemIndex] };
      const updatedItem = {
        ...currentItem,
        quantity: parseInt(currentItem.quantity) + 1,
      };

      const newCartItem = [...cartItem];
      newCartItem[itemIndex] = updatedItem;

      const sendingUpdatedItem = { ...updatedItem };

      // console.log(updatedCartItemID);
      delete sendingUpdatedItem.id;
      fetch(
        `https://react-auth-3257e-default-rtdb.firebaseio.com/${email}/${updatedItem.id}.json`,
        {
          method: "PATCH",
          body: JSON.stringify(sendingUpdatedItem),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          if (res.ok) {
            setCartItem(newCartItem);
            return res.json();
          } else {
            throw new Error("Failed to add product");
          }
        })
        .catch((err) => {
          alert(err.message);
        })
        .finally(() => {
          setLoader(false);
        });
    }
  };

  const handleDeleteCartItem = (id) => {
    const updatedList = cartItem.filter((item) => item.id !== id);
    fetch(
      `https://react-auth-3257e-default-rtdb.firebaseio.com/${email}/${id}.json`,
      {
        method: "DELETE",
      }
    );
    setCartItem(updatedList);
  };

  return (
    <CartContext.Provider
      value={{
        cartItem,
        onAddToCart: handleAddToCart,
        onDeleteFromCart: handleDeleteCartItem,
      }}
    >
      {loader && <Loader />}
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
