import { useContext } from "react";

import { CartContext } from "../../context/CartContext";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import { FaTrash } from "react-icons/fa";

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

      <section className="container py-5">

        <h2 className="mb-4">

          Shopping Cart

        </h2>

        {

          cart.length === 0 ?

          (

            <h3>Your Cart is Empty</h3>

          )

          :

          (

            cart.map(item => (

              <div
                key={item.id}
                className="border rounded p-3 mb-3 d-flex justify-content-between align-items-center"
              >

                <div>

                  <h4>{item.name}</h4>

                  <p>₹{item.price}</p>

                </div>

                <div className="d-flex align-items-center gap-3">

                  <button
                    className="btn btn-primary"
                    onClick={() => decreaseQty(item.id)}
                  >
                    -
                  </button>

                  <h5>{item.quantity}</h5>

                  <button
                    className="btn btn-primary"
                    onClick={() => increaseQty(item.id)}
                  >
                    +
                  </button>

                  <button
                    className="btn btn-danger"
                    onClick={() => removeItem(item.id)}
                  >
                    <FaTrash />
                  </button>

                </div>

              </div>

            ))

          )

        }

        <hr />

        <h3>

          Total : ₹{total}

        </h3>

      </section>

      <Footer />

    </>

  );

}

export default Cart;