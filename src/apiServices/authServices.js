import { requestWithoutToken } from "~/utils/request";

export const login = async (username, password) => {
  try {
    const res = await requestWithoutToken.post("v1/auth/login", {
      username,
      password,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
