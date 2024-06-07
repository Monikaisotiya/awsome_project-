import React, { useState, useEffect } from "react";
import "../../css/style.css";
import "../../css/media.css";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import Background1 from "../../images/about-img-1.jpg";
import Background2 from "../../images/about-img-2.jpg";
import Logo1 from "../../images/brand-logo-1.png";
import Logo2 from "../../images/brand-logo-2.png";
import Logo3 from "../../images/brand-logo-3.png";
import Logo4 from "../../images/brand-logo-4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faPenNib,
  faPlaneDeparture,
} from "@fortawesome/free-solid-svg-icons";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import $ from "jquery";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Aboutus = () => {
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

  const morethen = {
    responsive: {
      0: {
        items: 1,
        margin: 15,
      },
      600: {
        items: 2,
        margin: 15,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <div className="about">
      <Header />

      <main id="wrapper" class="mt-md-4">
        <section class="about-intro-section spacer">
          <div class="container">
            <div class="row about-intro align-items-center">
              <div class="  col-12 col-md-6 intro-image">
                <img
                  class="img-fluid "
                  style={{ borderRadius: "20px" }}
                  src={Background1}
                  alt="about image 1"
                />
              </div>
              <div class="col-12 col-md-6 intro-details">
                <div class="intro-inner">
                  <h3 class="main-title">Our Story</h3>
                  <div class="sub-title">The High Stress Favourite</div>
                  <p class="desc">
                    IThere are multiple patents for technologies in this area.
                    Initial designs called for a complex spring and valve system
                    that was impossible to clean and sterilize.
                  </p>
                  <p class="desc">
                    In dui magna, posuere eget, vestibulum et, tempor auctor,
                    justo. Vivamus consectetuer hendrerit lacus. In hac
                    habitasse platea dictumst. Ut tincidunt tincidunt erat.
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
            <div class="row about-intro align-items-center">
              <div class="col-12 col-md-6 intro-image order-md-2">
                <img
                  class="img-fluid"
                  style={{ borderRadius: "20px" }}
                  src={Background2}
                  alt="about image 1"
                />
              </div>
              <div class="col-12 col-md-6 intro-details">
                <div class="intro-inner">
                  <h3 class="main-title">Who We Are ?</h3>
                  <div class="sub-title">The High Stress Favourite</div>
                  <p class="desc">
                    Babysitting can be a paid job for all ages; however, it is
                    best known as a temporary activity for young teenagers who
                    are too young to be eligible for employment
                  </p>
                  <p class="desc">
                    In dui magna, posuere eget, vestibulum et, tempor auctor,
                    justo. Vivamus consectetuer hendrerit lacus. In hac
                    habitasse platea dictumst. Ut tincidunt tincidunt erat.
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="about-service-section spacer">
          <div className="container">
            <div class="about-service">
              <OwlCarousel
                item={3}
                className="about-service-slider owl-theme"
                loop={false}
                dots={false}
                nav={false}
                margin={20}
                autoplay={true}
                autoplayTimeout={4000}
                autoplayHoverPause={true}
                {...morethen}
              >
                <div class="item">
                  <div class="about-servicebox">
                    <div class="icon">
                      <FontAwesomeIcon
                        icon={faPenNib}
                        style={{ color: "#f1f4f8" }}
                      />
                    </div>
                    <div class="about-service-title">Design</div>
                    <p class="contant">
                      Praesent metus tellus, elementum eu, semper Vestibulum
                      volutpat pretium libero
                    </p>
                  </div>
                </div>
                <div class="item">
                  <div class="about-servicebox">
                    <div class="icon">
                      <FontAwesomeIcon
                        icon={faLightbulb}
                        style={{ color: "#f0f2f4" }}
                      />
                    </div>
                    <div class="about-service-title">Inovation</div>
                    <p class="contant">
                      Praesent metus tellus, elementum eu, semper Vestibulum
                      volutpat pretium libero
                    </p>
                  </div>
                </div>
                <div class="item">
                  <div class="about-servicebox">
                    <div class="icon">
                      <FontAwesomeIcon
                        icon={faPlaneDeparture}
                        style={{ color: "#f4f5f5" }}
                      />
                    </div>
                    <div class="about-service-title">Journey</div>
                    <p class="contant">
                      Praesent metus tellus, elementum eu, semper Vestibulum
                      volutpat pretium libero
                    </p>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </section>

        <section class="brand-available-section spacer">
          <div class="container">
            <h2 class="heading-title text-center">
              <span>The Brands Available</span>
            </h2>
            <div class="sub-heading">Kinder Land Kids Fashion Store</div>
            <div class="row brand-available">
              <div class="brand-box col-12 col-md-6 col-lg-3">
                <div class="brand-box-inner">
                  <a href="javascript:void(0)">
                    <img class="img-fluid" src={Logo1} alt="" />
                  </a>
                </div>
              </div>
              <div class="brand-box col-12 col-md-6 col-lg-3">
                <div class="brand-box-inner">
                  <a href="javascript:void(0)">
                    <img class="img-fluid" src={Logo2} alt="" />
                  </a>
                </div>
              </div>
              <div class="brand-box col-12 col-md-6 col-lg-3">
                <div class="brand-box-inner">
                  <a href="javascript:void(0)">
                    <img class="img-fluid" src={Logo3} alt="" />
                  </a>
                </div>
              </div>
              <div class="brand-box col-12 col-md-6 col-lg-3">
                <div class="brand-box-inner">
                  <a href="javascript:void(0)">
                    <img class="img-fluid" src={Logo4} alt="" />
                  </a>
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
    </div>
  );
};

export default Aboutus;
