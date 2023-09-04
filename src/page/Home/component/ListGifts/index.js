import { useEffect, useState } from "react";
import styles from "./ListGifts.module.scss";
import classNames from "classnames/bind";
import cloudHeader from "~/png/cloudgiftheader.png";
import cloudFooter from "~/png/cloudgiftfooter.png";
import GiftCard from "~/components/GiftCard";
import * as giftServices from "~/apiServices/giftServices";
import * as userServices from "~/apiServices/userServices";
const cx = classNames.bind(styles);
const ListGifts = () => {
  const [gifts, setGifts] = useState([]);
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const listGifts = await giftServices.getGifts();
        setGifts(listGifts);
      } catch (error) {
        console.error("Error fetching gifts:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="mb-5" id="gift-list">
      <div className={cx("cloud-header") + " "}>
        <img className="w-100 h-100" src={cloudHeader} />
      </div>
      <div className={cx("gifts-body") + " "}>
        <div className="container-lg d-flex flex-column">
          <div className={cx("title-list-gifts")}>LIST WISH AND GIFT</div>
          <div className="row justify-content-center">
            {gifts &&
              gifts.map((gift, index) => (
                <GiftCard
                  key={index}
                  _id={gift._id}
                  img={gift.image}
                  title={gift.title}
                  point={gift.point}
                />
              ))}
          </div>
        </div>
      </div>
      <div className={cx("cloud-footer") + " h-100 "}>
        <img className="w-100 h-100" src={cloudFooter} />
      </div>
    </div>
  );
};

export default ListGifts;
