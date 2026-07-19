import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {

  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [search, setSearch] = useState("");

  // =========================
  // Add To Cart
  // =========================

  const addToCart = (product) => {

    const exist = cart.find(item => item.id === product.id);

    if (exist) {

      setCart(

        cart.map(item =>

          item.id === product.id

            ? { ...item, quantity: item.quantity + 1 }

            : item

        )

      );

    } else {

      setCart([

        ...cart,

        {

          ...product,

          quantity: 1,

        },

      ]);

    }

  };

  // =========================
  // Increase Quantity
  // =========================

  const increaseQty = (id) => {

    setCart(

      cart.map(item =>

        item.id === id

          ? {

              ...item,

              quantity: item.quantity + 1,

            }

          : item

      )

    );

  };

  // =========================
  // Decrease Quantity
  // =========================

  const decreaseQty = (id) => {

    setCart(

      cart

        .map(item =>

          item.id === id

            ? {

                ...item,

                quantity: item.quantity - 1,

              }

            : item

        )

        .filter(item => item.quantity > 0)

    );

  };

  // =========================
  // Remove Cart Item
  // =========================

  const removeItem = (id) => {

    setCart(

      cart.filter(item => item.id !== id)

    );

  };

  // =========================
  // Add Wishlist
  // =========================

  const addToWishlist = (product) => {

    const exist = wishlist.find(item => item.id === product.id);

    if (!exist) {

      setWishlist([

        ...wishlist,

        product,

      ]);

    }

  };

  // =========================
  // Remove Wishlist
  // =========================

  const removeWishlist = (id) => {

    setWishlist(

      wishlist.filter(item => item.id !== id)

    );

  };

  // =========================
  // Move Wishlist To Cart
  // =========================

  const moveToCart = (product) => {

    addToCart(product);

    removeWishlist(product.id);

  };

  return (

    <CartContext.Provider

      value={{

        search,
        setSearch,

        cart,
        wishlist,

        addToCart,
        increaseQty,
        decreaseQty,
        removeItem,

        addToWishlist,
        removeWishlist,
        moveToCart,

      }}

    >

      {children}

    </CartContext.Provider>

  );

}

export default CartProvider;