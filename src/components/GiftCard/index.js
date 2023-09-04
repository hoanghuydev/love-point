import React from "react";
import styles from "./GiftCard.module.scss";
import classNames from "classnames/bind";
import { toast } from "react-toastify";
import * as giftServices from "~/apiServices/giftServices";
import * as userServices from "~/apiServices/userServices";
import { actions, useStore } from "~/store";
const cx = classNames.bind(styles);
const GiftCard = ({ _id, img, title, point, textButton }) => {
  const [state, dispatch] = useStore();
  const { user } = state;
  const handleExchangeGift = async () => {
    if (JSON.parse(localStorage.getItem("isLoggedIn"))) {
      try {
        await giftServices.exchangeGift(_id);
        const userIn4 = await userServices.getUser();
        dispatch(actions.setUser(userIn4));
        toast.success("Gift exchange successful!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error("Please login first!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <div className={" col-6 col-sm-5 col-md-4 col-lg-3 mb-5 mt-2"}>
      <div className={cx("gift-card")}>
        <div className={cx("img-card")}>
          <img src={img} className="w-100 h-100" />
        </div>
        <div>
          <div>
            <p className={cx("name-text") + " my-2 my-sm-3"} key={"name"}>
              {title}
            </p>
          </div>
          <p className={cx("point-text") + " my-2 my-sm-3"} key={"point"}>
            {point}
            {"P"}
          </p>
          <div></div>
        </div>
        <button
          className={
            cx(
              "btn-get-gift",
              user &&
                user.point < point &&
                JSON.parse(localStorage.getItem("isLoggedIn"))
                ? "disable-btn"
                : ""
            ) + " mb-3"
          }
          disabled={
            user &&
            user.point < point &&
            JSON.parse(localStorage.getItem("isLoggedIn"))
              ? true
              : false
          }
          onClick={handleExchangeGift}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="50"
            viewBox="0 0 150 50"
            fill="none"
            className="w-100 h-auto"
          >
            <g clipPath="url(#clip0_6_32)">
              <rect width="150" height="50" rx="29" fill="#5F4B74" />
              <ellipse cx="116" cy="4" rx="13" ry="12" fill="#EDD5CB" />
              <circle cx="57" cy="31" r="17" fill="#EDD5CB" />
            </g>
            <defs>
              <clipPath id="clip0_6_32">
                <rect width="150" height="50" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p>Get</p>
        </button>
      </div>
    </div>
  );
};

export default GiftCard;
