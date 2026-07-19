import "./Wishlist.css";

import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaTrash, FaShoppingCart } from "react-icons/fa";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { CartContext } from "../../context/CartContext";

function Wishlist() {

    const {

        wishlist,

        removeWishlist,

        moveToCart,

    } = useContext(CartContext);

    return (

        <>

            <Navbar />

            <section className="wishlist-page">

                <div className="container">

                    <h2 className="wishlist-title">

                        My Wishlist

                    </h2>

                    {

                        wishlist.length === 0 ?

                        (

                            <h3 className="empty-wishlist">

                                Your Wishlist is Empty

                            </h3>

                        )

                        :

                        (

                            wishlist.map((item)=>(

                                <div

                                    className="wishlist-card"

                                    key={item.id}

                                >

                                    <div className="wishlist-left">

                                        <img

                                            src={item.image}

                                            alt={item.name}

                                        />

                                        <div>

                                            <h3>

                                                {item.name}

                                            </h3>

                                            <p>

                                                {item.category}

                                            </p>

                                            <h4>

                                                ₹{item.price}

                                            </h4>

                                        </div>

                                    </div>

                                    <div className="wishlist-right">

                                        <button
    className="move-btn"
    onClick={() => {

        moveToCart(item);

    }}
    title="Move to Cart"
>

    <FaShoppingCart />

</button>

                                        <button

                                            className="delete-btn"

                                            onClick={()=>removeWishlist(item.id)}

                                        >

                                            <FaTrash />

                                        </button>

                                    </div>

                                </div>

                            ))

                        )

                    }

                </div>

            </section>

            <Footer />

        </>

    );

}

export default Wishlist;