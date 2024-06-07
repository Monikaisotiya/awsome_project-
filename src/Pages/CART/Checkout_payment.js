import React, { useEffect, useState } from "react";
import "../../css/style.css";
import "../../css/media.css";
import Cart1 from "../../images/cart-img-1.jpg";
import Cart2 from "../../images/cart-img-2.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";

const Checkout_payment = () => {
  const [visibale, setvisible] = useState(false);
  const [Openmenu, setOpenmenu] = useState(false);
  const handalchangetoggale = () => {
    setvisible(!visibale);
  };

  const handelclose = () => {
    setvisible(true);
  };

  const handalopenmenu = () => {
    setOpenmenu(!Openmenu);
  };
  const handaleclosemenu = () => {
    setOpenmenu(false);
  };

  useEffect(() => {
    $(".cashm input").click(function () {
      // alert("dfdfd");
      $(".cashm").removeClass("active");
      $(this).parent().addClass("active");
      $(".cashm .form-check-input").removeClass("checked");
      $(this).addClass("checked"); // Checks it
    });

    $(".billcash input").click(function () {
      $(".billcash").removeClass("active");
      $(this).parent().addClass("active");
      $(".billcash .form-check-input").removeClass("checked");
      $(this).addClass("checked");
    });
  }, []);
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
                      <Link to={`Cart`}>Cart</Link>
                    </li>
                    <li class="breadcrumb-item">
                      <Link to={`/`}>Information</Link>
                    </li>
                    <li class="breadcrumb-item ">
                      <Link to={`/Shiping`}>Shipping</Link>
                    </li>
                    <li class="breadcrumb-item active">Payment</li>
                  </ul>
                </nav>
              </div>
              <div class="payment-details">
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
                    <Link to={`/Checkout`} class="change-btn">
                      Change
                    </Link>
                  </div>
                  <div class="info-row">
                    <div class="info-d">
                      <p class="info-title">Method</p>
                      <div>Standard Shipping · $10.00</div>
                    </div>
                  </div>
                </div>
                <form class="payment-checkout">
                  <section class="payment-option">
                    <div class="checkout-title">
                      <h6>Payment</h6>
                      <p>All transactions are secure and encrypted.</p>
                    </div>
                    <div class="payment-method">
                      <div class="form-option ">
                        <div
                          class="form-check active cashm"
                          id="cd"
                          data-toggle="collapse"
                          data-target="#creditCard"
                          aria-expanded="false"
                          aria-controls="creditCard"
                        >
                          <input
                            class="form-check-input collapsed checked"
                            checked
                            type="radio"
                            name="PaymentRadio"
                            id="credit"
                            onClick={handalchangetoggale}
                          />
                          <label for="credit" class="form-check-label">
                            Credit card
                          </label>
                        </div>

                        {!visibale ? (
                          <div
                            id="creditCard"
                            class="paymentcollapse show"
                            data-parent="#cd"
                          >
                            <div class="form-row row">
                              <div class="form-group col-12">
                                <input
                                  type="text"
                                  inputmode="numeric"
                                  pattern="[0-9]*"
                                  autocomplete="cc-number"
                                  aria-required="true"
                                  name="number"
                                  value=""
                                  class="form-control"
                                  placeholder="card number"
                                />
                              </div>
                              <div class="form-group col-12">
                                <input
                                  type="text"
                                  aria-required="true"
                                  name="name-of-card"
                                  value=""
                                  class="form-control"
                                  placeholder="Name of card"
                                />
                              </div>
                              <div class="form-group col-12 col-lg-6">
                                <input
                                  type="text"
                                  aria-required="true"
                                  autocomplete="cc-exp"
                                  inputmode="numeric"
                                  name="expiry"
                                  value=""
                                  class="form-control"
                                  placeholder="Expiration date (MM / YY)"
                                />
                              </div>
                              <div class="form-group col-12 col-lg-6">
                                <input
                                  type="text"
                                  aria-required="true"
                                  autocomplete="cc-csc"
                                  inputmode="numeric"
                                  name="expiry"
                                  value=""
                                  class="form-control"
                                  placeholder="Security code"
                                />
                              </div>
                            </div>
                          </div>
                        ) : null}
                      </div>

                      <div class="form-option">
                        <div
                          class="form-check cashm"
                          id="myGroup"
                          data-toggle="collapse"
                          data-target="#cashDelivery"
                          aria-expanded="false"
                          aria-controls="cashDelivery"
                          onClick={handelclose}
                        >
                          <input
                            class="form-check-input collapsed"
                            type="radio"
                            name="PaymentRadio"
                            id="cash"
                          />
                          <label for="cash" class="form-check-label">
                            Cash on Delivery (COD)
                          </label>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section class="billing-option">
                    <div class="checkout-title">
                      <h6>Billing address</h6>
                      <p>
                        Select the address that matches your card or payment
                        method.
                      </p>
                    </div>
                    <div class="payment-method">
                      <div class="form-option">
                        <div
                          class="form-check active billcash"
                          id="sm"
                          onClick={handaleclosemenu}
                          data-toggle="collapse"
                          data-target="#sameaddress"
                          aria-expanded="false"
                          aria-controls="sameaddress"
                        >
                          <input
                            class="form-check-input checked collapsed"
                            type="radio"
                            name="BillingRadio"
                            id="sameadd"
                          />
                          <label for="sameadd" class="form-check-label">
                            Same as shipping address
                          </label>
                        </div>
                      </div>

                      <div class="form-option ">
                        <div
                          class="form-check  billcash"
                          id="da"
                          data-toggle="collapse"
                          data-target="#differentAddress"
                          aria-expanded="false"
                          aria-controls="differentAddress"
                        >
                          <input
                            class="form-check-input collapsed"
                            type="radio"
                            name="BillingRadio"
                            id="differentAdd"
                            onClick={handalopenmenu}
                          />
                          <label for="differentAdd" class="form-check-label">
                            Use a different billing address
                          </label>
                        </div>

                        {Openmenu ? (
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
                                <option value="DN">
                                  Dadra and Nagar Haveli
                                </option>
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
                            <div class="form-group col-12">
                              <input
                                type="text"
                                aria-required="false"
                                name="area-address"
                                value=""
                                class="form-control"
                                placeholder="Phone (optional)"
                              />
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </section>
                </form>

                <div class="checkout-btn justify-content-md-between">
                  <Link
                    to={`/Shiping`}
                    class="btn btn-secondary btn-wrap custom-btn return-btn"
                  >
                    <FontAwesomeIcon icon={faChevronLeft} /> Return to shipping
                  </Link>
                  <a
                    href="javascript:void(0)"
                    class="btn btn-secondary btn-wrap custom-btn"
                  >
                    Pay Now
                  </a>
                </div>
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
                      <img src={Cart1} alt="" />
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
                      <img src={Cart2} alt="" />
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

export default Checkout_payment;
