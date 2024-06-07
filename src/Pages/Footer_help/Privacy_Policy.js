import React, { useState, useEffect } from "react";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import "../../css/style.css";
import "../../css/media.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";

const Privacy_Policy = () => {
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
              <h2 class="main-title">Privacy Policy</h2>
              <div class="content">
                <h6 class="title">
                  We may share or disclose the Information collected and
                  received under this Privacy Policy:
                </h6>
                <p class="description">
                  1. With one or more of our corporate entities and affiliates
                  globally to help detect and prevent identity theft, fraud and
                  other potentially illegal acts; correlate related or multiple
                  accounts to prevent abuse of our services; and to facilitate
                  joint or co-branded services as part of service offered to you
                  through Website.
                </p>
                <p class="description">
                  2. As required by law, such as to comply with a subpoena, or
                  similar legal process, etc
                </p>
                <p class="description">
                  3. When we believe in good faith that disclosure is necessary
                  to protect our rights and interests, protect your safety or
                  the safety of others, investigate fraud, or respond to a
                  government request and the like
                </p>
                <p class="description">
                  4. With our trusted services providers who work on our behalf,
                  do not have an independent use of the Information we disclose
                  to them, and have agreed to adhere to the rules set forth in
                  this Privacy Policy.
                </p>
                <p class="description">
                  5. If any of the entities or affiliates globally or group
                  company is involved in a merger, acquisition, or sale of all
                  or a portion of its assets, the business entity that
                  consequently acquires such Information will receive and store
                  the same as per this Privacy Policy.
                </p>
              </div>
              <div class="content">
                <p class="description">
                  We may also share your Information with third parties under a
                  confidentiality agreement, which inter alia provides for that
                  such third parties not disclosing the Information further
                  unless such disclosure is for the purpose. However,
                  HAPPYCLOUDS is not responsible for any breach of security or
                  for any actions of any third parties that receive Your
                  Personal Information. HAPPYCLOUDS is not liable for any loss
                  or injury caused to you as a result of you providing your
                  Personal Information to third party (including any third-party
                  websites, even if links to such third-party websites are
                  provided on the Website).
                </p>
              </div>
              <div class="content">
                <p class="description">
                  You may receive promotional offers, campaign details, company
                  news, updates, related product or service Information, etc. by
                  email among other means. If you have opted to receive
                  promotional offers there will be unsubscribe options with all
                  such category of offers and you may choose to unsubscribe from
                  such offers at any time by following the instructions included
                  at the bottom of each email, or by contacting us via our
                  Website.
                </p>
              </div>
              <div class="content">
                <h6 class="title">POLICY UPDATES</h6>
                <p class="description">
                  We reserve the right to change or update this policy at any
                  time by placing a prominent notice on our site. Such changes
                  shall be effective immediately upon posting to this site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <a
        className="backToTop"
        href="javascript:void(0)"
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      >
        <i>
          <FontAwesomeIcon icon={faChevronUp} />
        </i>
      </a>
    </>
  );
};

export default Privacy_Policy;
