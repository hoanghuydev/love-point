import React, { useEffect } from "react";
import styles from "./Home.module.scss";
import classNames from "classnames/bind";
import Banner from "./component/Banner";
import Rules from "./component/Rules";
import ListGifts from "./component/ListGifts";
const cx = classNames.bind(styles);
const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <div className="position-relative">
      <Banner />
      <Rules />
      <ListGifts />
      <div className={cx("my-love") + " d-none d-lg-flex"}>My Love</div>
    </div>
  );
};

export default Home;
