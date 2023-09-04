import React from "react";
import styles from "../../Home.module.scss";
import classNames from "classnames/bind";
import saumuiImg from "~/png/saumui.jpg";
const cx = classNames.bind(styles);
const Rules = () => {
  return (
    <div className="mt-5 ms container-lg">
      <div className="row ">
        <div
          className={
            cx("avatar") +
            " col-1 col-md-2 col-lg-1 d-flex justify-content-center p-0 my-md-auto mx-auto mx-md-0 my-4"
          }
        >
          <div className="row justify-content-center p-0">
            <div className="col-12 p-0">
              <img
                className={cx("avatar-img") + " rounded-circle w-100 h-100"}
                src={saumuiImg}
              />
            </div>{" "}
          </div>
        </div>
        <div
          className={
            cx("rule-title") +
            " col-12 col-md-8 col-lg-8 m-sm-auto my-lg-auto mx-md-4"
          }
        >
          I’d give up my life if I could command one smile of your eyes, one
          touch of your hand. Here are the scoring rules :
        </div>
      </div>

      <div className="row justify-content-center mt-5 mb-2">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="row justify-content-center">
            <div className={cx("circle-indexing") + " col-1 p-0"}>
              <div className={cx("indexing")}>
                <p>1</p>
              </div>
            </div>
            <div className={cx("text-rule") + " d-flex col-10 col-md-11"}>
              <p className="m-auto">
                Complteting 1 mission will earn you an additional point
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-lg-between  justify-content-center mt-lg-4">
        <div className="col-12 col-md-8 col-lg-4 mb-2">
          <div className="row justify-content-center">
            <div className={cx("circle-indexing") + " col-1 p-0"}>
              <div className={cx("indexing")}>
                <p>2</p>
              </div>
            </div>
            <div className={cx("text-rule") + " d-flex col-10"}>
              <p className="m-auto">
                Provide your proof when you complete mission
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-8 col-lg-4 mb-2">
          <div className="row justify-content-center">
            <div className={cx("circle-indexing") + " col-1 p-0"}>
              <div className={cx("indexing")}>
                <p>3</p>
              </div>
            </div>
            <div className={cx("text-rule") + " d-flex col-10"}>
              <p className="m-auto">
                If you're not good, it will be deducted 2 points
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
