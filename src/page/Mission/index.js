import React, { useEffect, useState } from "react";
import * as missionServices from "~/apiServices/missionServices";
import styles from "./Mission.module.scss";
import classNames from "classnames/bind";
import FormProof from "./component/FormProof";
const cx = classNames.bind(styles);
const Mission = () => {
  const [missions, setMissions] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [idMission, setIdMission] = useState();
  const [loading, setLoading] = useState(false);
  const [reloadMission, setReloadMission] = useState(false);

  console.log(idMission);
  useEffect(() => {
    document.title = `Login`;
    const fetchData = async () => {
      setLoading(true);
      const missionList = await missionServices.getMissionList();
      setLoading(false);
      setMissions(missionList);
    };
    fetchData();
  }, [reloadMission]);
  return (
    <div
      className={
        (missions.length === 0
          ? cx("list-empty") + " container-lg"
          : " container-lg") + " mb-5"
      }
    >
      <div className={cx("title")}>Mission</div>
      {!loading &&
        missions.length > 0 &&
        missions.map((mission, index) => (
          <div className="row justify-content-between mt-5" key={index}>
            <div
              className={
                cx("circle-indexing") + " d-none d-sm-flex col-sm-1 p-0"
              }
            >
              <div className={cx("indexing")}>
                <p>{index + 1}</p>
              </div>
            </div>
            <div className={cx("mission-title") + " col-7 col-sm-6 text-start"}>
              <p> {mission.title}</p>
            </div>
            <div className={cx("mission-point") + " col-3 "}>
              <p>
                {mission.point}
                {"P"}
              </p>
            </div>
            <button
              className={
                cx("btn-done", mission.status === 0 ? "" : "btn-reviewing") +
                " col-2"
              }
              onClick={() => {
                setShowForm(true);
                setIdMission(mission._id);
              }}
              disabled={mission.status !== 0}
            >
              {mission.status === 1 ? "Reviewing" : "Done"}
            </button>
          </div>
        ))}
      {!loading && missions.length === 0 && (
        <div className="mt-4">
          There are no tasks at the moment, please come back later.
          <a href="https://www.facebook.com/hoanghuydev" className="text-blue">
            {" "}
            Chat with admin
          </a>
        </div>
      )}
      {loading && (
        <div
          className="spinner-border text-light mt-5"
          role="status"
          style={{
            "--mdb-spinner-width": "3rem",
            "--mdb-spinner-height": "3rem",
            fontSize: "10px",
          }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      {/* Form Proof */}
      {showForm && (
        <FormProof
          idMission={idMission}
          setShowForm={setShowForm}
          setReloadMission={setReloadMission}
          reloadMission={reloadMission}
        />
      )}
    </div>
  );
};

export default Mission;
