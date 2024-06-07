import React, { useEffect, useState } from "react";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import "../../css/style.css";
import "../../css/media.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";

const Order_return = () => {
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
    <div>
      <Header />

      <main id="wrapper" class="mt-md-4">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h2 class="main-title">Order</h2>
              <div class="content">
                <h6 class="title">
                  What is the minimum order value required to place an order?
                </h6>
                <p class="description">
                  There is no minimum value for an order.
                </p>
              </div>
              <div class="content">
                <h6 class="title">
                  What is the status of my order? How can I track my order?
                </h6>
                <p class="description">
                  As soon as we dispatch your order, you will be intimated with
                  the shipping details via email/SMS. You can track your order
                  from the provided link.
                </p>
              </div>
              <div class="content">
                <h6 class="title">
                  Can I change the details I have used to personalise a product
                  after placing the order?
                </h6>
                <p class="description">
                  You can get in touch with your order details and the changes
                  required. We will try to have it changed if the order hasn’t
                  been processed.
                </p>
              </div>
              <div class="content">
                <h6 class="title">How can I place bulk orders?</h6>
                <p class="description">
                  You can write to us on order@awesomekids.com and we will try
                  our best to fulfil your requirement.
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
                  What payment modes does HappyClouds accept?
                </h6>
                <p class="description">
                  We accept all major Credit or Debit Cards Payments – American
                  Express, MasterCard, Visa as well as Online Net Banking, and
                  other listed Wallets and UPI options.
                </p>
                <p class="description">
                  Cash on Delivery will be available on orders of Rs. 10,000 or
                  below. A COD Fee of Rs. 75 will be charges for all Cash on
                  Delivery orders. Any order with Personalisation will not be
                  eligible for COD. However, in the event any COD order gets
                  returned at the time of delivery, we would not be fulfilling
                  future COD orders to the said address.
                </p>
              </div>
              <div class="content">
                <h6 class="title">How do I redeem my Gift Voucher?</h6>
                <p class="description">
                  You can redeem your Gift Voucher/Store Credit on the
                  “checkout” page by entering the voucher code in the “Apply
                  Coupon Code” tab.
                </p>
              </div>
            </div>

            <div class="col-12">
              <h2 class="main-title">Returns</h2>
              <div class="content">
                <p class="description">
                  We work very hard to curate the best products for your little
                  ones. Due to hygiene and safety concerns of babies & kids,
                  HappyClouds follows a strict no exchange and no return policy.
                </p>
              </div>
              <div class="content">
                <p class="description">
                  However, in case you have received a defective/damaged or
                  incorrect product, please write to us within 48 hrs of receipt
                  of the order and we shall address it on a case-to-case basis.
                </p>
              </div>
              <div class="content">
                <h6 class="title">
                  How do I report a damaged or defective item delivered?
                </h6>
                <p class="description">
                  Quality control is of utmost importance to HappyClouds.
                  However, in case you receive a damaged product write to us
                  within 48 hrs of receiving the order along with a photo of the
                  product so we can help you resolve the issue.
                </p>
              </div>
              <div class="content">
                <h6 class="title">
                  What do I do if an item is different from what I ordered?
                </h6>
                <p class="description">
                  Please mail us within 48 hrs of receiving the order and we
                  shall help you resolve the issue.
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
    </div>
  );
};

export default Order_return;
