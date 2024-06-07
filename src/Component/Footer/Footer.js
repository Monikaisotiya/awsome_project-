import React, { useState } from "react";
import "../../css/style.css";
import "../../css/media.css";
import Footerlogo from "../../../src/images/footer-logo.png";
import Payment from "../../../src/images/payment-logo.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const [openDropDown, setOpenDropDown] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const handlone = () => {
    setOpen1(!open1);
  };
  const handltwo = () => {
    setOpen2(!open2);
  };
  const handlthree = () => {
    setOpen3(!open3);
  };
  const handeldropdownmenu = (id) => {
    setOpenDropDown(openDropDown === id ? null : id);
  };

  return (
    <div>
      <footer className="footer-section">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-6">
                  <div className="footer_newsletter_widget">
                    <div className="newsletter_widget">
                      <form action="#" method="get" className="">
                        <input
                          type="email"
                          placeholder="Your Email Address..."
                        />
                        <button type="submit" className="newsletter_submit">
                          Subscribe
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6 text-center text-lg-end">
                  <div className="footer-social">
                    <ul className="footer-social-list">
                      <li>
                        <a
                          href="javascript:void(0)"
                          className="footer-social-icon"
                        >
                          <span class="material-icons md-24">
                            <FacebookOutlinedIcon />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          className="footer-social-icon"
                        >
                          <i className="fa-brands fa-instagram">
                            <InstagramIcon />
                          </i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          className="footer-social-icon"
                        >
                          <i className="fa-brands fa-twitter">
                            <TwitterIcon />
                          </i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          className="footer-social-icon"
                        >
                          <i className="fa-brands fa-linkedin-in">
                            <LinkedInIcon />
                          </i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          className="footer-social-icon"
                        >
                          <i className="fa-brands fa-pinterest-p">
                            <PinterestIcon />
                          </i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-center">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-3">
                  <div className="footer-contact">
                    <div className="footer-logo">
                      <a href="javascript:void(0)">
                        <img
                          className="img-fluid"
                          src={Footerlogo}
                          alt="footer logo"
                        />
                      </a>
                    </div>
                    <ul className="footer-contact-info">
                      <li>
                        <FontAwesomeIcon
                          icon={faLocationDot}
                          style={{ color: "#62656a" }}
                        />
                        <span className="contact-content">
                          No: 58 A, East Madison Street, <br />
                          Baltimore, MD, USA 4508.
                        </span>
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faPhone}
                          style={{ color: "#41464e" }}
                        />
                        <span className="contact-content">
                          (+100) 123 456 7890
                        </span>
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          style={{ color: "#3f4550" }}
                        />
                        <span className="contact-content">
                          info@example.com
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-lg-3">
                  <div className="footer-block">
                    <h5 className="footer-block-title d-none d-lg-block ">
                      Information
                    </h5>
                    <a
                      className="footer-block-title d-lg-none"
                      data-bs-toggle="collapse"
                      onClick={handlone}
                      aria-expanded={openDropDown === "collapseExample"}
                      aria-controls="collapseExample"
                    >
                      <span>information</span>
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className={open1 ? "roted" : "noroted"}
                      />
                    </a>
                    {open1 ? (
                      <ul className="footer-link " id="collapseExample">
                        <li>
                          <a href="/search">Search Terms</a>
                        </li>
                        <li>
                          <a href="/search">Advanced Search</a>
                        </li>
                        <li>
                          <a href="/Faqs">Faq's</a>
                        </li>
                        <li>
                          <a href="/contact">Store Location</a>
                        </li>
                        <li>
                          <a href="/OrderReturn">Order & Return</a>
                        </li>
                      </ul>
                    ) : null}
                    <ul className="footer-link mobilenone" id="information">
                      <li>
                        <a href="/search">Search Terms</a>
                      </li>
                      <li>
                        <a href="/search">Advanced Search</a>
                      </li>
                      <li>
                        <a href="/Faqs">Faq's</a>
                      </li>
                      <li>
                        <a href="/contact">Store Location</a>
                      </li>
                      <li>
                        <a href="/OrderReturn">Order & Return</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-lg-3">
                  <div className="footer-block">
                    <h5 className="footer-block-title d-none d-lg-block">
                      Help
                    </h5>
                    <a
                      className="footer-block-title d-lg-none"
                      data-bs-toggle="collapse"
                      href="#help"
                      role="button"
                      aria-expanded="true"
                      aria-controls="collapseExample"
                      onClick={handltwo}
                    >
                      <span>Help</span>
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className={open2 ? "roted" : "noroted"}
                      />
                    </a>
                    {open2 ? (
                      <ul className="footer-link ">
                        <li>
                          <a href="/search">Search</a>
                        </li>
                        <li>
                          <a href="/search">Help</a>
                        </li>
                        <li>
                          <a href="/Faqs">Information</a>
                        </li>
                        <li>
                          <a href="/Privacy">Privacy Policy</a>
                        </li>
                        <li>
                          <a href="/Shopping">Shipping Details</a>
                        </li>
                      </ul>
                    ) : null}

                    <ul className="footer-link mobilenone" id="help">
                      <li>
                        <a href="/search">Search</a>
                      </li>
                      <li>
                        <a href="/search">Help</a>
                      </li>
                      <li>
                        <a href="/Faqs">Information</a>
                      </li>
                      <li>
                        <a href="/Privacy">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="/Shopping">Shipping Details</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-lg-3">
                  <div className="footer-block">
                    <h5 className="footer-block-title d-none d-lg-block">
                      Support
                    </h5>
                    <a
                      className="footer-block-title d-lg-none"
                      data-bs-toggle="collapse"
                      href="#support"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                      onClick={handlthree}
                    >
                      <span>Support</span>
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className={open3 ? "roted" : "noroted"}
                      />
                    </a>
                    {open3 ? (
                      <ul className="footer-link ">
                        <li>
                          <a href="/contact">Contact Us</a>
                        </li>
                        <li>
                          <a href="/About">About Us</a>
                        </li>
                        <li>
                          <a href="/contact">Careers</a>
                        </li>
                        <li>
                          <a href="/OrderReturn">Refund & Return</a>
                        </li>
                        <li>
                          <a href="/Shopping">Deliveries</a>
                        </li>
                      </ul>
                    ) : null}

                    <ul className="footer-link mobilenone" id="support">
                      <li>
                        <a href="/contact">Contact Us</a>
                      </li>
                      <li>
                        <a href="/About">About Us</a>
                      </li>
                      <li>
                        <a href="/contact">Careers</a>
                      </li>
                      <li>
                        <a href="/OrderReturn">Refund & Return</a>
                      </li>
                      <li>
                        <a href="/Shopping">Deliveries</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="row align-items-center">
                <div className="footer-left col-12 col-md-6">
                  <div className="copyright-block text-lg-start text-center mb-lg-0 mb-2">
                    Copyright © <a href="#">Awesome Kids</a> All Rights
                    Reserved.
                  </div>
                </div>
                <div className="footer-right col-12 col-md-6">
                  <div className="payment-img text-lg-end text-center">
                    <img
                      className="img-fluid"
                      src={Payment}
                      alt="payment logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
