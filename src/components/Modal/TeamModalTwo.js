import React, {useContext} from "react";
import {TeamContext} from "../../context/TeamContext";
// import "./Modal.scss";

function TeamModalTwo() {
  const {showModal, index, advisoryTeam, setshowModal} = useContext(
    TeamContext
  ).contextValue;

  const handleModalClick = (e) => {
    if (e.target.classList[0] === "modal") {
      setshowModal(false);
    }
  };

  return (
    <div
      className={showModal ? "modal fade show d-block" : "modal"}
      id="exampleModal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalLabel"
      style={{
        paddingRight: 16,
        background: "rgba(0,0,0,.5)",
      }}
      onClick={(e) => handleModalClick(e)}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {advisoryTeam[index]?.firstname} {advisoryTeam[index]?.middlename}{" "}
              {advisoryTeam[index].lastname}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => setshowModal(false)}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-sm-5 mb-4 mb-sm-0">
                <img
                  alt="team"
                  className="rounded"
                  src={
                    advisoryTeam[index].picture
                      ? `./images/${advisoryTeam[index]?.picture}.jpg`
                      : `./images/profile-pix.png`
                  }
                  width="100%"
                />
              </div>
              <div className="col-sm-7">
                <div className="d-flex align-items-start mb-2">
                  <span className="text-muted">Department:</span>
                  <p style={{fontWeight: "600"}} className="m-0 pl-2">
                    {advisoryTeam[index].department}
                  </p>
                </div>
                <div className="d-flex align-items-start mb-2 border-bottom pb-3">
                  <span className="text-muted">Role:</span>
                  <p style={{fontWeight: "600"}} className="m-0 pl-2">
                    {advisoryTeam[index].role}
                  </p>
                </div>
                <div className="border-bottom mb-2 pb-3">
                  <span className="title title--small">Experience</span>
                  <p className="m-0">{advisoryTeam[index].experience}</p>
                </div>
                <div className="">
                  <span className="title title--small">Education</span>
                  <p>{advisoryTeam[index].education}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamModalTwo;
