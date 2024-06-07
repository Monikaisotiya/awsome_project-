import React from "react";
import "../../css/style.css";
import "../../css/media.css";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import { Link } from "react-router-dom";

const Create_account = () => {
  return (
    <>
      <Header />

      <main id="wrapper" class="user-wrapper">
        <div class="container">
          <div class="user-box">
            <form action="" method="post">
              <div class="form-row row">
                <div class="form-group col-12">
                  <input
                    id="#"
                    class="form-control"
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div class="form-group col-12">
                  <input
                    id="#"
                    class="form-control"
                    type="text"
                    name="lasttname"
                    placeholder="Last Name"
                    required
                  />
                </div>
                <div class="form-group col-12">
                  <input
                    id="#"
                    class="form-control"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div class="form-group col-12">
                  <input
                    id="#"
                    class="form-control"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <div class="form-group col-12 col-md-6 text-center text-md-start mb-3 mb-md-0 ">
                  <button
                    id="submit-login "
                    class="btn custom-btn"
                    type="submit "
                  >
                    Create
                  </button>
                </div>
                <div class="form-group col-12 col-md-6 text-center text-md-end mb-0">
                  <Link to={`/Home`} class="custom-btn">
                    Return To Store
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Create_account;
