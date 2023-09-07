import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./UploadProof.module.scss";
import * as missionServices from "~/apiServices/missionServices";
import { toast } from "react-toastify";
const cx = classNames.bind(styles);
const UploadProof = ({
  loading,
  setLoading,
  idMission,
  setReloadMission,
  reloadMission,
  setShowForm,
}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [File, setFile] = useState(null);
  const handleUploadProof = async () => {
    try {
      let urlProof = await missionServices.uploadProof(File, idMission);
      const mission = await missionServices.requestReview(
        urlProof.dowloadUrl,
        idMission
      );
      setShowForm(false);
      if (mission.status === 1) {
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
        setReloadMission(!reloadMission);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) setSelectedImage(URL.createObjectURL(file));
    setFile(file);
  };

  return (
    <div>
      <label className={cx("custom-file-upload")}>
        <input type="file" accept="" onChange={handleImageChange} />
      </label>
      {selectedImage && (
        <div className={cx("img-preview") + " mx-auto mb-3"}>
          <img
            className={cx("img-proof") + " w-100 h-100"}
            src={selectedImage}
            alt="Preview"
          />
        </div>
      )}
      <button className={cx("submit")} onClick={handleUploadProof}>
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
          "Confirm"
        )}
      </button>
    </div>
  );
};

export default UploadProof;
