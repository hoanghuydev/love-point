import React, { useEffect, useState } from "react";
import styles from "./Login.module.scss";
import classNames from "classnames/bind";
import { requestWithoutToken } from "~/utils/request";
import * as authServices from "~/apiServices/authServices";
const cx = classNames.bind(styles);
const Login = ({ isLoggedIn }) => {
  useEffect(() => {
    document.title = "Login";
  }, []);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameValidate, setUsernameValidate] = useState("");
  const [passwordValidate, setPasswordValidate] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin(e);
    }
  };
  const handleValidate = async () => {
    let loginInfo = {};
    setUsernameValidate(
      username === "" ? "Please enter your username" : usernameValidate
    );
    setPasswordValidate(
      password === "" ? "Please enter your password" : passwordValidate
    );
    if (username && password) {
      loginInfo = await authServices.login(username, password);
      if (loginInfo.code === 404) {
        if (loginInfo.message === "Invalid password") {
          setPasswordValidate(loginInfo.message);
        } else {
          setUsernameValidate(loginInfo.message);
        }
      }
      return loginInfo;
    }
    return loginInfo;
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginLoading(true);
    const user = await handleValidate();
    setLoginLoading(false);
    if (user.accessToken) {
      localStorage.setItem("accessToken", user.accessToken);
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("userID", user._id);

      window.location.href = "/";
    }
  };
  return (
    <div className="container-xl mt-5">
      <h1 className={cx("form-title") + " text-start"}>Login</h1>
      <form id="upload-form">
        <div className="my-5">
          <input
            type="text"
            name="username"
            className={
              cx("form-input", {
                "form-input-error": usernameValidate !== "",
              }) + " py-1 w-100"
            }
            placeholder="Username"
            autoComplete="off"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setUsernameValidate("");
            }}
            onFocus={(e) => {
              setUsernameValidate("");
            }}
            onKeyPress={handleKeyPress}
          />
          <div className={cx("form-validate") + " "}>{usernameValidate}</div>
        </div>
        <div className="my-5">
          <input
            type="password"
            name="password"
            className={
              cx("form-input", {
                "form-input-error": passwordValidate !== "",
              }) + " py-1 w-100"
            }
            placeholder="Password"
            autoComplete="off"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordValidate("");
            }}
            onFocus={(e) => {
              setPasswordValidate("");
            }}
            onKeyPress={handleKeyPress}
          />
          <div className={cx("form-validate") + " "}>{passwordValidate}</div>
        </div>
        <div className="row justify-content-center">
          <button
            className={
              cx("btn-submit") +
              " col-sm-8 col-md-6 col-lg-4 align-self-center mb-5"
            }
            onClick={handleLogin}
            disabled={loginLoading ? true : false}
          >
            {!loginLoading && "Login"}
            {loginLoading && (
              <div
                className="spinner-border text-light"
                role="status"
                style={{
                  "--mdb-spinner-width": "1.4rem",
                  "--mdb-spinner-height": "1.4rem",
                  fontSize: "10px",
                }}
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
