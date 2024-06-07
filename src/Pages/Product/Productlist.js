import React, { useRef, useState, useEffect } from "react";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import "../../css/style.css";
import "../../css/media.css";
import Prd1 from "../../images/product1.jpg";
import Prd2 from "../../images/product2.jpg";
import Prd3 from "../../images/product3.jpg";
import Prd4 from "../../images/product4.jpg";
import Prd5 from "../../images/product5.jpg";
import Prd6 from "../../images/product6.jpg";
import Pymt from "../../images/payment-logo.png";

import shopa from "../../images/shop-c-1.jpg";
import shopb from "../../images/shop-c-2.jpg";
import shopc from "../../images/shop-c-3.jpg";
import shopd from "../../images/shop-c-4.jpg";
import shope from "../../images/shop-c-5.jpg";
import shopf from "../../images/shop-c-6.jpg";

import sntr1 from "../../../src/images/Stunner-c-1.jpg";
import sntr2 from "../../../src/images/Stunner-c-2.jpg";
import sntr3 from "../../../src/images/Stunner-c-3.jpg";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faHeart,
  faLock,
  faPencil,
  faRightLeft,
  faShuffle,
  faStar,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import PinterestIcon from "@mui/icons-material/Pinterest";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ReactImageMagnify from "react-image-magnify";

import $ from "jquery";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
const imagesowl = [
  {
    img: Prd1,
  },
  {
    img: Prd2,
  },
  {
    img: Prd3,
  },
  {
    img: Prd4,
  },
  {
    img: Prd5,
  },
];
const Productlist = () => {
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

  const [count, setCounter] = useState(0);
  const IncreementCount = () => {
    if (count > 0) {
      setCounter(count - 1);
    }
  };
  const DecreementCount = () => {
    setCounter(count + 1);
  };

  const handelchange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 1) {
      setCounter(value);
    }
  };

  const [img, setImg] = useState(imagesowl);

  const refs = useRef([]);
  const hoverHandler = (image, i) => {
    setImg(image.file);

    setTimeout(() => {
      // refs.current[i].classNameList.add('active');
    }, 1000);

    for (let j = 0; j < imagesowl.length; j++) {
      if (i !== j) {
        // refs.current[j].classNameList.remove('active');
      }
    }
  };
  refs.current = [];
  const addRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  const optionsthumb = {
    responsive: {
      0: {
        items: 3,
        margin: 15,
        nav: true,
      },
      400: {
        items: 3,
        margin: 15,
        nav: false,
      },
      1000: {
        items: 4,
      },
    },
  };

  const sectionnn = {
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      400: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  };
  const moresec = {
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      400: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  };

  return (
    <div>
      <Header />

      <main id="wrapper" className="product">
        <div className="container">
          <div className="main-product-details">
            <div className="row product-container">
              <div className="product-image col-12 col-md-6">
                <div className="image-container">
                  <div className="product-cover">
                    <div className="zoom">
                      <img
                        className="img-fluid"
                        src={Prd1}
                        alt="product img 1"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="product-thumbs-outer">
                      <OwlCarousel
                        items={5}
                        className=" productdetailzoom "
                        loop={true}
                        dots={false}
                        // nav={true}
                        margin={20}
                        autoplay={true}
                        autoplayTimeout={1000}
                        autoplayHoverPause={true}
                        {...optionsthumb}
                      >
                        {imagesowl.map((image, i) => (
                          <div
                            className={i == 0 ? "img_wrap active" : "img_wrap"}
                            key={i}
                            onClick={() => hoverHandler(image, i)}
                            ref={addRefs}
                          >
                            <img src={image.img} alt="" />
                          </div>
                        ))}
                      </OwlCarousel>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-content col-12 col-md-6">
                <h1 className="product-title-block">Omnis dicam mentitum</h1>
                <div className="product-information">
                  <div className="product-description">
                    <p>
                      Faded short sleeves t-shirt with high neckline. Soft and
                      stretchy material for a comfortable fit. Accessorize with
                      a straw hat and you're ready for summer!Faded short
                      sleeves t-shirt with high neckline
                    </p>
                  </div>
                  <div className="product-comments">
                    <div className="product-comments-additional-info">
                      <a href="#" className="comment-btn">
                        <FontAwesomeIcon icon={faPencil} /> Write your review
                      </a>
                    </div>
                  </div>
                  <div className="product-action">
                    <div className="product-variants">
                      <div className="product-variants-item">
                        <span className="control-label">Dimension </span>
                        <select
                          name="dimension"
                          id="dimension"
                          className="custom-select"
                        >
                          <option value="19">40x60cm</option>
                          <option value="19">60x90cm</option>
                          <option value="19">80x120cm</option>
                        </select>
                      </div>
                    </div>
                    <div className="product-price">
                      <div className="currunt-price">
                        <span className="currunt-price-value">$29.00</span>
                      </div>
                    </div>
                    <div className="product-add-to-cart">
                      <span className="control-label">Quanitity</span>
                      <div className="product-quantity ">
                        <div className="qty">
                          <div className="input-group bootstrap-touchpin bootstrap-touchspin">
                            <span className="input-group-btn input-group-prepend bootstrap-touchspin-injected">
                              <button
                                className="btn btn-primary bootstrap-touchspin-down"
                                type="button"
                                onClick={IncreementCount}
                              >
                                -
                              </button>
                            </span>
                            <input
                              id="quantity-wanted"
                              type="text"
                              value={count}
                              onChange={handelchange}
                              // inputmode="numeric"
                              name="qty"
                              pattern="[0-9]"
                              min="1"
                              className="form-control"
                            />
                            <span className="input-group-btn input-group-append bootstrap-touchspin-injected">
                              <button
                                className="btn btn-primary bootstrap-touchspin-up"
                                type="button"
                                onClick={DecreementCount}
                              >
                                +
                              </button>
                            </span>
                          </div>
                        </div>
                        <div className="add">
                          <button
                            className="btn add-to-cart-btn"
                            type="submit"
                            data-button-action="add-to-cart"
                          >
                            Add To Cart
                          </button>
                        </div>
                      </div>
                      <div className="product-btn-block">
                        <div className="wishlist">
                          <a href="/Wishlist" className="wishlist-button">
                            <i className="fa-brands fa-pinterest-p">
                              <FavoriteBorderIcon />
                            </i>
                            <span>Add to Wishlist</span>
                          </a>
                        </div>
                        <div className="compare">
                          <a href="/Campare" className="compare-button">
                            <FontAwesomeIcon icon={faShuffle} />
                            <span>Add to Compare</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="product-payment-logo">
                      <span className="control-label">Payment</span>
                      <img
                        className="img-fluid"
                        src={Pymt}
                        alt="payment logo"
                      />
                    </div>
                    <div className="product-additional-info">
                      <div className="social-sharing">
                        <span className="control-label">Share</span>
                        <ul className="overright">
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-twitter">
                                <FacebookIcon />
                              </i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-twitter">
                                <TwitterIcon />
                              </i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-pinterest-p">
                                <PinterestIcon />
                              </i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="blockreassurance-product">
                    <div className="list-group">
                      <span className="item-product">
                        <FontAwesomeIcon icon={faLock} />
                      </span>
                      <span className="block-title">
                        Security policy (edit with the Customer Reassurance
                        module)
                      </span>
                    </div>
                    <div className="list-group">
                      <span className="item-product">
                        <FontAwesomeIcon icon={faTruck} />
                      </span>
                      <span className="block-title">
                        Delivery Policy (Edit With Customer Reassurance Module)
                      </span>
                    </div>
                    <div className="list-group">
                      <span className="item-product">
                        <FontAwesomeIcon icon={faRightLeft} />
                      </span>
                      <span className="block-title">
                        Return Policy (Edit With Customer Reassurance Module)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="review-section">
                  <form id="review-form" action="index.html" method="post">
                    <h2 className="review-title">Write Your Review</h2>
                    <div id="rating">
                      <i
                        className="fa-brands fa-pinterest-p"
                        style={{ fill: "#f39c12" }}
                      >
                        <StarBorderIcon />
                      </i>
                      <i
                        className="fa-brands fa-pinterest-p"
                        style={{ fill: "#f39c12" }}
                      >
                        <StarBorderIcon />
                      </i>
                      <i className="fa-brands fa-pinterest-p">
                        <StarBorderIcon />
                      </i>
                      <i className="fa-brands fa-pinterest-p">
                        <StarBorderIcon />
                      </i>
                      <i className="fa-brands fa-pinterest-p">
                        <StarBorderIcon />
                      </i>
                    </div>
                    <div className="form-group review-name">
                      <label className="control-label" htmlFor="name">
                        Name:
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Name"
                        name="name"
                        id="name"
                        value=""
                      />
                    </div>
                    <div className="form-group review-email">
                      <label className="control-label" htmlFor="email">
                        Email:
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Email"
                        name="email"
                        id="email"
                        value=""
                      />
                    </div>
                    <div className="form-group">
                      <label className="control-label" htmlFor="review">
                        Your Review:
                      </label>
                      <textarea
                        className="form-control"
                        // rows="10"
                        placeholder="Your Reivew"
                        name="review"
                        id="review"
                      ></textarea>
                    </div>
                    <a
                      href="#"
                      id="submit"
                      type="submit"
                      className="btn custom-btn"
                    >
                      Submit
                    </a>
                  </form>
                </div>
              </div>
            </div>
            <div className="row spacer">
              <div className="col-12">
                <div className="more-categories-section">
                  <h2 className="heading-title text-center">
                    <span>Shop More Dresses & Frocks</span>
                  </h2>
                  <div className="row more-categories justify-content-center">
                    <div className="col-12 col-md-6 col-lg-3">
                      <a href="javascript:void(0)" className="more-cat-inner">
                        All Dresses & Frocks{" "}
                        <FontAwesomeIcon icon={faChevronRight} />
                      </a>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <a href="javascript:void(0)" className="more-cat-inner">
                        Style : Skater <FontAwesomeIcon icon={faChevronRight} />
                      </a>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <a href="javascript:void(0)" className="more-cat-inner">
                        Brand : KG FRENDZ
                        <FontAwesomeIcon icon={faChevronRight} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="similar-section spacer">
              <h2 className="heading-title text-center">
                <span>Similar Styles</span>
              </h2>
              <div className="product-similar-slider owl-theme products">
                <OwlCarousel
                  item={4}
                  className=" owl-theme products"
                  loop={true}
                  dots={false}
                  nav={true}
                  margin={0}
                  autoplay={true}
                  autoplayTimeout={4000}
                  autoplayHoverPause={true}
                  {...moresec}
                >
                  <div className="item">
                    <article className="product-miniature ">
                      <div className="product-inner">
                        <div className="thumbnail-container">
                          <div className="thumbnail-inner">
                            <a href="#" className="product-thumbnail">
                              <img
                                className="img-fluid"
                                src={shopa}
                                alt="product image"
                              />
                            </a>
                            <a href="#" className="product-add-to-cart">
                              Add To Cart
                            </a>
                            <a className="wishlist" href="#">
                              <span className="material-symbols-outlined">
                                <i className="fa-brands fa-pinterest-p">
                                  <FavoriteBorderIcon />
                                </i>
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className="product-description">
                          <div className="product-title">
                            <a href="#">Donec Pede Justo</a>
                          </div>
                          <div className="product-price-and-shipping">
                            <span className="price">$25.00</span>
                            <span className="regular-price">$35.00</span>
                          </div>
                          <div className="rating ">
                            <i
                              className="fa-brands fa-pinterest-p"
                              style={{ fill: "#f39c12" }}
                            >
                              <StarBorderIcon />
                            </i>
                            <i
                              className="fa-brands fa-pinterest-p"
                              style={{ fill: "#f39c12" }}
                            >
                              <StarBorderIcon />
                            </i>
                            <i className="fa-brands fa-pinterest-p">
                              <StarBorderIcon />
                            </i>
                            <i className="fa-brands fa-pinterest-p">
                              <StarBorderIcon />
                            </i>
                            <i className="fa-brands fa-pinterest-p">
                              <StarBorderIcon />
                            </i>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="item">
                    <article className="product-miniature ">
                      <div className="product-inner">
                        <div className="thumbnail-container">
                          <div className="thumbnail-inner">
                            <a href="#" className="product-thumbnail">
                              <img
                                className="img-fluid"
                                src={shopb}
                                alt="product image"
                              />
                            </a>
                            <a href="#" className="product-add-to-cart">
                              Add To Cart
                            </a>
                            <a className="wishlist" href="#">
                              <span className="material-symbols-outlined">
                                <i className="fa-brands fa-pinterest-p">
                                  <FavoriteBorderIcon />
                                </i>
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className="product-description">
                          <div className="product-title">
                            <a href="#">Donec Pede Justo</a>
                          </div>
                          <div className="product-price-and-shipping">
                            <span className="price">$25.00</span>
                            <span className="regular-price">$35.00</span>
                          </div>
                          <div className="rating">
                            <i
                              className="fa-brands fa-pinterest-p"
                              style={{ fill: "#f39c12" }}
                            >
                              <StarBorderIcon />
                            </i>
                            <i
                              className="fa-brands fa-pinterest-p"
                              style={{ fill: "#f39c12" }}
                            >
                              <StarBorderIcon />
                            </i>
                            <i className="fa-brands fa-pinterest-p">
                              <StarBorderIcon />
                            </i>
                            <i className="fa-brands fa-pinterest-p">
                              <StarBorderIcon />
                            </i>
                            <i className="fa-brands fa-pinterest-p">
                              <StarBorderIcon />
                            </i>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="item">
                    <article className=" product-miniature ">
                      <div className="product-inner">
                        <div className="thumbnail-container">
                          <div className="thumbnail-inner">
                            <a href="#" className="product-thumbnail">
                              <img
                                className="img-fluid"
                                src={shopc}
                                alt="product image"
                              />
                            </a>
                            <a href="#" className="product-add-to-cart">
                              Add To Cart
                            </a>
                            <a className="wishlist" href="#">
                              <span className="material-symbols-outlined">
                                <i className="fa-brands fa-pinterest-p">
                                  <FavoriteBorderIcon />
                                </i>
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className="product-description">
                          <div className="product-title">
                            <a href="#">Donec Pede Justo</a>
                          </div>
                          <div className="product-price-and-shipping">
                            <span className="price">$25.00</span>
                            <span className="regular-price">$35.00</span>
                          </div>
                          <div className="rating">
                            <i
                              className="fa-brands fa-pinterest-p"
                              style={{ fill: "#f39c12" }}
                            >
                              <StarBorderIcon />
                            </i>
                            <i
                              className="fa-brands fa-pinterest-p"
                              style={{ fill: "#f39c12" }}
                            >
                              <StarBorderIcon />
                            </i>
                            <i className="fa-brands fa-pinterest-p">
                              <StarBorderIcon />
                            </i>
                            <i className="fa-brands fa-pinterest-p">
                              <StarBorderIcon />
                            </i>
                            <i className="fa-brands fa-pinterest-p">
                              <StarBorderIcon />
                            </i>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="item">
                    <article className=" product-miniature ">
                      <div className="product-inner">
                        <div className="thumbnail-container">
                          <div className="thumbnail-inner">
                            <a href="#" className="product-thumbnail">
                              <img
                                className="img-fluid"
                                src={shopd}
                                alt="product image"
                              />
                            </a>
                            <a href="#" className="product-add-to-cart">
                              Add To Cart
                            </a>
                            <a className="wishlist" href="#">
                              <span className="material-symbols-outlined">
                                <i className="fa-brands fa-pinterest-p">
                                  <FavoriteBorderIcon />
                                </i>
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className="product-description">
                          <div className="product-title">
                            <a href="#">Donec Pede Justo</a>
                          </div>
                          <div className="product-price-and-shipping">
                            <span className="price">$25.00</span>
                            <span className="regular-price">$35.00</span>
                          </div>
                          <div className="rating">
                            <i
                              className="fa-brands fa-pinterest-p"
                              style={{ fill: "#f39c12" }}
                            >
                              <StarBorderIcon />
                            </i>
                            <i
                              className="fa-brands fa-pinterest-p"
                              style={{ fill: "#f39c12" }}
                            >
                              <StarBorderIcon />
                            </i>
                            <i className="fa-brands fa-pinterest-p">
                              <StarBorderIcon />
                            </i>
                            <i className="fa-brands fa-pinterest-p">
                              <StarBorderIcon />
                            </i>
                            <i className="fa-brands fa-pinterest-p">
                              <StarBorderIcon />
                            </i>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="item">
                    <article className=" product-miniature ">
                      <div className="product-inner">
                        <div className="thumbnail-container">
                          <div className="thumbnail-inner">
                            <a href="#" className="product-thumbnail">
                              <img
                                className="img-fluid"
                                src={shope}
                                alt="product image"
                              />
                            </a>
                            <a href="#" className="product-add-to-cart">
                              Add To Cart
                            </a>
                            <a className="wishlist" href="#">
                              <span className="material-symbols-outlined">
                                <i className="fa-brands fa-pinterest-p">
                                  <FavoriteBorderIcon />
                                </i>
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className="product-description">
                          <div className="product-title">
                            <a href="#">Donec Pede Justo</a>
                          </div>
                          <div className="product-price-and-shipping">
                            <span className="price">$25.00</span>
                            <span className="regular-price">$35.00</span>
                          </div>
                          <div className="rating">
                            <i
                              className="fa-brands fa-pinterest-p"
                              style={{ fill: "#f39c12" }}
                            >
                              <StarBorderIcon />
                            </i>
                            <i
                              className="fa-brands fa-pinterest-p"
                              style={{ fill: "#f39c12" }}
                            >
                              <StarBorderIcon />
                            </i>
                            <i className="fa-brands fa-pinterest-p">
                              <StarBorderIcon />
                            </i>
                            <i className="fa-brands fa-pinterest-p">
                              <StarBorderIcon />
                            </i>
                            <i className="fa-brands fa-pinterest-p">
                              <StarBorderIcon />
                            </i>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </OwlCarousel>
              </div>
            </div>
            <div className="recent-section spacer">
              <h2 className="heading-title text-center">
                <span>Recently Viewed</span>
              </h2>
              <div className="product-recent-slider  owl-theme products">
                <OwlCarousel
                  item={4}
                  className=" owl-theme products"
                  loop={true}
                  dots={false}
                  nav={true}
                  margin={0}
                  autoplay={true}
                  autoplayTimeout={4000}
                  autoplayHoverPause={true}
                  {...sectionnn}
                >
                  <div className="item">
                    <article className="product-miniature ">
                      <div className="product-inner">
                        <div className="thumbnail-container">
                          <div className="thumbnail-inner">
                            <a href="#" className="product-thumbnail">
                              <img
                                className="img-fluid"
                                src={shopf}
                                alt="product image"
                              />
                            </a>
                            <a href="#" className="product-add-to-cart">
                              Add To Cart
                            </a>
                            <a className="wishlist" href="#">
                              <span className="material-symbols-outlined">
                                <i className="fa-brands fa-pinterest-p">
                                  <FavoriteBorderIcon />
                                </i>
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className="product-description">
                          <div className="product-title">
                            <a href="#">Donec Pede Justo</a>
                          </div>
                          <div className="product-price-and-shipping">
                            <span className="price">$25.00</span>
                            <span className="regular-price">$35.00</span>
                          </div>
                          <div className="rating ">
                            <i
                              className="fa-brands fa-pinterest-p"
                              style={{ fill: "#f39c12" }}
                            >
                              <StarBorderIcon />
                            </i>
                            <i
                              className="fa-brands fa-pinterest-p"
                              style={{ fill: "#f39c12" }}
                            >
                              <StarBorderIcon />
                            </i>
                            <i className="fa-brands fa-pinterest-p">
                              <StarBorderIcon />
                            </i>
                            <i className="fa-brands fa-pinterest-p">
                              <StarBorderIcon />
                            </i>
                            <i className="fa-brands fa-pinterest-p">
                              <StarBorderIcon />
                            </i>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="item">
                    <article className="product-miniature ">
                      <div className="product-inner">
                        <div className="thumbnail-container">
                          <div className="thumbnail-inner">
                            <a href="#" className="product-thumbnail">
                              <img
                                className="img-fluid"
                                src={sntr1}
                                alt="product image"
                              />
                            </a>
                            <a href="#" className="product-add-to-cart">
                              Add To Cart
                            </a>
                            <a className="wishlist" href="#">
                              <span className="material-symbols-outlined">
                                <i className="fa-brands fa-pinterest-p">
                                  <FavoriteBorderIcon />
                                </i>
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className="product-description">
                          <div className="product-title">
                            <a href="#">Donec Pede Justo</a>
                          </div>
                          <div className="product-price-and-shipping">
                            <span className="price">$25.00</span>
                            <span className="regular-price">$35.00</span>
                          </div>
                          <div className="rating">
                            <i
                              className="fa-brands fa-pinterest-p"
                              style={{ fill: "#f39c12" }}
                            >
                              <StarBorderIcon />
                            </i>
                            <i
                              className="fa-brands fa-pinterest-p"
                              style={{ fill: "#f39c12" }}
                            >
                              <StarBorderIcon />
                            </i>
                            <i className="fa-brands fa-pinterest-p">
                              <StarBorderIcon />
                            </i>
                            <i className="fa-brands fa-pinterest-p">
                              <StarBorderIcon />
                            </i>
                            <i className="fa-brands fa-pinterest-p">
                              <StarBorderIcon />
                            </i>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="item">
                    <article className="product-miniature ">
                      <div className="product-inner">
                        <div className="thumbnail-container">
                          <div className="thumbnail-inner">
                            <a href="#" className="product-thumbnail">
                              <img
                                className="img-fluid"
                                src={sntr2}
                                alt="product image"
                              />
                            </a>
                            <a href="#" className="product-add-to-cart">
                              Add To Cart
                            </a>
                            <a className="wishlist" href="#">
                              <span className="material-symbols-outlined">
                                <i className="fa-brands fa-pinterest-p">
                                  <FavoriteBorderIcon />
                                </i>
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className="product-description">
                          <div className="product-title">
                            <a href="#">Donec Pede Justo</a>
                          </div>
                          <div className="product-price-and-shipping">
                            <span className="price">$25.00</span>
                            <span className="regular-price">$35.00</span>
                          </div>
                          <div className="rating">
                            <i
                              className="fa-brands fa-pinterest-p"
                              style={{ fill: "#f39c12" }}
                            >
                              <StarBorderIcon />
                            </i>
                            <i
                              className="fa-brands fa-pinterest-p"
                              style={{ fill: "#f39c12" }}
                            >
                              <StarBorderIcon />
                            </i>
                            <i className="fa-brands fa-pinterest-p">
                              <StarBorderIcon />
                            </i>
                            <i className="fa-brands fa-pinterest-p">
                              <StarBorderIcon />
                            </i>
                            <i className="fa-brands fa-pinterest-p">
                              <StarBorderIcon />
                            </i>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="item">
                    <article className="product-miniature">
                      <div className="product-inner">
                        <div className="thumbnail-container">
                          <div className="thumbnail-inner">
                            <a href="#" className="product-thumbnail">
                              <img
                                className="img-fluid"
                                src={sntr3}
                                alt="product image"
                              />
                            </a>
                            <a href="#" className="product-add-to-cart">
                              Add To Cart
                            </a>
                            <a className="wishlist" href="#">
                              <span className="material-symbols-outlined">
                                <i className="fa-brands fa-pinterest-p">
                                  <FavoriteBorderIcon />
                                </i>
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className="product-description">
                          <div className="product-title">
                            <a href="#">Donec Pede Justo</a>
                          </div>
                          <div className="product-price-and-shipping">
                            <span className="price">$25.00</span>
                            <span className="regular-price">$35.00</span>
                          </div>
                          <div className="rating">
                            <i
                              className="fa-brands fa-pinterest-p"
                              style={{ fill: "#f39c12" }}
                            >
                              <StarBorderIcon />
                            </i>
                            <i
                              className="fa-brands fa-pinterest-p"
                              style={{ fill: "#f39c12" }}
                            >
                              <StarBorderIcon />
                            </i>
                            <i className="fa-brands fa-pinterest-p">
                              <StarBorderIcon />
                            </i>
                            <i className="fa-brands fa-pinterest-p">
                              <StarBorderIcon />
                            </i>
                            <i className="fa-brands fa-pinterest-p">
                              <StarBorderIcon />
                            </i>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </OwlCarousel>
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
        <FontAwesomeIcon icon={faChevronUp} />
      </a>
    </div>
  );
};

export default Productlist;
