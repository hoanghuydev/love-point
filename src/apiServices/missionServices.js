import { requestWithoutToken, requestWithToken } from "~/utils/request";

export const getMissionList = async () => {
  try {
    const res = await requestWithToken.get("mission/list");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const getMission = async (idMission) => {
  try {
    const res = await requestWithToken.get(`mission/${idMission}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const sendMail = async (email, idMission) => {
  try {
    const res = await requestWithToken.post(`mission/sendmail/${idMission}`, {
      email,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const requestReview = async (urlProof, idMission) => {
  try {
    const res = await requestWithToken.put(`mission/review/add/${idMission}`, {
      urlProof,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const uploadProof = async (file, idMission) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    const res = await requestWithToken.post(
      `upload/proof/${idMission}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
