import React, { useEffect, useState } from "react";
import "../../css/style.css";
import "../../css/media.css";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";
import { Link, NavLink } from "react-router-dom";

const Aslogin = () => {
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

      <main id="wrapper" className="user-wrapper">
        <div className="container">
          <div className="user-box">
            <form action="" method="">
              <div className="form-row row">
                <div className="form-group col-12">
                  <input
                    id="#"
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="form-group col-12">
                  <input
                    id="#"
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="form-group col-12 text-center mb-0">
                  <button
                    id="submit-login"
                    className="btn custom-btn signup"
                    type={"submit"}
                  >
                    Sign In
                  </button>
                </div>
              </div>
              <hr />
              <div className="user-link">
                <a href="javascript:void(0)">Forgot your password?</a>
                <Link
                  activeStyle={{
                    backgroundColor: window.location.href.includes("customers")
                      ? "#ef7b84"
                      : "",
                  }}
                  to="/Create"
                >
                  Create Account
                </Link>
                <Link to={`/Home`}>Return to Store</Link>
              </div>
            </form>
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

export default Aslogin;
