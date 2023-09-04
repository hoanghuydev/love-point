import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./FormProof.module.scss";
import * as missionServices from "~/apiServices/missionServices";
import UploadProof from "../UploadProof";
import { toast } from "react-toastify";

const cx = classNames.bind(styles);
const FormProof = ({
  idMission,
  setShowForm,
  setReloadMission,
  reloadMission,
}) => {
  const [mission, setMission] = useState();
  const [selectedImage, setSelectedImage] = useState(null);
  const [email, setEmail] = useState();
  const [loading, setLoading] = useState(false);

  const handleSendMail = async () => {
    await missionServices.sendMail(email, mission._id);
    await missionServices.requestReview("", mission._id);
    setLoading(false);
    setShowForm(false);
    setReloadMission(!reloadMission);
    toast.success("Email sent!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    toast.success("A review request has been submitted!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const missionIn4 = await missionServices.getMission(idMission);
      setMission(missionIn4);
    };
    fetchData();
  }, []);
  return (
    <div
      className={
        cx("background-fixed") +
        " position-fixed top-0 end-0 start-0 bottom-0 d-flex"
      }
    >
      <div
        className={cx("form-proof") + " w-75 h-75 m-auto d-flex flex-column"}
      >
        <div
          className={cx("close") + " position-absolute"}
          onClick={() => {
            setShowForm(false);
          }}
        >
          <i className="fa-solid fa-xmark"></i>
        </div>
        <h2 className={cx("title") + " mt-4"}>{mission && mission.title}</h2>
        {mission && mission.description === "" && (
          <UploadProof
            idMission={idMission}
            setReloadMission={setReloadMission}
            reloadMission={reloadMission}
          />
        )}
        {mission && mission.description !== "" && (
          <div className="p-5">
            <input
              type="email"
              name="email"
              className={cx("form-input") + " py-1 w-100"}
              placeholder="Enter your email address"
              autoComplete="off"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              validated
            />
            <button
              className={cx("submit") + " mt-4 p-2"}
              onClick={() => {
                setLoading(true);
                handleSendMail();
              }}
              disabled={loading === true}
            >
              {loading ? (
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
              ) : (
                "Receive Mail"
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormProof;
