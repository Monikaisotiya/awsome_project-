import React, { useState } from "react";
import "../../css/style.css";
import "../../css/media.css";
import Mainlogo from "../../../src/images/logo.png";
import logo from "../../../src/images/logo.png";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faHeart,
  faLocationDot,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [State, setstate] = React.useState(false);

  const [searchopen, setSearchopen] = useState(false);

  const handleShowNavbar = () => {
    setstate(!State);
  };

  const handlesearch = () => {
    setSearchopen(!searchopen);
  };

  return (
    <div>
      <header className="header-section">
        <div className="header-inner">
          {/* <!-- header top -->   */}
          <div className="header-top">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12 col-lg-8 left-info text-lg-start text-center d-none d-lg-block">
                  <i>
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      style={{ color: "#ffff" }}
                    />
                  </i>
                  <span> Store </span>
                </div>
                <div className="col-12 col-lg-4 right-info">
                  <ul className="user-info">
                    <li className="account uniqeee">
                      <Link to={`/`}>
                        <span className="material-symbols-outlined ">
                          <PersonOutlineIcon />
                        </span>
                        SignIn
                      </Link>
                    </li>
                    <li className="wishlist">
                      <Link to={`/Wishlist`}>
                        <span className="material-symbols-outlined">
                          <FavoriteBorderIcon />
                        </span>
                        Wishlist
                      </Link>
                    </li>
                    <li className="cart">
                      <Link to={`/Cart`}>
                        <span className="material-symbols-outlined">
                          <ShoppingBagOutlinedIcon />
                        </span>
                        Cart <label>(0)</label>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- header center -->  ? */}
          <div className="header-center">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12 col-lg-3">
                  <div className="desktop_logo">
                    <Link to={`/Home`}>
                      <img
                        src={Mainlogo}
                        alt="main logo"
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="header-menu">
                    <nav className="navbar navbar-expand-lg">
                      <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <span className="navbar-toggler-icon"></span>
                      </button>
                      <div
                        className="collapse navbar-collapse justify-content-center"
                        id="navbarNav"
                      >
                        <ul className="navbar-nav">
                          <li className="nav-item">
                            <NavLink
                              className="nav-link"
                              activeClassName=" active"
                              aria-current="page"
                              to="/Home"
                            >
                              Home
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" activeClassName="active">
                              Features
                            </a>
                          </li>
                          <li className="nav-item">
                            <NavLink
                              className="nav-link"
                              activeClassName="active"
                              to={`/shoplist`}
                            >
                              Shop
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink
                              className="nav-link"
                              activeClassName="active"
                              to={`/About`}
                            >
                              About Us
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink
                              className="nav-link"
                              activeClassName="active"
                              to={`/contact`}
                            >
                              Contact
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>

                <div className="col-12 col-lg-3 text-end">
                  <div className="desktop_search_widget">
                    <div className="search_widget">
                      <form action="#" method="get" className="">
                        <input type="text" placeholder="Search" />
                        <button type="submit" className="search_header_submit">
                          <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                            style={{ color: "#f0f2f5" }}
                          />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- mobile menu -->   */}
          <div className="mobile-menu">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-3">
                  <div className="left-menu">
                    <nav
                      className={`mob-navigation  ${State && "active"}`}
                      onClick={handleShowNavbar}
                    >
                      <div className="mob-icon">
                        <span className="material-symbols-outlined bars">
                          {" "}
                          <MenuIcon />
                        </span>
                      </div>
                      <div className="mob-menu">
                        <div className="mob-close">
                          <span className="material-symbols-outlined">
                            {" "}
                            <CloseIcon />
                          </span>
                        </div>
                        <ul>
                          <li className="nav-item">
                            <a aria-current="page" href="/Home">
                              Home
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="javascript:void(0)">Features</a>
                          </li>
                          <li className="nav-item">
                            <a href="/product">Shop</a>
                          </li>
                          <li className="nav-item">
                            <a href="/About">About Us</a>
                          </li>
                          <li className="nav-item">
                            <a href="/contact">Contact</a>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
                <div className="col-6">
                  <div className="mobile-logo text-center">
                    <a href="/Home">
                      <img src={logo} alt="main logo" className="img-fluid" />
                    </a>
                  </div>
                </div>
                <div className="col-3">
                  <div className="right-menu text-end">
                    <div className="mobile-search">
                      <span
                        className="material-symbols-outlined search-toggle"
                        onClick={handlesearch}
                      >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </span>
                      {searchopen ? (
                        <div className="desktop_search_widget mobile_search_widget ">
                          <div className="search_widget">
                            <form action="#" method="get" className="">
                              <input type="text" placeholder="Search" />
                              <button
                                type="submit"
                                className="search_header_submit"
                              >
                                <i className="fa-solid fa-magnifying-glass">
                                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </i>
                              </button>
                            </form>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile-menu-overlay d-lg-none"></div>
        </div>
      </header>
    </div>
  );
};

export default Header;
