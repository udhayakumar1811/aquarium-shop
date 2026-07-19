import "./Cart.css";

import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { CartContext } from "../../context/CartContext";

function Cart() {

    const {

        cart,
        increaseQty,
        decreaseQty,
        removeItem,

    } = useContext(CartContext);

    const total = cart.reduce(

        (sum, item) => sum + item.price * item.quantity,

        0

    );

    return (

        <>

            <Navbar />

            <section className="cart-page">

                <div className="container">

                    <h2 className="cart-title">

                        Shopping Cart

                    </h2>

                    {

                        cart.length === 0 ?

                        (

                            <h3 className="empty-cart">

                                Your Cart is Empty

                            </h3>

                        )

                        :

                        (

                            <>

                                {

                                    cart.map((item) => (

                                        <div
                                            className="cart-item"
                                            key={item.id}
                                        >

                                            <div className="cart-left">

                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                />

                                                <div className="cart-info">

                                                    <h3>

                                                        {item.name}

                                                    </h3>

                                                    <p>

                                                        {item.category}

                                                    </p>

                                                    <div className="cart-price">

                                                        ₹{item.price}

                                                    </div>

                                                </div>

                                            </div>

                                            <div className="cart-right">

                                                <div className="qty-box">

                                                    <button
                                                        onClick={() =>
                                                            decreaseQty(item.id)
                                                        }
                                                    >

                                                        -

                                                    </button>

                                                    <span>

                                                        {item.quantity}

                                                    </span>

                                                    <button
                                                        onClick={() =>
                                                            increaseQty(item.id)
                                                        }
                                                    >

                                                        +

                                                    </button>

                                                </div>

                                                <div className="sub-total">

                                                    ₹{item.price * item.quantity}

                                                </div>

                                                <button
                                                    className="delete-btn"
                                                    onClick={() =>
                                                        removeItem(item.id)
                                                    }
                                                >

                                                    <FaTrash />

                                                </button>

                                            </div>

                                        </div>

                                    ))

                                }

                                <div className="cart-footer">

                                    <h2 className="total-price">

                                        Total : ₹{total}

                                    </h2>

                                    <div className="cart-buttons">

                                        <Link to="/shop">

                                            <button className="continue-btn">

                                                Continue Shopping

                                            </button>

                                        </Link>

                                        <Link to="/checkout">

    <button className="checkout-btn">

        Checkout

    </button>

</Link>

                                    </div>

                                </div>

                            </>

                        )

                    }

                </div>

            </section>

            <Footer />

        </>

    );

}

export default Cart;