import { requestWithoutToken, requestWithToken } from "~/utils/request";

export const getUser = async () => {
  try {
    const res = await requestWithToken.get(
      "user/" + localStorage.getItem("userID")
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
