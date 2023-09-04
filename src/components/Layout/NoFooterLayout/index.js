import Header from "./Header";
import React, { useEffect, useState, createContext } from "react";
import * as userServices from "~/apiServices/userServices";
import { actions, useStore } from "~/store";

export const UserContext = createContext();
const NoFooterLayout = ({ children }) => {
  const [state, dispatch] = useStore();
  const { user } = state;
  useEffect(() => {
    const fetchData = async () => {
      if (localStorage.getItem("userID")) {
        const userInfo = await userServices.getUser();
        dispatch(actions.setUser(userInfo));
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <Header user={user} />
      <div className="">{children}</div>
    </div>
  );
};

export default NoFooterLayout;
