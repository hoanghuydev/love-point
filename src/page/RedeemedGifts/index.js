import React, { useEffect, useState } from "react";
import * as giftServices from "~/apiServices/giftServices";
import ReceivedGiftCard from "./component/ReceivedGiftCard";
import styles from "./RedeemGifts.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const RedeemedGifts = () => {
  const [receivedGifts, setReceivedGifts] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log(receivedGifts.length);
  useEffect(() => {
    document.title = `Redeemed Gifts`;
    const fetchData = async () => {
      setLoading(true);
      const gifts = await giftServices.getReceivedGifts();
      setLoading(false);
      setReceivedGifts(gifts);
    };
    fetchData();
  }, []);
  return (
    <div
      className={
        receivedGifts.lenght !== 0
          ? cx("list-empty") + " container-lg"
          : " container-lg"
      }
    >
      <div className={cx("title")}>Redeemed Gifts</div>
      {!loading && (
        <div className="row justify-content-center">
          {receivedGifts.length > 0 &&
            receivedGifts.map((gift, index) => (
              <ReceivedGiftCard
                title={gift.title}
                createdAt={gift.createdAt}
                point={gift.point}
                image={gift.image}
              />
            ))}
          {receivedGifts.length === 0 && (
            <div className="mt-4">
              You haven't received any gifts yet.
              <a href="/mission" className="text-blue">
                {" "}
                Do missions
              </a>
            </div>
          )}
        </div>
      )}
      {loading && (
        <div
          className="spinner-border text-light mt-5"
          role="status"
          style={{
            "--mdb-spinner-width": "3rem",
            "--mdb-spinner-height": "3rem",
            fontSize: "10px",
          }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default RedeemedGifts;
