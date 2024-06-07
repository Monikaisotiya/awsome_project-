import React, { useEffect, useState } from "react";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import "../../css/style.css";
import "../../css/media.css";

import Slider1 from "../../../src/images/slider-1.jpg";
import Slider2 from "../../../src/images/slider-2.jpg";
import Slider3 from "../../../src/images/slider-3.jpg";

import shopc1 from "../../../src/images/shop-c-1.jpg";
import shopc2 from "../../../src/images/shop-c-2.jpg";
import shopc3 from "../../../src/images/shop-c-3.jpg";
import shopc4 from "../../../src/images/shop-c-4.jpg";

import Stunner1 from "../../../src/images/Stunner-c-1.jpg";
import Stunner2 from "../../../src/images/Stunner-c-2.jpg";
import Stunner3 from "../../../src/images/Stunner-c-3.jpg";
import Stunner4 from "../../../src/images/Stunner-c-4.jpg";
import Stunner5 from "../../../src/images/Stunner-c-5.jpg";
import Stunner6 from "../../../src/images/Stunner-c-6.jpg";
import Stunner7 from "../../../src/images/Stunner-c-7.jpg";
import Stunner8 from "../../../src/images/Stunner-c-8.jpg";

import Banner1 from "../../../src/images/banner-1.jpg";
import Banner2 from "../../../src/images/banner-2.jpg";
import Banner3 from "../../../src/images/banner-3.jpg";
import Banner4 from "../../../src/images/banner-4.jpg";
import Banner5 from "../../../src/images/banner-5.jpg";
import Banner6 from "../../../src/images/banner-6.jpg";

import Brand1 from "../../../src/images/brand-c-1.jpg";
import Brand2 from "../../../src/images/brand-c-2.jpg";
import Brand3 from "../../../src/images/brand-c-3.jpg";
import Brand4 from "../../../src/images/brand-c-4.jpg";
import Brand5 from "../../../src/images/brand-c-5.jpg";
import Brand6 from "../../../src/images/brand-c-6.jpg";
import Brand7 from "../../../src/images/brand-c-7.jpg";
import Brand8 from "../../../src/images/brand-c-8.jpg";

import Deal1 from "../../../src/images/deal-c-1.jpg";
import Deal2 from "../../../src/images/deal-c-2.jpg";
import Deal3 from "../../../src/images/deal-c-3.jpg";
import Deal4 from "../../../src/images/deal-c-4.jpg";
import Deal5 from "../../../src/images/deal-c-5.jpg";

import BrandL1 from "../../../src/images/brand-logo-1.png";
import BrandL2 from "../../../src/images/brand-logo-2.png";
import BrandL3 from "../../../src/images/brand-logo-3.png";
import BrandL4 from "../../../src/images/brand-logo-4.png";
import BrandL5 from "../../../src/images/brand-logo-5.png";
import BrandL6 from "../../../src/images/brand-logo-6.png";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import $ from "jquery";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Aswhome = () => {
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
  const options = {
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
  const Sbrands = {
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  };
  const Dealslider = {
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  };

  return (
    <>
      <Header />
      <main>
        <section class="slider-section spacer">
          <OwlCarousel
            item={1}
            className="owl-theme"
            loop={true}
            dots={false}
            nav={true}
            margin={0}
            autoplay={true}
            autoplayTimeout={4000}
            autoplayHoverPause={true}
            {...options}
          >
            <div class="item">
              <div class="slider-image">
                <img class="img-fluid" src={Slider1} alt="slider 1" />
                <div class="slider-content">
                  <div class="sub-title">For Little Champ</div>
                  <h1 class="title">Mega sale!</h1>
                  <p class="desc">Extra 15% to 30% off</p>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="slider-image">
                <img class="img-fluid" src={Slider2} alt="slider 2" />
                <div class="slider-content">
                  <div class="sub-title"> Pricess’s Dresses</div>
                  <h1 class="title">Kids Shopping</h1>
                  <p class="desc">Huge offer up to 70% on baby clothes</p>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="slider-image">
                <img class="img-fluid" src={Slider3} alt="slider 3" />
                <div class="slider-content">
                  <div class="sub-title">Special Kids Off</div>
                  <h1 class="title">Big Discount</h1>
                  <p class="desc">Get Up to 30% off On Your First Order</p>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </section>

        <section class="categories-section spacer">
          <div class="container">
            <h2 class="heading-title text-center">
              <span>Shop By Categories</span>
            </h2>
            <div class="categories-inner ">
              <div class="row">
                <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                  <div class="categories-block ">
                    <a href="javascript:void(0)">
                      <img
                        class="img-fluid"
                        src={shopc1}
                        alt="categories img 1"
                      />
                      <div class="categories-name">Infants (0-2 Years)</div>
                    </a>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                  <div class="categories-block">
                    <a href="javascript:void(0)">
                      <img
                        class="img-fluid"
                        src={shopc2}
                        alt="categories img 2"
                      />
                      <div class="categories-name">Toddlers (3-5 Years)</div>
                    </a>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                  <div class="categories-block">
                    <a href="javascript:void(0)">
                      <img
                        class="img-fluid"
                        src={shopc3}
                        alt="categories img 3"
                      />
                      <div class="categories-name">Kids (6-8 Years)</div>
                    </a>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                  <div class="categories-block">
                    <a href="javascript:void(0)">
                      <img
                        class="img-fluid"
                        src={shopc4}
                        alt="categories img 4"
                      />
                      <div class="categories-name">Tweens (9-12 Years)</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="categories-section spacer">
          <div class="container">
            <h2 class="heading-title text-center">
              <span>Stunners For Li'l Buds</span>
            </h2>
            <div class="categories-inner ">
              <div class="row">
                <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                  <div class="categories-block">
                    <a href="javascript:void(0)">
                      <img
                        class="img-fluid"
                        src={Stunner1}
                        alt="categories img 1"
                      />
                      <div class="categories-name">Dress & Frocks</div>
                    </a>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                  <div class="categories-block">
                    <a href="javascript:void(0)">
                      <img
                        class="img-fluid"
                        src={Stunner2}
                        alt="categories img 2"
                      />
                      <div class="categories-name">T-shirt Tops & Shirts</div>
                    </a>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                  <div class="categories-block">
                    <a href="javascript:void(0)">
                      <img
                        class="img-fluid"
                        src={Stunner3}
                        alt="categories img 3"
                      />
                      <div class="categories-name">Ethnicwear</div>
                    </a>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                  <div class="categories-block">
                    <a href="javascript:void(0)">
                      <img
                        class="img-fluid"
                        src={Stunner4}
                        alt="categories img 4"
                      />
                      <div class="categories-name">Kids Footwear</div>
                    </a>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                  <div class="categories-block">
                    <a href="javascript:void(0)">
                      <img
                        class="img-fluid"
                        src={Stunner5}
                        alt="categories img 1"
                      />
                      <div class="categories-name">Innerwear & Sleepwear</div>
                    </a>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                  <div class="categories-block">
                    <a href="javascript:void(0)">
                      <img
                        class="img-fluid"
                        src={Stunner6}
                        alt="categories img 2"
                      />
                      <div class="categories-name">Clothing Sets</div>
                    </a>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                  <div class="categories-block">
                    <a href="javascript:void(0)">
                      <img
                        class="img-fluid"
                        src={Stunner7}
                        alt="categories img 3"
                      />
                      <div class="categories-name">Shorts</div>
                    </a>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                  <div class="categories-block">
                    <a href="javascript:void(0)">
                      <img
                        class="img-fluid"
                        src={Stunner8}
                        alt="categories img 4"
                      />
                      <div class="categories-name">Leggings</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="banner-section spacer">
          <div class="container">
            <div class="row ">
              <div class="col-12 col-sm-6 col-lg-4 mb-4">
                <div class="banner">
                  <div class="banner-img">
                    <img class="img-fluid" src={Banner1} alt="banner 1" />
                  </div>
                  <div class="banner-content">
                    <span>Collections</span>
                    <h2>T-shirts & Shirts</h2>
                    <a href="#" class="custom-btn">
                      SHop Now
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-lg-4 mb-4">
                <div class="banner">
                  <div class="banner-img">
                    <img class="img-fluid" src={Banner2} alt="banner 1" />
                  </div>
                  <div class="banner-content">
                    <span>New Arrivals</span>
                    <h2>Tops & Tunics</h2>
                    <a href="#" class="custom-btn">
                      SHop Now
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-12 col-sm-6 col-lg-4 mb-4">
                <div class="banner">
                  <div class="banner-img">
                    <img class="img-fluid" src={Banner3} alt="banner 1" />
                  </div>
                  <div class="banner-content">
                    <span>Collections</span>
                    <h2>
                      Dresses &<br /> Skirts
                    </h2>
                    <a href="#" class="custom-btn">
                      SHop Now
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-12 col-sm-6 col-lg-4 mb-4">
                <div class="banner">
                  <div class="banner-img">
                    <img class="img-fluid" src={Banner4} alt="banner 1" />
                  </div>
                  <div class="banner-content">
                    <span>Collections</span>
                    <h2>Shorts</h2>
                    <a href="#" class="custom-btn">
                      SHop Now
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-lg-4 mb-4">
                <div class="banner">
                  <div class="banner-img">
                    <img class="img-fluid" src={Banner5} alt="banner 1" />
                  </div>
                  <div class="banner-content">
                    <span>Special</span>
                    <h2>
                      Flip-Flops <br />& Clogs
                    </h2>
                    <a href="#" class="custom-btn">
                      SHop Now
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-lg-4 mb-4">
                <div class="banner">
                  <div class="banner-img">
                    <img class="img-fluid" src={Banner6} alt="banner 1" />
                  </div>
                  <div class="banner-content">
                    <span>Summer Collections</span>
                    <h2>Kids Essential</h2>
                    <a href="#" class="custom-btn">
                      SHop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="categories-section brads-categories spacer">
          <div class="container">
            <h2 class="heading-title text-center">
              <span>Brands to Bag</span>
            </h2>
            <div class="categories-inner">
              <div class="row">
                <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                  <div class="categories-block">
                    <a href="javascript:void(0)">
                      <img
                        class="img-fluid"
                        src={Brand1}
                        alt="categories img 1"
                      />
                      <div class="categories-name">
                        Min <span>40%</span> Off
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                  <div class="categories-block">
                    <a href="javascript:void(0)">
                      <img
                        class="img-fluid"
                        src={Brand2}
                        alt="categories img 2"
                      />
                      <div class="categories-name">
                        Min <span>50%</span> Off
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                  <div class="categories-block">
                    <a href="javascript:void(0)">
                      <img
                        class="img-fluid"
                        src={Brand3}
                        alt="categories img 3"
                      />
                      <div class="categories-name">
                        Min <span>50%</span> Off
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                  <div class="categories-block">
                    <a href="javascript:void(0)">
                      <img
                        class="img-fluid"
                        src={Brand4}
                        alt="categories img 4"
                      />
                      <div class="categories-name">
                        Min <span>60%</span> Off
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                  <div class="categories-block">
                    <a href="javascript:void(0)">
                      <img
                        class="img-fluid"
                        src={Brand5}
                        alt="categories img 1"
                      />
                      <div class="categories-name">
                        <span>30-70%</span> Off
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                  <div class="categories-block">
                    <a href="javascript:void(0)">
                      <img
                        class="img-fluid"
                        src={Brand6}
                        alt="categories img 2"
                      />
                      <div class="categories-name">
                        Min <span>40%</span> Off
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                  <div class="categories-block">
                    <a href="javascript:void(0)">
                      <img
                        class="img-fluid"
                        src={Brand7}
                        alt="categories img 3"
                      />
                      <div class="categories-name">
                        Up to <span>80%</span> Off
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                  <div class="categories-block">
                    <a href="javascript:void(0)">
                      <img
                        class="img-fluid"
                        src={Brand8}
                        alt="categories img 4"
                      />
                      <div class="categories-name">
                        Min <span>50%</span> Off
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="deals-section spacer">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-12 col-md-6">
                <div class="deal-content">
                  <div class="deal-heading">
                    <h2>Spring On These Deals</h2>
                  </div>
                  <div class="price-title">
                    Under <br />
                    <i class="fa-solid fa-indian-rupee-sign"></i> 399*
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <OwlCarousel
                  className="deal-slider owl-carousel owl-theme"
                  itam={2}
                  loop={true}
                  dots={false}
                  nav={true}
                  margin={10}
                  autoplay={true}
                  autoplayTimeout={2000}
                  autoplayHoverPause={true}
                  {...Dealslider}
                >
                  <div class="item">
                    <div class="categories-block">
                      <a href="javascript:void(0)">
                        <img
                          class="img-fluid"
                          src={Deal1}
                          alt="categories img 1"
                        />
                        <div class="categories-name">T-shirt</div>
                      </a>
                    </div>
                  </div>
                  <div class="item">
                    <div class="categories-block">
                      <a href="javascript:void(0)">
                        <img
                          class="img-fluid"
                          src={Deal2}
                          alt="categories img 2"
                        />
                        <div class="categories-name">Treckpants</div>
                      </a>
                    </div>
                  </div>
                  <div class="item">
                    <div class="categories-block">
                      <a href="javascript:void(0)">
                        <img
                          class="img-fluid"
                          src={Deal3}
                          alt="categories img 3"
                        />
                        <div class="categories-name">Laggings</div>
                      </a>
                    </div>
                  </div>
                  <div class="item">
                    <div class="categories-block">
                      <a href="javascript:void(0)">
                        <img
                          class="img-fluid"
                          src={Deal4}
                          alt="categories img 4"
                        />
                        <div class="categories-name">Flip-Flops</div>
                      </a>
                    </div>
                  </div>
                  <div class="item">
                    <div class="categories-block">
                      <a href="javascript:void(0)">
                        <img
                          class="img-fluid"
                          src={Deal5}
                          alt="categories img 4"
                        />
                        <div class="categories-name">Tops</div>
                      </a>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </section>

        <section class="brand-section spacer">
          <div class="container">
            <OwlCarousel
              loop={true}
              className="brand-slider  owl-theme"
              autoplay={true}
              itam={5}
              nav={false}
              dots={true}
              autoplayTimeout={2000}
              autoplayHoverPause={true}
              {...Sbrands}
            >
              <div class="item">
                <div class="brand-image">
                  <a href="javascript:void(0)">
                    <img class="img-fluid" src={BrandL1} alt="brand img 1" />
                  </a>
                </div>
              </div>
              <div class="item">
                <div class="brand-image">
                  <a href="javascript:void(0)">
                    <img class="img-fluid" src={BrandL2} alt="brand img 2" />
                  </a>
                </div>
              </div>
              <div class="item">
                <div class="brand-image">
                  <a href="javascript:void(0)">
                    <img class="img-fluid" src={BrandL3} alt="brand img 3" />
                  </a>
                </div>
              </div>
              <div class="item">
                <div class="brand-image">
                  <a href="javascript:void(0)">
                    <img class="img-fluid" src={BrandL4} alt="brand img 4" />
                  </a>
                </div>
              </div>
              <div class="item">
                <div class="brand-image">
                  <a href="javascript:void(0)">
                    <img class="img-fluid" src={BrandL5} alt="brand img 5" />
                  </a>
                </div>
              </div>
              <div class="item">
                <div class="brand-image">
                  <a href="javascript:void(0)">
                    <img class="img-fluid" src={BrandL6} alt="brand img 6" />
                  </a>
                </div>
              </div>
            </OwlCarousel>
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

export default Aswhome;
