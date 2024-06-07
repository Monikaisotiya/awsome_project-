import React, { useEffect, useState } from "react";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import Plisting1 from "../../images/shop-c-1.jpg";
import Plisting2 from "../../images/shop-c-2.jpg";
import Plisting3 from "../../images/shop-c-3.jpg";
import Plisting4 from "../../images/shop-c-4.jpg";
import Plisting5 from "../../images/shop-c-5.jpg";
import Plisting6 from "../../images/shop-c-6.jpg";
import Satnr1 from "../../images/Stunner-c-1.jpg";
import Satnr2 from "../../images/Stunner-c-2.jpg";
import satnr3 from "../../images/Stunner-c-3.jpg";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faChevronDown,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import $ from "jquery";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Shoplisting = () => {
  const [visible, setVisible] = useState(false);

  const [openDropDown, setOpenDropDown] = useState(null);

  const handleDropdownToggle = (id) => {
    if (openDropDown === id) {
      setOpenDropDown(null);
    } else {
      setOpenDropDown(id);
    }
  };

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
      <main id="wrapper">
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-3 sidebar order-2 order-lg-1">
              <div class="categories-block">
                <h4>All Categories</h4>
                <ul class="categories-menu">
                  <li>
                    <a
                      class="title-collapse"
                      data-bs-toggle="collapse"
                      data-bs-target="#categoresmenu1"
                      onClick={() => handleDropdownToggle("categoresmenu1")}
                      aria-expanded={openDropDown === "categoresmenu1"}
                      aria-controls="categoresmenu1"
                    >
                      Puzzle
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        style={{ color: "#black" }}
                      />
                    </a>
                    <ul
                      class="sub-categories collapse"
                      className={`sub-categories collapse ${
                        openDropDown === "categoresmenu1" ? "show" : ""
                      }`}
                      id="categoresmenu1"
                    >
                      <li>
                        <a>Cryptic</a>
                      </li>
                      <li>
                        <a>Logic</a>
                      </li>
                      <li>
                        <a>Arguably</a>
                      </li>
                      <li>
                        <a>Trivia</a>
                      </li>
                      <li>
                        <a>Word</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      className="title-collapse"
                      onClick={() => handleDropdownToggle("categoresmenu2")}
                      aria-expanded={openDropDown === "categoresmenu2"}
                      aria-controls="categoresmenu2"
                    >
                      Teddy
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        style={{ color: "#black" }}
                      />
                    </a>
                    <ul
                      class="sub-categories collapseol"
                      className={`sub-categories collapse ${
                        openDropDown === "categoresmenu2" ? "show" : ""
                      }`}
                      id="categoresmenu2"
                    >
                      <li>
                        <a>Cryptic</a>
                      </li>
                      <li>
                        <a>Trivia</a>
                      </li>
                      <li>
                        <a>Word</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      class="title-collapse"
                      data-bs-toggle="collapse"
                      data-bs-target="#categoresmenu3"
                      aria-expanded={openDropDown === "categoresmenu3"}
                      aria-controls="categoresmenu3"
                      onClick={() => handleDropdownToggle("categoresmenu3")}
                    >
                      Bath
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        style={{ color: "#black" }}
                      />
                    </a>
                    <ul
                      class={`sub-categories collapse${
                        openDropDown === "categoresmenu3" ? "show" : ""
                      }`}
                      id="categoresmenu3"
                    >
                      <li>
                        <a>Cryptic</a>
                      </li>
                      <li>
                        <a>Logic</a>
                      </li>
                      <li>
                        <a>Arguably</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>Trends</a>
                  </li>
                </ul>
              </div>
              <div class="filter d-none d-lg-block">
                <h4>Filter By</h4>
                <a class="btn clear-all">Clear All</a>
                <div class="facet-block border-bottom availability">
                  <span class="inner-title d-block mb-2">Availability</span>
                  <ul class="facet-list">
                    <li>
                      <label class="facet-lable" for="facet_input">
                        <span class="custom-control">
                          <input type="checkbox" />
                          <a>
                            <span class="ct-name">Accessories</span>
                            <span class="cat-count">(11)</span>
                          </a>
                        </span>
                      </label>
                    </li>
                    <li>
                      <label class="facet-lable" for="facet_input">
                        <span class="custom-control">
                          <input type="checkbox" />
                          <a>
                            <span class="ct-name">Out of stock (10)</span>
                            <span class="cat-count">(10)</span>
                          </a>
                        </span>
                      </label>
                    </li>
                  </ul>
                </div>
                <div class="facet-block border-bottom price">
                  <span class="inner-title d-block mb-2">Price</span>
                  <div class="facet-price">
                    <div class="field">
                      <span class="field-currency">$</span>
                      <input
                        class="field-input"
                        type="number"
                        placeholder="From"
                        min="0"
                        max="80.00"
                      />
                    </div>
                    <div class="field">
                      <span class="field-currency">$</span>
                      <input
                        class="field-input"
                        type="number"
                        placeholder="To"
                        min="0"
                        max="80.00"
                      />
                    </div>
                  </div>
                </div>
                <div class="facet-block border-bottom color">
                  <span class="inner-title d-block mb-2">Color</span>
                  <ul class="color-swatch">
                    <li>
                      <label class="facet-lable" for="facet_input">
                        <span class="custom-control">
                          <input class="d-none" type="checkbox" />
                          <span
                            class="filter-color"
                            style={{ backgroundColor: "black" }}
                          ></span>
                        </span>
                      </label>
                    </li>
                    <li>
                      <label class="facet-lable" for="facet_input">
                        <span class="custom-control">
                          <input class="d-none" type="checkbox" />
                          <span
                            class="filter-color"
                            style={{ backgroundColor: "blue" }}
                          ></span>
                        </span>
                      </label>
                    </li>
                    <li>
                      <label class="facet-lable" for="facet_input">
                        <span class="custom-control">
                          <input class="d-none" type="checkbox" />
                          <span
                            class="filter-color"
                            style={{ backgroundColor: "green" }}
                          ></span>
                        </span>
                      </label>
                    </li>
                    <li>
                      <label class="facet-lable" for="facet_input">
                        <span class="custom-control">
                          <input class="d-none" type="checkbox" />
                          <span
                            class="filter-color"
                            style={{ backgroundColor: "pink" }}
                          ></span>
                        </span>
                      </label>
                    </li>
                    <li>
                      <label class="facet-lable" for="facet_input">
                        <span class="custom-control">
                          <input class="d-none" type="checkbox" />
                          <span
                            class="filter-color"
                            style={{ backgroundColor: "red" }}
                          ></span>
                        </span>
                      </label>
                    </li>
                    <li>
                      <label class="facet-lable" for="facet_input">
                        <span class="custom-control">
                          <input class="d-none" type="checkbox" />
                          <span
                            class="filter-color"
                            style={{ backgroundColor: "white" }}
                          ></span>
                        </span>
                      </label>
                    </li>
                  </ul>
                </div>
                <div class="facet-block border-bottom size">
                  <span class="inner-title d-block mb-2">Size</span>
                  <ul class="facet-list">
                    <li>
                      <label class="facet-lable" for="facet_input">
                        <span class="custom-control">
                          <input type="checkbox" />
                          <a>
                            <span class="ct-name">S</span>
                            <span class="cat-count">(4)</span>
                          </a>
                        </span>
                      </label>
                    </li>
                    <li>
                      <label class="facet-lable" for="facet_input">
                        <span class="custom-control">
                          <input type="checkbox" />
                          <a>
                            <span class="ct-name">M</span>
                            <span class="cat-count">(3)</span>
                          </a>
                        </span>
                      </label>
                    </li>
                    <li>
                      <label class="facet-lable" for="facet_input">
                        <span class="custom-control">
                          <input type="checkbox" />
                          <a>
                            <span class="ct-name">S</span>
                            <span class="cat-count">(5)</span>
                          </a>
                        </span>
                      </label>
                    </li>
                    <li>
                      <label class="facet-lable" for="facet_input">
                        <span class="custom-control">
                          <input type="checkbox" />
                          <a>
                            <span class="ct-name">XL</span>
                            <span class="cat-count">(4)</span>
                          </a>
                        </span>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-9 order-1 order-lg-2">
              <section id="Products">
                <div id="product-topbar">
                  <div class="row products-selection align-items-center justify-content-between">
                    <div class="col col-auto filter-toggle d-lg-none">
                      <div class="filter-btn">
                        <a id="search_filter_toggle">
                          <FontAwesomeIcon icon={faSliders} />
                          Filter
                        </a>
                      </div>
                    </div>
                    <div class="col view-switcher">
                      <a class="active">
                        <svg
                          viewBox="0 0 40 40"
                          xmlns="http://www.w3.org/2000/svg"
                          height="30"
                          width="30"
                        >
                          <path d="M9.625 33.333q-1.25 0-2.104-.854-.854-.854-.854-2.104 0-1.208.854-2.063.854-.854 2.104-.854 1.208 0 2.063.854.854.855.854 2.063 0 1.25-.854 2.104-.855.854-2.063.854Zm10.375 0q-1.25 0-2.104-.854-.854-.854-.854-2.104 0-1.208.854-2.063.854-.854 2.104-.854t2.104.854q.854.855.854 2.063 0 1.25-.854 2.104-.854.854-2.104.854Zm10.375 0q-1.208 0-2.063-.854-.854-.854-.854-2.104 0-1.208.854-2.063.855-.854 2.063-.854 1.25 0 2.104.854.854.855.854 2.063 0 1.25-.854 2.104-.854.854-2.104.854ZM9.625 22.958q-1.25 0-2.104-.854-.854-.854-.854-2.104t.854-2.104q.854-.854 2.104-.854 1.208 0 2.063.854.854.854.854 2.104t-.854 2.104q-.855.854-2.063.854Zm10.375 0q-1.25 0-2.104-.854-.854-.854-.854-2.104t.854-2.104q.854-.854 2.104-.854t2.104.854q.854.854.854 2.104t-.854 2.104q-.854.854-2.104.854Zm10.375 0q-1.208 0-2.063-.854-.854-.854-.854-2.104t.854-2.104q.855-.854 2.063-.854 1.25 0 2.104.854.854.854.854 2.104t-.854 2.104q-.854.854-2.104.854ZM9.625 12.542q-1.25 0-2.104-.854-.854-.855-.854-2.063 0-1.25.854-2.104.854-.854 2.104-.854 1.208 0 2.063.854.854.854.854 2.104 0 1.208-.854 2.063-.855.854-2.063.854Zm10.375 0q-1.25 0-2.104-.854-.854-.855-.854-2.063 0-1.25.854-2.104.854-.854 2.104-.854t2.104.854q.854.854.854 2.104 0 1.208-.854 2.063-.854.854-2.104.854Zm10.375 0q-1.208 0-2.063-.854-.854-.855-.854-2.063 0-1.25.854-2.104.855-.854 2.063-.854 1.25 0 2.104.854.854.854.854 2.104 0 1.208-.854 2.063-.854.854-2.104.854Z"></path>
                        </svg>
                      </a>
                      <a>
                        <svg
                          viewBox="0 0 48 48"
                          xmlns="http://www.w3.org/2000/svg"
                          height="30"
                          width="30"
                        >
                          <path d="M8.55 39q-1.05 0-1.8-.725T6 36.55q0-1.05.75-1.8t1.8-.75q1 0 1.725.75.725.75.725 1.8 0 1-.725 1.725Q9.55 39 8.55 39ZM16 38v-3h26v3ZM8.55 26.5q-1.05 0-1.8-.725T6 24q0-1.05.75-1.775.75-.725 1.8-.725 1 0 1.725.75Q11 23 11 24t-.725 1.75q-.725.75-1.725.75Zm7.45-1v-3h26v3ZM8.5 14q-1.05 0-1.775-.725Q6 12.55 6 11.5q0-1.05.725-1.775Q7.45 9 8.5 9q1.05 0 1.775.725Q11 10.45 11 11.5q0 1.05-.725 1.775Q9.55 14 8.5 14Zm7.5-1v-3h26v3Z"></path>
                        </svg>
                      </a>
                    </div>
                    <div class="col box-sort-by">
                      <span class="d-none d-lg-block">Short By</span>
                      <div class="sort-select">
                        <select class="custom-select" id="select-sort-order">
                          <option value="manual" selected>
                            Feauture
                          </option>
                          <option value="best-selling" selected>
                            Best selling
                          </option>
                          <option value="title-ascending" s>
                            Alphabetically, A-Z
                          </option>
                          <option value="title-descending">
                            Alphabetically, Z-A
                          </option>
                          <option value="price-ascending">
                            Price, low to high
                          </option>
                          <option value="price-descending">
                            Price, high to low
                          </option>
                          <option value="created-ascending">
                            Date, old to new
                          </option>
                          <option value="created-descending">
                            Date, new to old
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="product-list">
                  <div class="products row">
                    <article class="product-miniature col-6 col-md-4 col-lg-4 col-xl-4">
                      <div class="product-inner">
                        <div class="thumbnail-container">
                          <div class="thumbnail-inner">
                            <a class="product-thumbnail">
                              <img
                                class="img-fluid"
                                src={Plisting1}
                                alt="product image"
                              />
                            </a>
                            <a class="product-add-to-cart">Add To Cart</a>
                            <a class="wishlist">
                              <span class="material-symbols-outlined">
                                <FavoriteBorderIcon icon={FavoriteBorderIcon} />
                              </span>
                            </a>
                          </div>
                        </div>
                        <div class="product-description">
                          <div class="product-title">
                            <a>Donec Pede Justo</a>
                          </div>
                          <div class="product-price-and-shipping">
                            <span class="price">$25.00</span>
                            <span class="regular-price">$35.00</span>
                          </div>
                          <div class="rating">
                            <i class="star star-on fa-regular fa-star">
                              <StarBorderIcon />
                            </i>
                            <i class="star star-on fa-regular fa-star">
                              <StarBorderIcon />
                            </i>
                            <i class="star star-on fa-regular fa-star">
                              <StarBorderIcon />
                            </i>
                            <i class="star star-on fa-regular fa-star">
                              <StarBorderIcon />
                            </i>
                            <i class="star star-on fa-regular fa-star">
                              <StarBorderIcon />
                            </i>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article class="product-miniature col-6 col-md-4 col-lg-4 col-xl-4">
                      <div class="product-inner">
                        <div class="thumbnail-container">
                          <div class="thumbnail-inner">
                            <a class="product-thumbnail">
                              <img
                                class="img-fluid"
                                src={Plisting2}
                                alt="product image"
                              />
                            </a>
                            <a class="product-add-to-cart">Add To Cart</a>
                            <a class="wishlist">
                              <span class="material-symbols-outlined">
                                <FavoriteBorderIcon icon={FavoriteBorderIcon} />
                              </span>
                            </a>
                          </div>
                        </div>
                        <div class="product-description">
                          <div class="product-title">
                            <a>Donec Pede Justo</a>
                          </div>
                          <div class="product-price-and-shipping">
                            <span class="price">$25.00</span>
                            <span class="regular-price">$35.00</span>
                          </div>
                          <div class="rating">
                            <i class="star star-on fa-regular fa-star">
                              <StarBorderIcon />
                            </i>
                            <i class="star star-on fa-regular fa-star">
                              <StarBorderIcon />
                            </i>
                            <i class="star star-on fa-regular fa-star">
                              <StarBorderIcon />
                            </i>
                            <i class="star star-on fa-regular fa-star">
                              <StarBorderIcon />
                            </i>
                            <i class="star star-on fa-regular fa-star">
                              <StarBorderIcon />
                            </i>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article class="product-miniature col-6 col-md-4 col-lg-4 col-xl-4">
                      <div class="product-inner">
                        <div class="thumbnail-container">
                          <div class="thumbnail-inner">
                            <a class="product-thumbnail">
                              <img
                                class="img-fluid"
                                src={Plisting3}
                                alt="product image"
                              />
                            </a>
                            <a class="product-add-to-cart">Add To Cart</a>
                            <a class="wishlist">
                              <span class="material-symbols-outlined">
                                <FavoriteBorderIcon icon={FavoriteBorderIcon} />
                              </span>
                            </a>
                          </div>
                        </div>
                        <div class="product-description">
                          <div class="product-title">
                            <a>Donec Pede Justo</a>
                          </div>
                          <div class="product-price-and-shipping">
                            <span class="price">$25.00</span>
                            <span class="regular-price">$35.00</span>
                          </div>
                          <div class="rating">
                            <i class="star star-on fa-regular fa-star">
                              <StarBorderIcon />
                            </i>
                            <i class="star star-on fa-regular fa-star">
                              <StarBorderIcon />
                            </i>
                            <i class="star star-on fa-regular fa-star">
                              <StarBorderIcon />
                            </i>
                            <i class="star star-on fa-regular fa-star">
                              <StarBorderIcon />
                            </i>
                            <i class="star star-on fa-regular fa-star">
                              <StarBorderIcon />
                            </i>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article class="product-miniature col-6 col-md-4 col-lg-4 col-xl-4">
                      <div class="product-inner">
                        <div class="thumbnail-container">
                          <div class="thumbnail-inner">
                            <a class="product-thumbnail">
                              <img
                                class="img-fluid"
                                src={Plisting4}
                                alt="product image"
                              />
                            </a>
                            <a class="product-add-to-cart">Add To Cart</a>
                            <a class="wishlist">
                              <span class="material-symbols-outlined">
                                <FavoriteBorderIcon icon={FavoriteBorderIcon} />
                              </span>
                            </a>
                          </div>
                        </div>
                        <div class="product-description">
                          <div class="product-title">
                            <a>Donec Pede Justo</a>
                          </div>
                          <div class="product-price-and-shipping">
                            <span class="price">$25.00</span>
                            <span class="regular-price">$35.00</span>
                          </div>
                          <div class="rating">
                            <i class="star star-on fa-regular fa-star">
                              <StarBorderIcon />
                            </i>
                            <i class="star star-on fa-regular fa-star">
                              <StarBorderIcon />
                            </i>
                            <i class="star star-on fa-regular fa-star">
                              <StarBorderIcon />
                            </i>
                            <i class="star star-on fa-regular fa-star">
                              <StarBorderIcon />
                            </i>
                            <i class="star star-on fa-regular fa-star">
                              <StarBorderIcon />
                            </i>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article class="product-miniature col-6 col-md-4 col-lg-4 col-xl-4">
                      <div class="product-inner">
                        <div class="thumbnail-container">
                          <div class="thumbnail-inner">
                            <a class="product-thumbnail">
                              <img
                                class="img-fluid"
                                src={Plisting5}
                                alt="product image"
                              />
                            </a>
                            <a class="product-add-to-cart">Add To Cart</a>
                            <a class="wishlist">
                              <span class="material-symbols-outlined">
                                <FavoriteBorderIcon icon={FavoriteBorderIcon} />
                              </span>
                            </a>
                          </div>
                        </div>
                        <div class="product-description">
                          <div class="product-title">
                            <a>Donec Pede Justo</a>
                          </div>
                          <div class="product-price-and-shipping">
                            <span class="price">$25.00</span>
                            <span class="regular-price">$35.00</span>
                          </div>
                          <div class="rating">
                            <i class="star star-on fa-regular fa-star">
                              <StarBorderIcon />
                            </i>
                            <i class="star star-on fa-regular fa-star">
                              <StarBorderIcon />
                            </i>
                            <i class="star star-on fa-regular fa-star">
                              <StarBorderIcon />
                            </i>
                            <i class="star star-on fa-regular fa-star">
                              <StarBorderIcon />
                            </i>
                            <i class="star star-on fa-regular fa-star">
                              <StarBorderIcon />
                            </i>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article class="product-miniature col-6 col-md-4 col-lg-4 col-xl-4">
                      <div class="product-inner">
                        <div class="thumbnail-container">
                          <div class="thumbnail-inner">
                            <a class="product-thumbnail">
                              <img
                                class="img-fluid"
                                src={Plisting6}
                                alt="product image"
                              />
                            </a>
                            <a class="product-add-to-cart">Add To Cart</a>
                            <a class="wishlist">
                              <span class="material-symbols-outlined">
                                <FavoriteBorderIcon icon={FavoriteBorderIcon} />
                              </span>
                            </a>
                          </div>
                        </div>
                        <div class="product-description">
                          <div class="product-title">
                            <a>Donec Pede Justo</a>
                          </div>
                          <div class="product-price-and-shipping">
                            <span class="price">$25.00</span>
                            <span class="regular-price">$35.00</span>
                          </div>
                          <div class="rating">
                            <i class="star star-on fa-regular fa-star">
                              <StarBorderIcon />
                            </i>
                            <i class="star star-on fa-regular fa-star">
                              <StarBorderIcon />
                            </i>
                            <i class="star star-on fa-regular fa-star">
                              <StarBorderIcon />
                            </i>
                            <i class="star star-on fa-regular fa-star">
                              <StarBorderIcon />
                            </i>
                            <i class="star star-on fa-regular fa-star">
                              <StarBorderIcon />
                            </i>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article class="product-miniature col-6 col-md-4 col-lg-4 col-xl-4">
                      <div class="product-inner">
                        <div class="thumbnail-container">
                          <div class="thumbnail-inner">
                            <a class="product-thumbnail">
                              <img
                                class="img-fluid"
                                src={Satnr1}
                                alt="product image"
                              />
                            </a>
                            <a class="product-add-to-cart">Add To Cart</a>
                            <a class="wishlist">
                              <span class="material-symbols-outlined">
                                <FavoriteBorderIcon icon={FavoriteBorderIcon} />
                              </span>
                            </a>
                          </div>
                        </div>
                        <div class="product-description">
                          <div class="product-title">
                            <a>Donec Pede Justo</a>
                          </div>
                          <div class="product-price-and-shipping">
                            <span class="price">$25.00</span>
                            <span class="regular-price">$35.00</span>
                          </div>
                          <div class="rating">
                            <i class="star star-on fa-regular fa-star">
                              <StarBorderIcon />
                            </i>
                            <i class="star star-on fa-regular fa-star">
                              <StarBorderIcon />
                            </i>
                            <i class="star star-on fa-regular fa-star">
                              <StarBorderIcon />
                            </i>
                            <i class="star star-on fa-regular fa-star">
                              <StarBorderIcon />
                            </i>
                            <i class="star star-on fa-regular fa-star">
                              <StarBorderIcon />
                            </i>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article class="product-miniature col-6 col-md-4 col-lg-4 col-xl-4">
                      <div class="product-inner">
                        <div class="thumbnail-container">
                          <div class="thumbnail-inner">
                            <a class="product-thumbnail">
                              <img
                                class="img-fluid"
                                src={Satnr2}
                                alt="product image"
                              />
                            </a>
                            <a class="product-add-to-cart">Add To Cart</a>
                            <a class="wishlist">
                              <span class="material-symbols-outlined">
                                <FavoriteBorderIcon icon={FavoriteBorderIcon} />
                              </span>
                            </a>
                          </div>
                        </div>
                        <div class="product-description">
                          <div class="product-title">
                            <a>Donec Pede Justo</a>
                          </div>
                          <div class="product-price-and-shipping">
                            <span class="price">$25.00</span>
                            <span class="regular-price">$35.00</span>
                          </div>
                          <div class="rating">
                            <i class="star star-on fa-regular fa-star">
                              <StarBorderIcon />
                            </i>
                            <i class="star star-on fa-regular fa-star">
                              <StarBorderIcon />
                            </i>
                            <i class="star star-on fa-regular fa-star">
                              <StarBorderIcon />
                            </i>
                            <i class="star star-on fa-regular fa-star">
                              <StarBorderIcon />
                            </i>
                            <i class="star star-on fa-regular fa-star">
                              <StarBorderIcon />
                            </i>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article class="product-miniature col-6 col-md-4 col-lg-4 col-xl-4">
                      <div class="product-inner">
                        <div class="thumbnail-container">
                          <div class="thumbnail-inner">
                            <a class="product-thumbnail">
                              <img
                                class="img-fluid"
                                src={satnr3}
                                alt="product image"
                              />
                            </a>
                            <a class="product-add-to-cart">Add To Cart</a>
                            <a class="wishlist">
                              <span class="material-symbols-outlined">
                                <FavoriteBorderIcon icon={FavoriteBorderIcon} />
                              </span>
                            </a>
                          </div>
                        </div>
                        <div class="product-description">
                          <div class="product-title">
                            <a>Donec Pede Justo</a>
                          </div>
                          <div class="product-price-and-shipping">
                            <span class="price">$25.00</span>
                            <span class="regular-price">$35.00</span>
                          </div>
                          <div class="rating">
                            <i class="star star-on fa-regular fa-star">
                              <StarBorderIcon />
                            </i>
                            <i class="star star-on fa-regular fa-star">
                              <StarBorderIcon />
                            </i>
                            <i class="star star-on fa-regular fa-star">
                              <StarBorderIcon />
                            </i>
                            <i class="star star-on fa-regular fa-star">
                              <StarBorderIcon />
                            </i>
                            <i class="star star-on fa-regular fa-star">
                              <StarBorderIcon />
                            </i>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                  <nav class="pagination">
                    <div class="pagination-bottom">
                      <ul class="page-list justify-content-center">
                        <li class="page current">
                          <a href="javascript:void(0)" class="disabled">
                            1
                          </a>
                        </li>
                        <li class="page ">
                          <a href="javascript:void(0)">2</a>
                        </li>
                        <li class="next">
                          <a href="javascript:void(0)">
                            <FontAwesomeIcon
                              icon={faArrowRightLong}
                              style={{ color: "##4a4a4b" }}
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </section>
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

export default Shoplisting;
