import "./Checkout.css";

import { useContext } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";

function Checkout() {

    const { cart } = useContext(CartContext);

    const total = cart.reduce(

        (sum, item) => sum + item.price * item.quantity,

        0

    );

    return (

        <>

            <Navbar />

            <section className="checkout-page">

                <div className="container">

                    <h2>

                        Checkout

                    </h2>

                    <div className="checkout-grid">

                        <div className="checkout-form">

                            <input type="text" placeholder="First Name" />

                            <input type="text" placeholder="Last Name" />

                            <input type="email" placeholder="Email" />

                            <input type="text" placeholder="Phone Number" />

                            <textarea placeholder="Address"></textarea>

                            <input type="text" placeholder="City" />

                            <input type="text" placeholder="State" />

                            <input type="text" placeholder="Pincode" />

                        </div>

                        <div className="order-summary">

                            <h3>

                                Order Summary

                            </h3>

                            {

                                cart.map(item=>(

                                    <div
                                        key={item.id}
                                        className="summary-item"
                                    >

                                        <span>

                                            {item.name}

                                        </span>

                                        <span>

                                            ₹{item.price}

                                        </span>

                                    </div>

                                ))

                            }

                            <hr />

                            <h3>

                                Total : ₹{total}

                            </h3>

                            <Link to="/order-success">

    <button>

        Place Order

    </button>

</Link>

                        </div>

                    </div>

                </div>

            </section>

            <Footer />

        </>

    );

}

export default Checkout;