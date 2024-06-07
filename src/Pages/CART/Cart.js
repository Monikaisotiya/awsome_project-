import React, { useEffect, useState } from "react";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import "../../css/style.css";
import "../../css/media.css";
import CartA from "../../images/cart-img-1.jpg";
import CartB from "../../images/cart-img-2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronUp,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";
import { counter } from "@fortawesome/fontawesome-svg-core";
import { Link } from "react-router-dom";

const Cart = () => {
  const [visible, setvisible] = useState(false);

  // increment decrement product 1

  const [count, setCounter] = useState(0);
  const IncreementCount = () => {
    if (count > 0) {
      setCounter(count - 1);
    }
  };
  const DecreementCount = () => {
    setCounter(count + 1);
  };

  const handelchange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 1) {
      setCounter(value);
    }
  };
  // increment decrement product 2

  const [counttwo, setCountertwo] = useState(0);
  const IncreementCounttwo = () => {
    if (counttwo > 0) {
      setCountertwo(counttwo - 1);
    }
  };
  const DecreementCounttwo = () => {
    setCountertwo(counttwo + 1);
  };

  const handelchangetwo = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 1) {
      setCountertwo(value);
    }
  };

  useEffect(() => {
    // Sticky Header
    $(window).scroll(function () {
      var scroll = $(window).scrollTop(),
        sticky = $(".header-center"),
        mobilesticky = $(".mobile-menu");

      if (scroll >= 300) {
        sticky.addClass("fixed-header");
        mobilesticky.addClass("fixed-header");
      } else {
        sticky.removeClass("fixed-header");
        mobilesticky.removeClass("fixed-header");
      }

      //back to top
      if (scroll > 300) {
        $(".backToTop").fadeIn();
      } else {
        $(".backToTop").fadeOut();
      }
    });
  });

  // footer scrool mate

  //Click event to back to top
  $(".backToTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Header />

      <main id="wrapper" class="mt-md-4">
        <div class="container">
          <div class="row">
            <div class="col-12 mb-md-3">
              <div class="cart-table cart-table-responsive">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <td class="text-center">image</td>
                      <td class="text-start">Product Name</td>
                      <td class="text-start">Model</td>
                      <td class="text-start">Quantity</td>
                      <td class="text-center">Unit Price</td>
                      <td class="text-center">Total</td>
                      <td class="text-center">Remove</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="text-center">
                        <a href="#">
                          <img class="img-thumbnail" src={CartA} alt="" />
                        </a>
                      </td>
                      <td class="text-start">
                        <a href="#">Garlic quisquam</a>
                        <br />
                        <small>Reward Points: 400</small>
                      </td>
                      <td class="text-start">Product 1</td>
                      <td class="text-start">
                        <div class="qty">
                          <div class="input-group bootstrap-touchpin">
                            <span class="input-group-btn input-group-prepend bootstrap-touchspin-injected">
                              <button
                                onClick={IncreementCount}
                                class="btn btn-primary bootstrap-touchspin-down"
                                type="button"
                              >
                                -
                              </button>
                            </span>
                            <input
                              id="quantity-wanted"
                              type="text"
                              value={count}
                              onChange={handelchange}
                              inputmode="numeric"
                              name="qty"
                              pattern="[0-9]"
                              min="1"
                            />
                            <span class="input-group-btn input-group-append bootstrap-touchspin-injected">
                              <button
                                onClick={DecreementCount}
                                class="btn btn-primary bootstrap-touchspin-up"
                                type="button"
                              >
                                +
                              </button>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td class="text-center product-price">$122.00</td>
                      <td class="text-center product-subtotal">$122.00</td>
                      <td class="text-center product-remove">
                        <a href="#">
                          <FontAwesomeIcon icon={faXmark} />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td class="text-center">
                        <a href="#">
                          <img class="img-thumbnail" src={CartB} alt="" />
                        </a>
                      </td>
                      <td class="text-start">
                        <a href="#">Vel Neque Posuere</a>
                        <br />
                      </td>
                      <td class="text-start">Product 2</td>
                      <td class="text-start">
                        <div class="qty">
                          <div class="input-group bootstrap-touchpin">
                            <span class="input-group-btn input-group-prepend bootstrap-touchspin-injected">
                              <button
                                onClick={IncreementCounttwo}
                                class="btn btn-primary bootstrap-touchspin-down"
                                type="button"
                                id="count"
                              >
                                -
                              </button>
                            </span>
                            <input
                              id="quantity-wanted"
                              type="text"
                              value={counttwo}
                              onChange={handelchangetwo}
                              inputmode="numeric"
                              name="qty"
                              pattern="[0-9]"
                              min="1"
                            />
                            <span class="input-group-btn input-group-append bootstrap-touchspin-injected">
                              <button
                                onClick={DecreementCounttwo}
                                class="btn btn-primary bootstrap-touchspin-up"
                                type="button"
                              >
                                +
                              </button>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td class="text-center product-price">$75.00</td>
                      <td class="text-center product-subtotal">$75.00</td>
                      <td class="text-center product-remove">
                        <a href="#">
                          <FontAwesomeIcon icon={faXmark} />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="price-calculator-wrapper">
                <div class="price-calculate-items">
                  <h5>Cart Totals</h5>
                  <div class="price-calculator-table">
                    <table class="table table-bordered">
                      <tbody>
                        <tr>
                          <td>Sub Total</td>
                          <td class="text-end">$230</td>
                        </tr>
                        <tr>
                          <td>Shipping</td>
                          <td class="text-end">$70</td>
                        </tr>
                        <tr class="total">
                          <td>Total</td>
                          <td class="text-end">$300</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div class="cart-btn justify-content-md-between">
                <Link
                  to={`/shoplist
                  `}
                  class="btn btn-secondary btn-wrap custom-btn continue-shop-btn"
                >
                  <FontAwesomeIcon icon={faChevronLeft} /> Continue shopping
                </Link>
                <Link
                  to={`/Checkout`}
                  class="btn btn-secondary btn-wrap custom-btn"
                >
                  Proceed to checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      <a
        class="backToTop"
        href="javascript:void(0)"
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      >
        <FontAwesomeIcon icon={faChevronUp} />
      </a>
    </>
  );
};

export default Cart;
