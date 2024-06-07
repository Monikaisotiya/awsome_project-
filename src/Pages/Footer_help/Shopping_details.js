import React, { useState, useEffect } from "react";
import Footer from "../../Component/Footer/Footer";
import Header from "../../Component/Header/Header";
import "../../css/style.css";
import "../../css/media.css";
import $ from "jquery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Shopping_details = () => {
  const [visible, setVisible] = useState(false);
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

      // back to top
      if (scroll > 300) {
        $(".backToTop").fadeIn();
      } else {
        $(".backToTop").fadeOut();
      }
    });
  }, []);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  return (
    <>
      <Header />
      <main id="wrapper" class="mt-md-4">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h2 class="main-title">Shopping</h2>
              <div class="content">
                <h6 class="title">What is the estimated delivery time?</h6>
                <p class="description">
                  The delivery time would be 2-5 working days from the date of
                  shipment as specified in the product page.
                </p>
                <p class="description">
                  For multiple product orders from the same brand, the maximum
                  shipping time will be applicable.
                </p>
              </div>
              <div class="content">
                <h6 class="title">Do you have any Shipping Charges?</h6>
                <p class="description">
                  HappyClouds shall charge a nominal shipping and handling fee
                  for orders below Rs. 2,00. Orders of Rs. 2,000 and above will
                  be eligible for free shipping (unless specified otherwise).
                </p>
              </div>
              <div class="content">
                <h6 class="title">Do you ship Internationally?</h6>
                <p class="description">
                  We are presently not shipping internationally, but we plan to
                  start soon.
                </p>
              </div>
              <div class="content">
                <h6 class="title">
                  Can I change the delivery address after placing the order?
                </h6>
                <p class="description">
                  You can mail us your order details, and we will do our best to
                  change it if the order hasn’t been processed.
                </p>
              </div>
              <div class="content">
                <h6 class="title">
                  Can I add more than one delivery address in an order?
                </h6>
                <p class="description">
                  No, you have to place separate orders for multiple delivery
                  addresses.
                </p>
              </div>
              <div class="content">
                <h6 class="title">
                  How do I report an item missing from my order?
                </h6>
                <p class="description">
                  You can mail us within 48 hrs from receiving your order and we
                  will help you out.
                </p>
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

export default Shopping_details;
