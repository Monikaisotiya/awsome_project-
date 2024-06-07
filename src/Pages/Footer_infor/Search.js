import React, { useEffect, useState } from "react";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import "../../css/style.css";
import "../../css/media.css";
import $ from "jquery";

const Search = () => {
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
      <main id="wrapper" class="mt-md-5">
        <section class="search-section spacer">
          <div class="container">
            <h2 class="heading-title text-center">
              <span>Your Search For "Kids" Revealed The Following</span>
            </h2>
            <div class="search-inner">
              <div class="row">
                <div class="search-box col">
                  <form action="#" method="get" class="">
                    <input
                      class="form-control"
                      type="search"
                      placeholder="Search..."
                    />
                    <button type="submit" class="search-submit">
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                  </form>
                </div>
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
    </>
  );
};

export default Search;
