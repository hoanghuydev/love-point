import React from "react";
import styles from "./ReceivedGiftCard.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const ReceivedGiftCard = ({ image, title, point, createdAt }) => {
  return (
    <div className={" col-6 col-sm-5 col-md-4 col-lg-3 mb-5 mt-2"}>
      <div className={cx("gift-card")}>
        <div className={cx("img-card")}>
          <img src={image} className="w-100 h-100" />
        </div>
        <div>
          <div>
            <p className={cx("name-text") + " my-2 my-sm-3"} key={"name"}>
              {title}
            </p>
          </div>

          <div>
            <p className={cx("point-text") + " my-2 my-sm-3"} key={"point"}>
              {point}
              {"P"}
            </p>
          </div>
          <div>
            <p className={cx("point-text") + " my-2 my-sm-3"} key={"point"}>
              {createdAt.slice(0, 10)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceivedGiftCard;
