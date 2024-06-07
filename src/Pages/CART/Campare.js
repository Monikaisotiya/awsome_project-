import React, { useEffect, useState } from "react";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import "../../css/style.css";
import "../../css/media.css";
import Shop1 from "../../images/shop-c-1.jpg";
import Shop2 from "../../images/shop-c-2.jpg";
import Shop3 from "../../images/shop-c-3.jpg";
import DeleteIcon from "@mui/icons-material/Delete";

import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";

import $ from "jquery";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Campare = () => {
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

      <main id="wrapper">
        <div class="container">
          <div class="products_block table-responsive">
            <table id="product_comparison" class="table table-bordered">
              <tbody>
                <tr>
                  <td class="td_empty compare_extra_information">
                    <span>Features</span>
                  </td>
                  <td class="product-miniature js-product-miniature product-block">
                    <div class="remove">
                      <a href="javascript:void(0)" title="Remove">
                        <i class="fa-solid fa-trash">
                          <DeleteIcon />
                        </i>
                      </a>
                    </div>
                    <div class="thumbnail-container">
                      <a
                        href="javascript:void(0)"
                        class="thumbnail product-thumbnail"
                      >
                        <img class="img-fluid" src={Shop1} />
                      </a>
                    </div>
                    <div class="product-description">
                      <h3 class="product-title">
                        <a href="javascript:void(0)">Nascetur Ridiculus Mus</a>
                      </h3>
                      <div class="product-price-and-shipping">
                        <span class="price">$149.00</span>
                      </div>
                      <p class="product-desc">
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since...
                      </p>
                      <div class="highlighted-informations no-variants"></div>
                      <div class="product-add-to-cart">
                        <a href="javascript:void(0)" class="btn custom-btn">
                          Select Option
                        </a>
                      </div>
                    </div>
                  </td>
                  <td class="product-miniature js-product-miniature product-block">
                    <div class="remove">
                      <a href="javascript:void(0)" title="Remove">
                        <i class="fa-solid fa-trash">
                          <DeleteIcon />
                        </i>
                      </a>
                    </div>
                    <div class="thumbnail-container">
                      <a
                        href="javascript:void(0)"
                        class="thumbnail product-thumbnail"
                      >
                        <img class="img-fluid" src={Shop2} />
                      </a>
                    </div>
                    <div class="product-description">
                      <h3 class="product-title">
                        <a href="javascript:void(0)">Donec Pede Justo</a>
                      </h3>
                      <div class="product-price-and-shipping">
                        <span class="price">$30.00</span>
                      </div>
                      <p class="product-desc">
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since...
                      </p>
                      <div class="highlighted-informations no-variants"></div>
                      <div class="product-add-to-cart">
                        <button class="btn custom-btn" type="submit">
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </td>
                  <td class="product-miniature js-product-miniature  product-block">
                    <div class="remove">
                      <a href="javascript:void(0)" title="Remove">
                        <i class="fa-solid fa-trash">
                          <DeleteIcon />
                        </i>
                      </a>
                    </div>
                    <div class="thumbnail-container">
                      <a
                        href="javascript:void(0)"
                        class="thumbnail product-thumbnail"
                      >
                        <img class="img-fluid" src={Shop3} />
                      </a>
                    </div>
                    <div class="product-description">
                      <h3 class="product-title">
                        <a href="javascript:void(0)">Praesent Metus Tellus</a>
                      </h3>
                      <div class="product-price-and-shipping">
                        <span class="regular-price">$400.00</span>
                        <span class="discount-percentage">-20%</span>
                        <span class="price">$320.00</span>
                      </div>
                      <p class="product-desc">
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since...
                      </p>
                      <div class="highlighted-informations">
                        <div class="variant-links d-flex">
                          <a
                            href="javascript:void(0)"
                            class="color mx-1 tip_inside"
                            aria-label="Black"
                            style={{ backgroundColor: "#434A54" }}
                          >
                            <span class="tip">Black</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            class="color mx-1 tip_inside"
                            aria-label="Green"
                            style={{ backgroundColor: "#A0D468" }}
                          >
                            <span class="tip">Green</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            class="color mx-1 tip_inside"
                            aria-label="Yellow"
                            style={{ backgroundColor: "#F1C40F" }}
                          >
                            <span class="tip">Yellow</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            class="color mx-1 tip_inside"
                            aria-label="Pink"
                            style={{ backgroundColor: "#FCCACD" }}
                          >
                            <span class="tip">Pink</span>
                          </a>
                        </div>
                      </div>
                      <div class="product-add-to-cart">
                        <a href="javascript:void(0)" class="btn custom-btn">
                          Select Option
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="comparison_feature_odd feature-name">
                    <strong>Composition</strong>
                  </td>
                  <td class="comparison_feature_odd comparison_infos">
                    Matt paper
                  </td>
                  <td class="comparison_feature_odd comparison_infos">
                    Ceramic
                  </td>
                  <td class="comparison_feature_odd comparison_infos">
                    Recycled cardboard
                  </td>
                </tr>
                <tr>
                  <td class="comparison_feature_even feature-name">
                    <strong>Property</strong>
                  </td>
                  <td class="comparison_feature_even comparison_infos"></td>
                  <td class="comparison_feature_even comparison_infos"></td>
                  <td class="comparison_feature_even comparison_infos product-18">
                    120 pages
                  </td>
                </tr>
                <tr class="comparison_header">
                  <td class="feature-name td_empty">
                    <span>Comments</span>
                  </td>
                  <td class=""></td>
                  <td class=""></td>
                  <td class=""></td>
                </tr>
                <tr>
                  <td class=" feature-name">
                    <strong>Quality</strong>
                  </td>
                  <td class="comparison_infos" align="center">
                    <div class="product-rating">
                      <i>
                        <StarIcon style={{ color: "#f39c12" }} />
                      </i>
                      <i>
                        <StarIcon style={{ color: "#f39c12" }} />
                      </i>
                      <i>
                        <StarIcon style={{ color: "#f39c12" }} />
                      </i>
                      <i>
                        <StarIcon style={{ color: "#f39c12" }} />
                      </i>
                      <i>
                        <StarIcon style={{ color: "#f39c12" }} />
                      </i>
                    </div>
                  </td>
                  <td class="comparison_infos" align="center">
                    <div class="product-rating">
                      <i>
                        <StarIcon style={{ color: "#f39c12" }} />
                      </i>
                      <i>
                        <StarIcon style={{ color: "#f39c12" }} />
                      </i>
                      <i>
                        <StarIcon style={{ color: "#f39c12" }} />
                      </i>
                      <i>
                        <StarOutlineIcon style={{ color: "#f39c12" }} />
                      </i>
                      <i>
                        <StarOutlineIcon style={{ color: "#f39c12" }} />
                      </i>
                    </div>
                  </td>
                  <td class="comparison_infos" align="center">
                    <div class="product-rating">
                      <i>
                        <StarIcon style={{ color: "#f39c12" }} />
                      </i>
                      <i>
                        <StarIcon style={{ color: "#f39c12" }} />
                      </i>
                      <i>
                        <StarIcon style={{ color: "#f39c12" }} />
                      </i>
                      <i>
                        <StarOutlineIcon style={{ color: "#f39c12" }} />
                      </i>
                      <i>
                        <StarOutlineIcon style={{ color: "#f39c12" }} />
                      </i>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="comparison_feature_even feature-name">
                    <strong>Average</strong>
                  </td>
                  <td class="comparison_infos" align="center">
                    <div class="product-rating">
                      <i>
                        <StarIcon style={{ color: "#f39c12" }} />
                      </i>
                      <i>
                        <StarIcon style={{ color: "#f39c12" }} />
                      </i>
                      <i>
                        <StarIcon style={{ color: "#f39c12" }} />
                      </i>
                      <i>
                        <StarIcon style={{ color: "#f39c12" }} />
                      </i>
                      <i>
                        <StarIcon style={{ color: "#f39c12" }} />
                      </i>
                    </div>
                  </td>
                  <td class="comparison_infos" align="center">
                    <div class="product-rating">
                      <i>
                        <StarIcon style={{ color: "#f39c12" }} />
                      </i>
                      <i>
                        <StarIcon style={{ color: "#f39c12" }} />
                      </i>
                      <i>
                        <StarIcon style={{ color: "#f39c12" }} />
                      </i>
                      <i>
                        <StarOutlineIcon style={{ color: "#f39c12" }} />
                      </i>
                      <i>
                        <StarOutlineIcon style={{ color: "#f39c12" }} />
                      </i>
                    </div>
                  </td>
                  <td class="comparison_infos" align="center">
                    <div class="product-rating">
                      <i>
                        <StarIcon style={{ color: "#f39c12" }} />
                      </i>
                      <i>
                        <StarIcon style={{ color: "#f39c12" }} />
                      </i>
                      <i>
                        <StarIcon style={{ color: "#f39c12" }} />
                      </i>
                      <i>
                        <StarOutlineIcon style={{ color: "#f39c12" }} />
                      </i>
                      <i>
                        <StarOutlineIcon style={{ color: "#f39c12" }} />
                      </i>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="btn-link">
            <Link to={`/product`} class="btn btn-secondary custom-btn">
              Proceed to checkout
            </Link>
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

export default Campare;
