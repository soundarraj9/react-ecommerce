import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Details } from "../App";
import Footer from "../Components/Footer";
import "./Pages.css";

export default function Cart() {

  const { cartArray, setCartArray } = useContext(Details);

    const subtotal = cartArray.reduce(
    (total, item) =>
        total + Number(item.price) * item.quantity,
    0
    );

    const removeFromCart = (productId) => {
    setCartArray((prev) =>
        prev.filter((item) => item.productId !== productId)
    );
    };

    const decreaseQuantity = (productId) => {
    setCartArray((prev) =>
        prev.map((item) =>
        item.productId === productId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
    );
    };

    const increaseQuantity = (productId) => {
    setCartArray((prev) =>
        prev.map((item) =>
        item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
    );
    };



  const shipping = 0;
  const tax = subtotal * 0.18;
  const total = subtotal + shipping + tax;

  return (
    <>
      <div className="cart-main-container">

        <h1 className="cart-head">
          <i className="fa-solid fa-cart-shopping cart-page-icon"></i>
          Items in my cart
        </h1>

        {cartArray.length === 0 ? (

          <div className="empty-cart-container">
            <i className="fa-solid fa-cart-shopping empty-cart-icon"></i>

            <h2>Your Cart is Empty</h2>

            <p>
              Your cart is waiting for some great picks!
            </p>

            <Link to="/product" className="btn continue-shopping-btn">
              Continue Shopping
            </Link>
          </div>

        ) : (

          <div className="cart-content-container">

            {/* LEFT SIDE */}

            <div className="cart-products-container">

              <div className="cart-table-head">
                <p>PRODUCT</p>
                <p>PRICE</p>
                <p>QUANTITY</p>
                <p>TOTAL</p>
              </div>

              {cartArray.map((item, index) => (

                <div className="cart-product-card" key={item.productId || index}>

                  <div className="cart-product-details">

                    <img
                      src={item.productImg}
                      alt={item.productName}
                      className="cart-product-img"
                    />

                    <div className="cart-product-info">

                      <h3>{item.productName}</h3>

                      <p className="cart-product-category">
                        {item.category}
                      </p>

                      <p className="cart-stock">
                        {item.availability}
                      </p>

                      <button className="remove-cart-btn" onClick={() => removeFromCart(item.productId)}>
                        <i className="fa-solid fa-trash"></i>
                        Remove
                      </button>

                    </div>

                  </div>

                  <p className="cart-price">
                    ₹{Number(item.price).toLocaleString("en-IN")}
                  </p>

                  <div className="quantity-container">
                    <button onClick={() => decreaseQuantity(item.productId)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.productId)}>+</button>
                  </div>

                  <p className="cart-total">
                    ₹{(Number(item.price) * item.quantity).toLocaleString("en-IN")}
                  </p>

                </div>

              ))}

              <div className="cart-bottom-buttons">

                <Link
                  to="/product"
                  className="continue-shopping-btn"
                >
                  <i className="fa-solid fa-arrow-left"></i>
                  Continue Shopping
                </Link>

              </div>

            </div>


            {/* RIGHT SIDE */}

            <div className="order-summary-container">

              <h2>Order Summary</h2>

              <div className="summary-row">
                <span>Subtotal ({cartArray.length} items)</span>
                <strong>
                  ₹{subtotal.toLocaleString("en-IN")}
                </strong>
              </div>

              <div className="summary-row">
                <span>Shipping</span>
                <strong className="free-text">
                  Free
                </strong>
              </div>

              <div className="summary-row">
                <span>Tax (18%)</span>
                <strong>
                  ₹{Math.round(tax).toLocaleString("en-IN")}
                </strong>
              </div>

              <hr />

              <div className="summary-total">
                <span>Total</span>
                <strong>
                  ₹{Math.round(total).toLocaleString("en-IN")}
                </strong>
              </div>

              <button className="checkout-btn">
                <i className="fa-solid fa-lock"></i>
                Proceed to Checkout
              </button>


              <div className="cart-benefits">

                <div className="cart-benefit">
                  <div className="benefit-icon">
                    <i className="fa-solid fa-shield-halved"></i>
                  </div>

                  <div>
                    <h4>100% Secure Payment</h4>
                    <p>Your payments are safe with us</p>
                  </div>
                </div>


                <div className="cart-benefit">
                  <div className="benefit-icon">
                    <i className="fa-solid fa-truck"></i>
                  </div>

                  <div>
                    <h4>Free Delivery</h4>
                    <p>Free shipping on all orders</p>
                  </div>
                </div>


                <div className="cart-benefit">
                  <div className="benefit-icon">
                    <i className="fa-solid fa-arrows-rotate"></i>
                  </div>

                  <div>
                    <h4>Easy Returns</h4>
                    <p>7 days return policy</p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        )}

      </div>

      <Footer />

    </>
  );
}