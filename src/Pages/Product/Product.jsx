import "./Product.css";

import { useContext, useState } from "react";
import { useParams } from "react-router-dom";


import products from "../../data/products";

import Navbar from "../../components/Navbar/Navbar";

import { CartContext } from "../../context/CartContext";

import Footer from "../../components/Footer/Footer";

function Product() {

    const { id } = useParams();

    const product = products.find(
        (item) => item.id === Number(id)
    );

    const [quantity, setQuantity] = useState(1);

    const { addToCart } = useContext(CartContext);

    if (!product) {

        return <h2>Product Not Found</h2>;

    }

    return (

        <>

            <Navbar />

            <section className="product-details">

                <div className="container product-container">

                    <div className="product-image">

                        <img
                            src={product.image}
                            alt={product.name}
                        />

                    </div>

                    <div className="product-content">

                        <h1>{product.name}</h1>

                        <p>{product.category}</p>

                        <div className="product-rating">

    ⭐ {product.rating} / 5

</div>

<h2>

    ₹{product.price}

</h2>

<div className="stock">

    {product.stock > 0 ? "✅ In Stock" : "❌ Out of Stock"}

</div>

<div className="quantity-box">

    <button
        onClick={() => {
            if (quantity > 1) {
                setQuantity(quantity - 1);
            }
        }}
    >
        -
    </button>

    <span>{quantity}</span>

    <button
        onClick={() => {
            if (quantity < product.stock) {
                setQuantity(quantity + 1);
            }
        }}
    >
        +
    </button>

</div>

<button
    className="cart-btn"
    onClick={() => {

        for (let i = 0; i < quantity; i++) {
            addToCart(product);
        }

    }}
>
    Add To Cart
</button>

                        <p>

                            {product.description}

                        </p>

                    </div>

                </div>

            </section>

            <Footer />

        </>

    );

}

export default Product;