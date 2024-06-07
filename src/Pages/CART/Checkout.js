import React from "react";
import "../../css/style.css";
import "../../css/media.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Card1 from "../../images/cart-img-1.jpg";
import Card2 from "../../images/cart-img-2.jpg";
import { Link, NavLink } from "react-router-dom";

const Checkout = () => {
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
                      <Link to={`/cart`}>Cart</Link>
                    </li>
                    <li class="breadcrumb-item">
                      <Link to={`/Checkout`}>Information</Link>
                    </li>
                    <li class="breadcrumb-item active">Shipping</li>
                    <li class="breadcrumb-item">Payment</li>
                  </ul>
                </nav>
              </div>

              <div class="information-details">
                <form action="" method="post">
                  <section class="contact-details">
                    <div class="checkout-title d-flex justify-content-between">
                      <h6>Contact</h6>
                      <span>
                        Already have an account?{" "}
                        <NavLink to={`/`}>Log In</NavLink>
                      </span>
                    </div>
                    <div class="form-row row">
                      <div class="form-group col-12">
                        <input
                          class="form-control"
                          name="email"
                          type="text"
                          placeholder="Email or mobile phone number"
                        />
                      </div>
                    </div>
                    <div class="checkboxlabel">
                      <input id="contact_opt" type="checkbox" />
                      <label for="contact_opt">
                        Email me with news and offers
                      </label>
                    </div>
                  </section>
                  <section class="address-details">
                    <div class="checkout-title d-flex justify-content-between">
                      <h6>Shipping address</h6>
                    </div>
                    <div class="form-row row">
                      <div class="form-group col-12">
                        <select
                          class="form-select"
                          aria-label="Default select example"
                        >
                          <option>Afghanistan</option>
                          <option value="1">Albania</option>
                          <option value="2">India</option>
                          <option value="3">Jamaica</option>
                          <option value="3">Kazakhstan</option>
                        </select>
                      </div>
                      <div class="form-group col-12 col-lg-6">
                        <input
                          type="text"
                          name="your-first-name"
                          value=""
                          class="form-control"
                          placeholder="First name (option)"
                        />
                      </div>
                      <div class="form-group col-12 col-lg-6">
                        <input
                          type="text"
                          aria-required="true"
                          name="your-last-name"
                          value=""
                          class="form-control"
                          placeholder="Last name"
                        />
                      </div>
                      <div class="form-group col-12">
                        <input
                          type="text"
                          aria-required="true"
                          name="your-address"
                          value=""
                          class="form-control"
                          placeholder="Address"
                        />
                      </div>
                      <div class="form-group col-12">
                        <input
                          type="text"
                          aria-required="false"
                          name="area-address"
                          value=""
                          class="form-control"
                          placeholder="Apartment, suite, etc. (optional)"
                        />
                      </div>
                      <div class="form-group col-12 col-md-4">
                        <input
                          type="text"
                          aria-required="true"
                          name="city"
                          value=""
                          class="form-control"
                          placeholder="City"
                        />
                      </div>
                      <div class="form-group col-12 col-md-4">
                        <select
                          name="zone"
                          id=""
                          required=""
                          class="form-select"
                        >
                          <option hidden="" disabled="" value="">
                            &nbsp;
                          </option>
                          <option value="AN">Andaman</option>
                          <option value="AP">Andhra Pradesh</option>
                          <option value="AR">Arunachal Pradesh</option>
                          <option value="AS">Assam</option>
                          <option value="BR">Bihar</option>
                          <option value="CH">Chandigarh</option>
                          <option value="CG">Chhattisgarh</option>
                          <option value="DN">Dadra and Nagar Haveli</option>
                          <option value="DD">Daman and Diu</option>
                          <option value="DL">Delhi</option>
                          <option value="GA">Goa</option>
                          <option value="GJ">Gujarat</option>
                          <option value="HR">Haryana</option>
                          <option value="HP">Himachal Pradesh</option>
                          <option value="JK">Jammu and Kashmir</option>
                          <option value="JH">Jharkhand</option>
                          <option value="KA">Karnataka</option>
                          <option value="KL">Kerala</option>
                          <option value="LA">Ladakh</option>
                          <option value="LD">Lakshadweep</option>
                          <option value="MP">Madhya Pradesh</option>
                          <option value="MH">Maharashtra</option>
                          <option value="MN">Manipur</option>
                          <option value="ML">Meghalaya</option>
                          <option value="MZ">Mizoram</option>
                          <option value="NL">Nagaland</option>
                          <option value="OR">Odisha</option>
                          <option value="PY">Puducherry</option>
                          <option value="PB">Punjab</option>
                          <option value="RJ">Rajasthan</option>
                          <option value="SK">Sikkim</option>
                          <option value="TN">Tamil Nadu</option>
                          <option value="TS">Telangana</option>
                          <option value="TR">Tripura</option>
                          <option value="UP">Uttar Pradesh</option>
                          <option value="UK">Uttarakhand</option>
                          <option value="WB">West Bengal</option>
                        </select>
                      </div>
                      <div class="form-group col-12 col-md-4">
                        <input
                          type="text"
                          aria-required="true"
                          name="pin-code"
                          value=""
                          class="form-control"
                          placeholder="PIN Code"
                        />
                      </div>
                    </div>
                    <div class="checkboxlabel">
                      <input id="save_shipping_information" type="checkbox" />
                      <label for="save_shipping_information">
                        Email me with news and offers
                      </label>
                    </div>
                  </section>
                  <div class="checkout-btn justify-content-md-between">
                    <Link
                      to={`/Cart`}
                      class="btn btn-secondary btn-wrap custom-btn return-btn"
                    >
                      <FontAwesomeIcon icon={faChevronLeft} />
                      Return to cart
                    </Link>
                    <Link
                      to={`/Shiping`}
                      class="btn btn-secondary btn-wrap custom-btn"
                    >
                      Continue to Shopping
                    </Link>
                  </div>
                </form>
              </div>

              <footer class="checkout-footer">
                <div class="copyright-block text-lg-start ">
                  Copyright © <a href="#">Awesome Kids</a> All Rights Reserved.
                </div>
              </footer>
            </div>
            <div class="product-details col-12 col-lg-6 d-none d-lg-block">
              <section class="product-list">
                <div class="product-card">
                  <div class="product-content">
                    <div class="product-img">
                      <img src={Card1} alt="" />
                    </div>
                    <div class="product-name">
                      <h6>Midi & top</h6>
                      <p>Violet</p>
                    </div>
                  </div>
                  <div class="product-price">$500.00</div>
                </div>
                <div class="product-card">
                  <div class="product-content">
                    <div class="product-img">
                      <img src={Card2} alt="" />
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

export default Checkout;
