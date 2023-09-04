import Header from "./Header";
import Footer from "./Footer";
import React, { useEffect, useState, createContext } from "react";
import styles from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";
import * as userServices from "~/apiServices/userServices";
import { actions, useStore } from "~/store";

const cx = classNames.bind(styles);
export const UserContext = createContext();
const DefaultLayout = ({ children }) => {
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
      <Footer />
    </div>
  );
};

export default DefaultLayout;
