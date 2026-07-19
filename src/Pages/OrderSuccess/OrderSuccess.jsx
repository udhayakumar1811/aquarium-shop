import "./OrderSuccess.css";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function OrderSuccess() {

    const orderId = "AQF" + Math.floor(1000 + Math.random() * 9000);

    return (

        <>

            <Navbar />

            <section className="success-page">

                <div className="success-card">

                    <FaCheckCircle className="success-icon" />

                    <h1>

                        Order Placed Successfully

                    </h1>

                    <p>

                        Thank you for shopping with Aquafy.

                    </p>

                    <p>

                        Your order has been confirmed.

                    </p>

                    <h3>

                        Order ID : #{orderId}

                    </h3>

                    <Link to="/shop">

                        <button className="shop-btn">

                            Continue Shopping

                        </button>

                    </Link>

                </div>

            </section>

            <Footer />

        </>

    );

}

export default OrderSuccess;