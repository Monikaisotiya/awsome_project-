import React from "react";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import "../../css/style.css";
import "../../css/media.css";
import card1 from "../../images/cart-img-1.jpg";
import card2 from "../../images/cart-img-2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Wishlist_header = () => {
  return (
    <>
      <Header />

      <main id="wrapper" class=" mt-md-4">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="wishlist-table wishlist-table-responsive">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <td class="text-center">image</td>
                      <td class="text-start">Product Name</td>
                      <td class="text-center">Unit Price</td>
                      <td class="text-center">Purchase</td>
                      <td class="text-center">Remove</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="text-center">
                        <a href="#">
                          <img class="img-thumbnail" src={card1} alt="" />
                        </a>
                      </td>
                      <td class="text-start ">
                        <a class="product-name" href="#">
                          Garlic quisquam
                        </a>
                      </td>
                      <td class="text-center product-price">$122.00</td>
                      <td class="text-center product-btn">
                        <a href="javascript:void(0)" class="custom-btn">
                          View Product
                        </a>
                      </td>
                      <td class="text-center product-remove">
                        <a href="#">
                          <FontAwesomeIcon icon={faXmark} />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td class="text-center">
                        <a href="#">
                          <img class="img-thumbnail" src={card2} alt="" />
                        </a>
                      </td>
                      <td class="text-start">
                        <a class="product-name" href="#">
                          Vel Neque Posuere
                        </a>
                        <br />
                      </td>
                      <td class="text-center product-price">$75.00</td>
                      <td class="text-center product-btn">
                        <a href="javascript:void(0)" class="custom-btn">
                          View Product
                        </a>
                      </td>
                      <td class="text-center product-remove">
                        <a href="#">
                          <FontAwesomeIcon icon={faXmark} />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td class="text-center">
                        <a href="#">
                          <img class="img-thumbnail" src={card1} alt="" />
                        </a>
                      </td>
                      <td class="text-start">
                        <a class="product-name" href="#">
                          Vel Neque Posuere
                        </a>
                        <br />
                      </td>
                      <td class="text-center product-price">$75.00</td>
                      <td class="text-center product-btn">
                        <a href="javascript:void(0)" class="custom-btn">
                          View Product
                        </a>
                      </td>
                      <td class="text-center product-remove">
                        <a href="#">
                          <FontAwesomeIcon icon={faXmark} />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td class="text-center">
                        <a href="#">
                          <img class="img-thumbnail" src={card2} alt="" />
                        </a>
                      </td>
                      <td class="text-start">
                        <a class="product-name" href="#">
                          Vel Neque Posuere
                        </a>
                        <br />
                      </td>
                      <td class="text-center product-price">$75.00</td>
                      <td class="text-center product-btn">
                        <a href="javascript:void(0)" class="custom-btn">
                          View Product
                        </a>
                      </td>
                      <td class="text-center product-remove">
                        <a href="#">
                          <FontAwesomeIcon icon={faXmark} />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Wishlist_header;
