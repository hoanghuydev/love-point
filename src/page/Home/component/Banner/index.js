import React from "react";
import styles from "../../Home.module.scss";

import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const Banner = () => {
  return (
    <div className={cx("banner") + " row container-lg"}>
      <div className={cx("banner__title") + " col-6"}>
        <p> Wishlist</p>
        <div className={cx("heart-icon-1")}>
          <i className="fa-solid fa-heart"></i>
        </div>
        <div className={cx("heart-icon-2")}>
          <i className="fa-solid fa-heart"></i>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 col-sm-9 col-lg-6 ms-lg-5">
          <div className={cx("banner-btn") + " "}>
            <a
              href="#gift-list"
              className={cx("btn-get-now") + " btn btn-danger btn-rounded "}
            >
              Get now
            </a>
            <a
              href="/mission"
              className={cx("btn") + " btn btn-outline-light btn-rounded "}
            >
              Go on missions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
