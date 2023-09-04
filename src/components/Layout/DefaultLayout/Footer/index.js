import React from "react";
import footerImg from "~/png/footer.png";
import styles from "./Footer.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const Footer = () => {
  return (
    <div className={cx("z-index-0")}>
      <div className="d-flex justify-content-end footer-img-div position-relative">
        <div className={cx("footer-img", "z-index-0") + " position-absolute"}>
          <img className="w-100" src={footerImg} />
        </div>
        <div className={cx("footer-text")}>
          <div className={cx("fix-text")}></div>
          <div style={{ width: "130%" }}>
            <div className={cx("title-text")}>Contact Me :</div>
            <div className="mt-3">
              <a className="mx-4" href="https://facebook.com/hoanghuydev">
                <i className={cx("icon") + " fa-brands fa-facebook"}></i>
              </a>
              <a className="mx-4" href="https://tiktok.com/@hoanghuydev">
                <i className={cx("icon") + " fa-brands fa-tiktok"}></i>
              </a>
              <a className="mx-4" href="https://instagram.com/hoanghuydev">
                <i className={cx("icon") + " fa-brands fa-instagram"}></i>
              </a>
            </div>
            <div>
              <div className={cx("title-text") + " mt-4"}>About Me :</div>
              <div className="d-flex justify-content-center">
                <p className={cx("about-text") + " w-50"}>
                  Tran Vo Hoang Huy (2003) va la anh yeu cua be CPA =))
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
