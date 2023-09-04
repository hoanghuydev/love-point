import { requestWithoutToken, requestWithToken } from "~/utils/request";

export const getGifts = async () => {
  try {
    const res = await requestWithoutToken.get("gift/list");
    return res.data.gifts;
  } catch (error) {
    console.log(error);
  }
};
export const exchangeGift = async (idGift) => {
  try {
    const res = await requestWithToken.post("gift/received/add/" + idGift);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const getReceivedGifts = async () => {
  try {
    const res = await requestWithToken.get("gift/received");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
