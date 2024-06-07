import React, { useEffect, useState } from "react";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import "../../css/style.css";
import "../../css/media.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationArrow,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Contactus = () => {
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
        <section class="contact-section spacer">
          <div class="container">
            <div class="row">
              <div class="map-details col-12 col-md-6 col-lg-8">
                <div class="location">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.5485613646615!2d-73.99410832318748!3d40.727953436637684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2599b1f6830c9%3A0xe491e16c99def4df!2s20%20Cooper%20Sq%20%2320%2C%20New%20York%2C%20NY%2010003%2C%20USA!5e0!3m2!1sen!2sin!4v1682154395499!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              <div class="contact-details col-12 col-md-6 col-lg-4">
                <ul class="contact-details-inner">
                  <li class="contact-box">
                    <div class="icon">
                      <i>
                        <FontAwesomeIcon icon={faPhone} />
                      </i>
                    </div>
                    <div class="contact-content">
                      <h5>Let’s Talk</h5>
                      <p>0803 - 080 - 3081</p>
                      <p>0803 - 080 - 3082</p>
                    </div>
                  </li>
                  <li class="contact-box">
                    <div class="icon">
                      <i>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </i>
                    </div>
                    <div class="contact-content">
                      <h5>Email</h5>
                      <p>mail@example.com</p>
                      <p>support@example.com</p>
                    </div>
                  </li>
                  <li class="contact-box">
                    <div class="icon">
                      <i>
                        <FontAwesomeIcon icon={faLocationArrow} />
                      </i>
                    </div>
                    <div class="contact-content">
                      <h5>Address</h5>
                      <p>
                        551 Water Color Green Ball St,
                        <br /> New York, NY 2041, USA
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="contact-form-section spacer">
          <div class="container">
            <div class="row">
              <div class="col">
                <form action="" method="post">
                  <div class="form-row row">
                    <div class="form-group col-12 col-lg-4">
                      <label class="text-muted mb-2">Name</label>
                      <input
                        type="text"
                        class="form-control"
                        required
                        name="username"
                        id="username"
                      />
                    </div>
                    <div class="form-group col-12 col-lg-4">
                      <label class="text-muted mb-2">Email</label>
                      <input
                        type="email"
                        class="form-control"
                        required
                        name="ContactFormEmail"
                        id="ContactFormEmail"
                      />
                    </div>
                    <div class="form-group col-12 col-lg-4">
                      <label class="text-muted mb-2">Phone</label>
                      <input
                        type="text"
                        class="form-control"
                        required
                        name="phone"
                        s
                        id="phone"
                      />
                    </div>
                    <div class="form-group col-12">
                      <label class="text-muted mb-2">Your Message</label>
                      <textarea
                        class="form-control"
                        required
                        name="contact[body]"
                        id="contactFormMessage"
                        cols="30"
                        rows="7"
                      ></textarea>
                    </div>
                    <div class="form-footer">
                      <button type="submit" class="custom-btn">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
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

export default Contactus;
