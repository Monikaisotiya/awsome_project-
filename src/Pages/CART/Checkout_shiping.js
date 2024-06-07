import React from "react";
import "../../css/style.css";
import "../../css/media.css";
import cart1 from "../../images/cart-img-1.jpg";
import cart2 from "../../images/cart-img-2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Checkout_shiping = () => {
  return (
    <>
      <div class="checkout">
        <div class="container">
          <div class="row">
            <div class="checkout-details col-12 col-lg-6">
              <header class="checkout-header">
                <Link to={`/Home`}>
                  <h5>Awesome Kids</h5>
                </Link>
              </header>
              <div class="checkout-breadcrumb">
                <nav class="breadcrumb-nav">
                  <ul class="breadcrumb justify-content-start">
                    <li class="breadcrumb-item">
                      <Link to={`/Cart`}> Cart </Link>
                    </li>
                    <li class="breadcrumb-item">
                      <Link to={`/Checkout`}> Information </Link>
                    </li>
                    <li class="breadcrumb-item active">Shipping</li>
                    <li class="breadcrumb-item">Payment</li>
                  </ul>
                </nav>
              </div>
              <div class="shipping-details">
                <div class="information-table">
                  <div class="info-row">
                    <div class="info-d">
                      <p class="info-title">Contact</p>
                      <div>+91 97112 52014</div>
                    </div>
                    <Link class="change-btn" to={`/Checkout`}>
                      Change
                    </Link>
                  </div>
                  <div class="info-row">
                    <div class="info-d">
                      <p class="info-title">Ship to</p>
                      <div>
                        102,sunday hub, katargam, 395003 surat GJ, India
                      </div>
                    </div>

                    <Link class="change-btn" to={`/Checkout`}>
                      Change
                    </Link>
                  </div>
                </div>
                <div class="shipping-method">
                  <div class="checkout-title d-flex justify-content-between">
                    <h6>Shipping Method</h6>
                  </div>
                  <div class="shipping-rate">
                    <div>Standard Shipping</div>
                    <div class="rate">$10.00</div>
                  </div>
                </div>
                <div class="checkout-btn justify-content-md-between">
                  <Link
                    to={`/Checkout`}
                    class="btn btn-secondary btn-wrap custom-btn return-btn"
                  >
                    <FontAwesomeIcon icon={faChevronLeft} /> Return to
                    information
                  </Link>
                  <Link
                    to={`/Payment`}
                    class="btn btn-secondary btn-wrap custom-btn"
                  >
                    Continue to Playment
                  </Link>
                </div>
              </div>
              <footer class="checkout-footer">
                <div class="copyright-block text-lg-start " className="back">
                  Copyright © <a className="back">Awesome Kids</a> All Rights
                  Reserved.
                </div>
              </footer>
            </div>
            <div class="product-details col-12 col-lg-6 d-none d-lg-block">
              <section class="product-list">
                <div class="product-card">
                  <div class="product-content">
                    <div class="product-img">
                      <img src={cart1} alt="" />
                    </div>
                    <div class="product-name">
                      <h6>Midi &amp; top</h6>
                      <p>Violet</p>
                    </div>
                  </div>
                  <div class="product-price">$500.00</div>
                </div>
                <div class="product-card">
                  <div class="product-content">
                    <div class="product-img">
                      <img src={cart2} alt="" />
                    </div>
                    <div class="product-name">
                      <h6>Multi-color Costume Gown</h6>
                      <p>S / Gold / Silk</p>
                    </div>
                  </div>
                  <div class="product-price">$500.00</div>
                </div>
              </section>

              <section class="price-calculator-wrapper">
                <div class="price-calculate-items">
                  <div class="price-calculator-table">
                    <table class="table table-bordered">
                      <tbody>
                        <tr>
                          <td>Sub Total</td>
                          <td class="text-end">$1000</td>
                        </tr>
                        <tr>
                          <td>Shipping</td>
                          <td class="text-end">$70</td>
                        </tr>
                        <tr class="total">
                          <td>Total</td>
                          <td class="text-end">$1070</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout_shiping;
