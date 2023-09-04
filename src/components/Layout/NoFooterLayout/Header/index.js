import React, { useEffect, useState } from "react";
import headerImg from "~/png/header.png";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const Header = ({ user }) => {
  if (JSON.parse(localStorage.getItem("isLoggedIn"))) {
    return (
      <div>
        <div
          className={cx("z-index-0") + " position-absolute end-0"}
          style={{ width: "40%" }}
        >
          <img className="w-100" src={headerImg} />
        </div>
        <nav
          className="navbar navbar-expand-lg navbar-light bg-transparent"
          style={{ boxShadow: "none", backgroundColor: "none" }}
        >
          <div className="container-fluid">
            <a className="navbar-brand mt-2 mt-lg-0" href="#">
              <img
                src="https://i.ibb.co/fXKK9L4-low-resolution-logo-color-on-transparent-background.png"
                height="40"
                alt="MDB Logo"
                loading="lazy"
              />
            </a>
            <button
              className="navbar-toggler text-white"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>

            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto mb-2 mb-lg-0 ms-auto">
                <li className="nav-item mx-4">
                  <a className="nav-link text-white" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item mx-4">
                  <a className="nav-link text-white" href="/mission">
                    Mission
                  </a>
                </li>
                <li className="nav-item mx-4">
                  <a className="nav-link text-white" href="/redeemed-gifts">
                    Redeem Gift
                  </a>
                </li>
                <li className="nav-item mx-4 d-flex justify-content-center ">
                  <div className="d-lg-flex justify-content-center ">
                    <div className="d-lg-flex">
                      {user && (
                        <p className="point-user justify-content-center m-auto me-1">
                          {user.point}
                        </p>
                      )}
                      <div className="dropdown">
                        <a
                          className="dropdown-toggle h-100 d-flex align-items-center hidden-arrow"
                          href="#"
                          id="navbarDropdownMenuAvatar"
                          role="button"
                          data-mdb-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fa-solid fa-user m-auto text-white justify-content-center"></i>
                        </a>
                        <ul
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="navbarDropdownMenuAvatar"
                        >
                          <li>
                            <button
                              className="dropdown-item"
                              onClick={() => {
                                localStorage.removeItem("accessToken");
                                localStorage.removeItem("isLoggedIn");
                                localStorage.removeItem("userID");

                                window.location.href = "/";
                              }}
                            >
                              Logout
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
  return (
    <div>
      <div
        className={cx("z-index-0") + " position-absolute end-0"}
        style={{ width: "40%" }}
      >
        <img className="w-100" src={headerImg} />
      </div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-transparent"
        style={{ boxShadow: "none", backgroundColor: "none" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand mt-2 mt-lg-0" href="#">
            <img
              src="https://i.ibb.co/fXKK9L4-low-resolution-logo-color-on-transparent-background.png"
              height="40"
              alt="MDB Logo"
              loading="lazy"
            />
          </a>
          <button
            className="navbar-toggler text-white"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0 ms-auto">
              <li className="nav-item mx-4">
                <a className="  text-white " href="/">
                  Home
                </a>
              </li>
              <li className="nav-item mx-4">
                <a className="  text-white " href="/login">
                  Login / Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
